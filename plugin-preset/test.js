// 箭头函数
let foo = () => { }; // ES6 class


class List {
  constructor(pi = 1, ps = 10) {
    this.pi = 1;
    this.ps = 10;
  }

  loadData() { }

  static genId() {
    return ++this.id;
  }

}

let name = 'lyzg';
let obj = {
  baseName: name,
  [name + '_id']: 'baseName'
};
