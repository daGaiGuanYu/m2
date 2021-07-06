class Logger {
  constructor(msg) {
    this.msg = msg
    console.log.doing(msg)
  }
  success() {
    console.log.success(this.msg)
  }
  error(err) {
    console.log.error(this.msg)
    if(err)
      console.error(err)
  }
}

console.log.create = function(msg) {
  return new Logger(msg)
}

console.log.success = function () {
  console.log('[成功]', ...arguments)
}

console.log.doing = function () {
  console.log('[正在]', ...arguments)
}

console.log.error = function () {
  console.error('[失败]', ...arguments)
}