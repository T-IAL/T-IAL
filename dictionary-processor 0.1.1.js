class Dictionary{
  constructor(name){//name是字符串
    this.name = name;
  }
  add_word(word,definition){//word,definition都是字符串
    Object.defineProperty(this, word, {
    value : definition,
    writable : true,
    enumerable : true,
    configurable : true
  });
  }
  output(word){//word是字符串
    document.write(this[word]);
  }
  del(word){//word仍然是字符串
    delete this[word];
  }
  get_content(){
    var content = '{';
    for(var w in this){
      content = content.concat(w,':',this[w],'<br>');
    }
    content = content.concat('}');
    return content;
  }
  download_files(data, file_name, file_type) {
    var file = new Blob([data], {type: file_type});
    var a = document.createElement("a");
    var url = URL.createObjectURL(file);
    a.href = url;
    a.download = file_name;
    document.body.appendChild(a);
    a.click();
    setTimeout(function() {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 0);
  }
}
