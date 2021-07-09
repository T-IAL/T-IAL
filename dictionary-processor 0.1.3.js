class Dictionary{
  constructor(name){//name是字符串
    this.iafeuqhro1041644oyflhg1dx2h38p1 = name;
  };
};
class DictionaryProcessor{
  constructor(ujgfyujhdghfyuyjfdgf){
    this.iurewseryiopitfrgiotfdsvhumtgfdsf = ujgfyujhdghfyuyjfdgf;
  }
  add_word(dictionary_name,word,definition){//word,definition都是字符串,dictionary_name是对象
    Object.defineProperty(dictionary_name, word, {
    value : definition,
    writable : true,
    enumerable : true,
    configurable : true
  });
  }
  output(dictionary_name,word){//word是字符串,dictionary_name是对象
    document.write(dictionary_name[word]);
  }
  delete_word(dictionary_name,word){//word仍然是字符串,dictionary_name是对象
    delete dictionary_name[word];
  }
  get_content(dictionary_name){//,dictionary_name是对象
    var content = '{';
    for(var w in dictionary_name){
      content = content.concat(w,':',dictionary_name[w],'\n');
    }
    content = content.concat('}');
    return content;
  }
  createAndDownloadFile(dictionary_name){//,dictionary_name是对象
    var fileName = dictionary_name.iafeuqhro1041644oyflhg1dx2h38p1;
    var content = this.get_use(dictionary_name);
    var aTag = document.createElement('a');
    var blob = new Blob([content]);
    aTag.download = fileName;
    aTag.href = URL.createObjectURL(blob);
    aTag.click();
    URL.revokeObjectURL(blob);
  }
  get_show(dictionary_name){
    var content = this.get_content(dictionary_name);
    var show1 = '{';
    var show2 = content.slice(36,content.length);
    show1 = show1.concat(show2);
    return show1;
  }
  get_use(dictionary_name){
    var use = JSON.stringify(dictionary_name);
    return use;
  }
}
