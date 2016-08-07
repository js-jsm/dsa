class Dictionary {
  constructor() {
    this.store = []
  }

  append(key, value) {
    this.store[key] = value
  }

  get(key) {
    return this.has(key) ? this.store[key] : undefined
  }

  remove(key) {
    if (this.has(key)) {
      delete this.store[key]
      return true
    }
    return false
  }

  has(key) {
    return key in this.store
  }

  clear() {
    this.store = [];
    return console.log("clear complete storage")
  }

  printValues() {
    var values = []

    for (var k in this.store) {
      if(this.has(k)) {
        values.push(this.store[k])
      }
    }
    return values
  }

  printAll() {
    return this.store;
  }

}

class PhoneBook extends Dictionary {
  constructor() {
    super();
    for (let i = 0; i < 10; i += 1) {
      this.append(`USER${i}`, `010-${this.createPNum()}-${this.createPNum()}`)
    }
  }

  createPNum() {
    let checkNum = String(parseInt(Math.random() * 9999))
    
    if (checkNum.length == 4) {
      return checkNum
    } else {
      return this.createPNum()
    }
  }

}

var pbook = new PhoneBook()

pbook.printValues() //모든 전화번호 출력 기능
pbook.get("USER0") //특정 전화번호 출력 기능
pbook.append("jacob","010-4444-5555") //전화번호 추가
pbook.remove("USER0") //전화번호 삭제
pbook.clear() //모든 전화번호 삭제
