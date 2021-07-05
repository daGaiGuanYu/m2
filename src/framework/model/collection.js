const priv = Symbol()

module.exports = class {
  constructor(option) {
    this[priv] = option // { name, attribute }
  }

  setCollection(client) {
    this[priv].collection = client.db().collection(this[priv].name)
    this.setCollection = setCollection
  }

  find(where) {

  }

  findById(id) {

  }

  update(where, data) {
    checkData.call(this, data)

  }

  insert(data) {
    checkData.call(this, data)

  }

  upsert(data) {
    checkData.call(this, data)

  }

  drop(where) {

  }
}

function checkData(data) {

}

function setCollection() {
  throw Error('collection 已设置')
}