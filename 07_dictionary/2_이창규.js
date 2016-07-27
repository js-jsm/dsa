class Dictionary {
  constructor() {
    this.dataStore = [];
  }

  add(key) {
    if(this.find(key)) {
      this.dataStore[key] += 1;
    } else {
      this.dataStore[key] = 1;
    }
  }

  find(key) {
    return this.dataStore[key];
  }

  showAll() {
    let thisDataStore = this.dataStore;
    Object.keys(thisDataStore).forEach( (key) => {
      console.log(`${key}는 ${thisDataStore[key]}개 입니다.`);
    });
  }
}
const newdictionart = new Dictionary();
const SentenceAdd = function(sentences) {
  const words = sentences.split(' ');
  words.forEach( (word) => newdictionart.add(word) );
  newdictionart.showAll();
}

SentenceAdd('ok ok ok yes yes yes no no');
