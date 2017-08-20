
window.onload = function(){
    /*switch(window.location.hash){
      case '#welcome_':alert('welcome');window.scrollTo(2392,2500);break;
      case '#about_me':window.scrollTo(385, 971);;break;
      case '#skills':window.scrollTo(0,0);break;
      case '#progression':window.scrollTo(1045,0);break;
      case '#about_projects':window.scrollTo(4380,540);break;
      case '#project1':window.scrollTo(2392,2500);break;
      case '#project2':window.scrollTo(2392,2500);break;
      case '#project3':window.scrollTo(2392,2500);break;
      case '#project4':window.scrollTo(2392,2500);break;
      case '#contact_me':window.scrollTo(2392,2500);break;
      default:window.scrollTo(2392,2500);location.href = '#welcome_'
    }*/

    if (innerWidth >= 689){window.scrollTo(4417,4447)}else{window.scrollTo(2661,2613)}
    setInterval(function(){
      document.getElementById('welcome').children[0].children[0].children[0].style.animationName = 'left_door';
      document.getElementById('welcome').children[0].children[0].children[1].style.animationName = 'right_door';
      document.getElementById('welcome').children[0].children[1].children[0].style.animationName = 'welcome_sign';
      document.getElementById('welcome').children[0].children[1].children[1].style.animationName = 'paragraph_appeare';
    },250)

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
    document.getElementById('menu').children[1].children[0].style.color = '#0c0';
  /*  document.getElementById('menu').children[1].children[0].classList.add('selected_option');*/
}

function menu_appearance_cancel(){
  document.body.children[0].classList.remove('overlay_rm_opacity');
  setTimeout(function(){document.body.children[0].classList.remove( 'overlay_appearance');}, 300)
  for(var i = 1; i <= 4; i++)  {
    document.getElementById('menu').children[i].children[0].classList.remove('menu_appeare')
  }
  document.getElementById('button').classList.remove( 'menu_button_animation');
}

function menu_animate(){
    "use strict";

    document.getElementById('button').classList.toggle( 'menu_button_animation');

    if(document.getElementById('button').classList[1] != 'menu_button_animation'){
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
/* scrolling calculation */
/*
var containerX = 10000,
      containerY = 10000,
      innerX = window.innerWidth,
      innerY = window.innerHeight,
*/



function page_status(hash){
    switch (hash){
      case 'welcome':
        for(var i = 2; i <= 4; i++){
          document.getElementById('menu').children[i].children[0].children[0].className= 'page_off';
          document.getElementById('menu').children[i].children[0].style.color = '#FF423F';
        }
        document.getElementById('menu').children[1].children[0].children[0].className= 'page_on';
        document.getElementById('menu').children[1].children[0].style.color = '#0c0';

        document.getElementById('menu').children[1].children[0].classList.add('selected_option');
        document.getElementById('menu').children[2].children[0].classList.remove('selected_option');
        document.getElementById('menu').children[3].children[0].classList.remove('selected_option');
        document.getElementById('menu').children[4].children[0].classList.remove('selected_option');

        window.location.href = '#welcome_';
        if (innerWidth >= 689){window.scrollTo(4417,4447)}else{window.scrollTo(2661,2613)}

        document.getElementById('welcome').children[0].children[0].children[0].style.animationName = '';
        document.getElementById('welcome').children[0].children[0].children[1].style.animationName = '';
        document.getElementById('welcome').children[0].children[1].children[0].style.animationName = '';
        document.getElementById('welcome').children[0].children[1].children[1].style.animationName = '';

        setInterval(function(){
          document.getElementById('welcome').children[0].children[0].children[0].style.animationName = 'left_door';
          document.getElementById('welcome').children[0].children[0].children[1].style.animationName = 'right_door';
          document.getElementById('welcome').children[0].children[1].children[0].style.animationName = 'welcome_sign';
          document.getElementById('welcome').children[0].children[1].children[1].style.animationName = 'paragraph_appeare';
        },250);

        break;

      case 'about':
        for(var i = 1; i <= 4; i++){
          document.getElementById('menu').children[i].children[0].children[0].className= 'page_off';
          document.getElementById('menu').children[i].children[0].style.color = '#FF423F';
        }
        document.getElementById('menu').children[2].children[0].children[0].className= 'page_on';
        document.getElementById('menu').children[2].children[0].style.color = '#0c0';

        document.getElementById('menu').children[1].children[0].classList.remove('selected_option');
        document.getElementById('menu').children[2].children[0].classList.add('selected_option');
        document.getElementById('menu').children[3].children[0].classList.remove('selected_option');
        document.getElementById('menu').children[4].children[0].classList.remove('selected_option');

        window.location.href = '#about';
        if (innerWidth >= 689){window.scrollTo(1000, 1722)}else{window.scrollTo(634,970)}

      break;

      case 'projects':
        for(var i = 1; i <= 4; i++){
          document.getElementById('menu').children[i].children[0].children[0].className= 'page_off';
          document.getElementById('menu').children[i].children[0].style.color = '#FF423F';
      }
        document.getElementById('menu').children[3].children[0].children[0].className= 'page_on';
        document.getElementById('menu').children[3].children[0].style.color = '#0c0';

        document.getElementById('menu').children[1].children[0].classList.remove('selected_option');
        document.getElementById('menu').children[2].children[0].classList.remove('selected_option');
        document.getElementById('menu').children[3].children[0].classList.add('selected_option');
        document.getElementById('menu').children[4].children[0].classList.remove('selected_option');

        window.location.href = '#projects';
        if (innerWidth >= 689){window.scrollTo(7711, 1710)}else{window.scrollTo(4650,1009)}

        break;

      case 'contact':
        for(var i = 1; i <= 3; i++){
          document.getElementById('menu').children[i].children[0].children[0].className= 'page_off';
          document.getElementById('menu').children[i].children[0].style.color = '#FF423F';
      }
        document.getElementById('menu').children[4].children[0].children[0].className= 'page_on';
        document.getElementById('menu').children[4].children[0].style.color = '#0c0';

        document.getElementById('menu').children[1].children[0].classList.remove('selected_option');
        document.getElementById('menu').children[2].children[0].classList.remove('selected_option');
        document.getElementById('menu').children[3].children[0].classList.remove('selected_option');
        document.getElementById('menu').children[4].children[0].classList.add('selected_option');

        window.location.href = '#contact';
        if (innerWidth >= 689){window.scrollTo(1008, 7811)}else{window.scrollTo(634, 4712)}

    }

}

function img_view(img_name){
  var img_name;
  window.location.href = 'imgs/'+img_name

}

function about_navigator(to_where){
  switch(to_where){
    case 'about':
      /*window.location.href = '#about_me' ;*/
      if (innerWidth >= 689){window.scrollTo(1000, 1722)}else{window.scrollTo(634,970)}
      break;
    case 'skills':
      /*window.location.href = '#skills' ;*/
      if (innerWidth >= 689){window.scrollTo(85, 125)}else{window.scrollTo(1204, 92)}
      break;
    case 'progression':
    /*  window.location.href = '#progression' ;*/
      if (innerWidth >= 689){window.scrollTo(1944, 125)}else{window.scrollTo(83, 81)}
      break;
  }
}


function projs_navigator(to_where){
  switch(to_where){
    case 'about_projs':
      /*window.location.href = '#about_projs' ;*/
      if (innerWidth >= 689){window.scrollTo(7711, 1710)}else{window.scrollTo(4702, 993)}
      break;
    case 'proj_1':
      /*window.location.href = '#proj_1' ;*/
      if (innerWidth >= 689){window.scrollTo(6776, 216)}else{window.scrollTo(5253, 92)}
      break;
    case 'proj_2':
      /*window.location.href = '#proj_3' ;*/
      if (innerWidth >= 689){window.scrollTo(8671, 216)}else{window.scrollTo(4111, 92)}
  }
}





























/**/
