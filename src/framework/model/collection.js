const priv = Symbol()

module.exports = class {
  constructor({ name, ...option }) {
    this.name = name
    this[priv] = option // { name, attribute }
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
    return this.collection.insertOne(data)
  }

  upsert(data) {
    checkData.call(this, data)

  }

  drop(where) {

  }
}

function checkData(data) {

}