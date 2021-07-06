module.exports = class {
  constructor(req, res, ctx) {
    this.request = req
    this.response = res
    this.context = ctx
  }

  getJson() {

  }

  getParam() {

  }

  responseJson(data) {
    this.response.send(JSON.stringify(data))
  }
}