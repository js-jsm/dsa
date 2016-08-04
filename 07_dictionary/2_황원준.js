class sentenceDismantle extends Dictionary {
  constructor(str) {
    super()

    var regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi
    var words = str.replace(regExp,"").split(" ");
    if (words.length <= 0) {
      console.log("please, typing the sentence.")
    } else {
      return this.wordProcessing(words);
    }

  }

  wordProcessing(words) {
    for ( let i = 0; i < words.length; i += 1) {
      if (this.has(words[i])) {
          this.append(words[i], this.get(words[i]) + 1)
        } else {
          this.append(words[i],1)
        }
    }
  }
  
  print() {
    return this.printAll()
  }


}
