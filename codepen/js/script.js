function P1(){
  document.getElementById('theKicker').style.animationName = 'kick';
  document.getElementById('fc0Container').style.animationName = 'toSquare';
  document.getElementById('fc0').style.animationName = 'fly';
  for(var i = 0; i <= 2; i++){
    for(var o = 0; o <= 2; o++){
      if(i == 1 && o == 2){continue;}else{
        document.body.children[4].children[i].children[o].style.animationName = 'flip'}
      }
  }

}
