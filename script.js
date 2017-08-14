setTimeout(function(){
  document.body.children[0].children[0].style.visibility = 'visible';
  document.body.children[0].children[1].style.visibility = 'visible';
  document.body.children[0].children[5].children[0].style.visibility = 'visible'
}, 1500)

function menu_animate(){
    "use strict";

    document.getElementById('arrow').classList.toggle( 'arrow-animation');

    if(document.getElementById('options').classList[1] == 'menu-appeare'){
      setTimeout(function(){document.getElementById('options').classList.toggle( 'menu-appeare')}, 500)
    }else{
      document.getElementById('options').classList.toggle( 'menu-appeare')
    }

    document.getElementById('options').classList.toggle('menu-opacity');

    for(var i = 0; i < 4; i++)  {
      document.getElementById('options').children[i].classList.toggle('options-appeare')
    }
}

function menu(hash){
  window.location.hash = hash;
  switch (hash){
    case 'welcome':
      document.getElementById('options').children[0].children[0].className='page_on';
      document.getElementById('options').children[1].children[0].className='page_off';
      document.getElementById('options').children[2].children[0].className='page_off';
      document.getElementById('options').children[3].children[0].className='page_off';
      break;

    case 'about':
      document.getElementById('options').children[0].children[0].className='page_off';
      document.getElementById('options').children[1].children[0].className='page_on';
      document.getElementById('options').children[2].children[0].className='page_off';
      document.getElementById('options').children[3].children[0].className='page_off';
    break;

    case 'projects':
      document.getElementById('options').children[0].children[0].className='page_off';
      document.getElementById('options').children[1].children[0].className='page_off';
      document.getElementById('options').children[2].children[0].className='page_on';
      document.getElementById('options').children[3].children[0].className='page_off';
      break;

    case 'contact':
      document.getElementById('options').children[0].children[0].className='page_off';
      document.getElementById('options').children[1].children[0].className='page_off';
      document.getElementById('options').children[2].children[0].className='page_off';
      document.getElementById('options').children[3].children[0].className='page_on';
  }
}
