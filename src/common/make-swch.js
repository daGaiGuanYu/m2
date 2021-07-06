module.exports = function(...list) {
  for(let i=0; i<list.length-1; i++) {
    const current = list[i]
    list[i] = function(ctx) {
      return current(ctx, list[i+1]) // 因为闭包，所以此处不需要倒序
    }
  }
  return list[0]
}