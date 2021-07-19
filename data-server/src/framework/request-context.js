/**
 * 构造请求上下文
 * @param {import('http').IncomingMessage} request 
 * @param {import('http').ServerResponse} response 
 * @returns 请求上下文
 */
 module.exports = function(request, response, aliyunFCContext) {
  const ret = { request, response, aliyunFCContext }
  
  let jsonDataPromise
  ret.getJson = function() {
    if(jsonDataPromise)
      return jsonDataPromise
    return jsonDataPromise = new Promise( resolve => {
      let jsonStr = ''
      request.on('data', chunck =>
        jsonStr += chunck.toString()
      )
      request.on('end', () => {
        try {
          resolve(JSON.parse(jsonStr))
        } catch {
          logger.error('解析请求 Body 里的 json 数据 失败')
          resolve()
        }
      })
    })
  }

  return ret
}