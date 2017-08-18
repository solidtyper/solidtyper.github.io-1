
window.onload = function(){

    window.scrollTo(6000, 6000);

    setTimeout(function(){
      document.getElementById('welcome').children[0].children[1].children[0].classList.add('welcome_sign_up')
    }, 3000)
    setInterval(function(){
      var r_num1 = Math.random()*60, r_num2 = Math.random()*60, r_num3 = Math.random()*60, r_color = 'rgb('+r_num1.toFixed(0) +', '+r_num2.toFixed(0)+', '+r_num3.toFixed(0)+')';
      document.body.children[3].style.background = r_color;
    },4000)

    for(var i = 1; i <= 4; i++){
      document.getElementById('menu').children[i].children[0].style.color = '#FF423F';
    }
    window.location.href = '#w_content';
    document.getElementById('menu').children[1].children[0].style.color = '#0A0';
  /*  document.getElementById('menu').children[1].children[0].classList.add('selected_option');*/
}

function menu_animate(){
    "use strict";

    document.getElementById('button').classList.toggle( 'menu_button_animation');

    if(document.getElementById('button').classList[1] != 'menu_button_animation'){
    /*  document.getElementById('menu').children[1].children[0].classList.remove('selected_option');*/
      document.body.children[0].classList.remove('overlay_rm_opacity');
      setTimeout(function(){document.body.children[0].classList.remove( 'overlay_appearance');}, 300)
    }else{
      document.body.children[0].classList.add( 'overlay_appearance');
      setTimeout(function(){document.body.children[0].classList.add('overlay_rm_opacity');}, 300)
    }

    for(var i = 1; i <= 4; i++)  {
      document.getElementById('menu').children[i].children[0].classList.toggle('menu_appeare')
    }

}

function page_status(hash){
    switch (hash){
      case 'welcome':
        for(var i = 2; i <= 4; i++){
          document.getElementById('menu').children[i].children[0].children[0].className= 'page_off';
          document.getElementById('menu').children[i].children[0].style.color = '#FF423F';
        }
        document.getElementById('menu').children[1].children[0].children[0].className= 'page_on';
        document.getElementById('menu').children[1].children[0].style.color = '#0A0';

        document.getElementById('menu').children[1].children[0].classList.add('selected_option');
        document.getElementById('menu').children[2].children[0].classList.remove('selected_option');
        document.getElementById('menu').children[3].children[0].classList.remove('selected_option');
        document.getElementById('menu').children[4].children[0].classList.remove('selected_option');

        break;

      case 'about':
        for(var i = 1; i <= 4; i++){
          document.getElementById('menu').children[i].children[0].children[0].className= 'page_off';
          document.getElementById('menu').children[i].children[0].style.color = '#FF423F';
        }
        document.getElementById('menu').children[2].children[0].children[0].className= 'page_on';
        document.getElementById('menu').children[2].children[0].style.color = '#0A0';

        document.getElementById('menu').children[1].children[0].classList.remove('selected_option');
        document.getElementById('menu').children[2].children[0].classList.add('selected_option');
        document.getElementById('menu').children[3].children[0].classList.remove('selected_option');
        document.getElementById('menu').children[4].children[0].classList.remove('selected_option');

      break;

      case 'projects':
        for(var i = 1; i <= 4; i++){
          document.getElementById('menu').children[i].children[0].children[0].className= 'page_off';
          document.getElementById('menu').children[i].children[0].style.color = '#FF423F';
      }
        document.getElementById('menu').children[3].children[0].children[0].className= 'page_on';
        document.getElementById('menu').children[3].children[0].style.color = '#0A0';

        document.getElementById('menu').children[1].children[0].classList.remove('selected_option');
        document.getElementById('menu').children[2].children[0].classList.remove('selected_option');
        document.getElementById('menu').children[3].children[0].classList.add('selected_option');
        document.getElementById('menu').children[4].children[0].classList.remove('selected_option');

        break;

      case 'contact':
        for(var i = 1; i <= 3; i++){
          document.getElementById('menu').children[i].children[0].children[0].className= 'page_off';
          document.getElementById('menu').children[i].children[0].style.color = '#FF423F';
      }
        document.getElementById('menu').children[4].children[0].children[0].className= 'page_on';
        document.getElementById('menu').children[4].children[0].style.color = '#0A0';

        document.getElementById('menu').children[1].children[0].classList.remove('selected_option');
        document.getElementById('menu').children[2].children[0].classList.remove('selected_option');
        document.getElementById('menu').children[3].children[0].classList.remove('selected_option');
        document.getElementById('menu').children[4].children[0].classList.add('selected_option');
    }

}

function img_view(img_name){
  var img_name;
  window.location.href = 'imgs/'+img_name

}
