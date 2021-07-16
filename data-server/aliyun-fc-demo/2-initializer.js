exports.initializer = (context, callback) => {
  console.log('initializing')
  setTimeout(function() {
    console.log('initializing callback')
    callback({
      name: 'initializer'
    })
  }, 3000)
}

exports.handler = function(req, res, ctx) {
  const result = { // 响应给前端的数据
    ctx,
    name: 'aliyun-fc',
    feature: 'free (on money)',
    testArr: [1,2,3],
    testArrAgain: [
      [1,2,3],
      {
        name: 'test-arr'
      }
    ],
    testObj: {
      name: 'test-obj'
    }
  }
  const resultStr = JSON.stringify(result) // 转成字符串格式（“json 数据”是一种特殊的字符串）
  res.send(resultStr) // 发！
}