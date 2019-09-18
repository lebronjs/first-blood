javascript:(function(){
  var elements = document.body.getElementsByTagName('*');
  var items = [];
  for (var i = 0; i<elements.length; i++){
    if(elements[i].innerHTML.indexOf('html *{outline:1px solid red}')!=-1){
      items.push(elements[i]);
    }
  }
  if(item.length>0){
    for(var i =0; i<items.length; i++){
      items[i].innerHtml=''
    }
  }else{
      document.body.innerHTML += '<style>html *{outline:1px solid red}</style>'
  }
})();
