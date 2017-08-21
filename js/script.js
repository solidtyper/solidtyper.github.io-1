function scrollVariables(){
         innerX = window.innerWidth;
         innerY = window.innerHeight;

  function containerSize(){if(innerX <= 689){x = 6000}else{x = 10000};return x;}
        childSectionSize = containerSize() * 33.333 / 100;
        gChildSectionSize = childSectionSize * 19.999 / 100;
}

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
    window.location.href = '#welcome';
    scrollVariables();
    var   scrollH = childSectionSize + (gChildSectionSize * 2) - (innerX - gChildSectionSize )/ 2,
            scrollV = childSectionSize + (gChildSectionSize * 2) - (innerY - gChildSectionSize )/ 2;
    scrollTo(scrollH, scrollV);

    setTimeout(function(){
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
}

function menu_appearance_cancel(){
  document.body.children[0].classList.remove('overlay_rm_opacity');
  setTimeout(function(){document.body.children[0].classList.remove( 'overlay_appearance');}, 300)
  for(var i = 1; i <= 4; i++)  {
    document.getElementById('menu').children[i].children[0].classList.remove('menu_appeare');
    document.getElementById('menu').children[i].children[0].classList.remove('selected_option');
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
      document.getElementById('menu').children[i].children[0].classList.toggle('menu_appeare');
      document.getElementById('menu').children[i].children[0].classList.remove('selected_option');
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
        document.getElementById('menu').children[1].children[0].style.color = '#0c0';

        document.getElementById('menu').children[1].children[0].classList.add('selected_option');
        document.getElementById('menu').children[2].children[0].classList.remove('selected_option');
        document.getElementById('menu').children[3].children[0].classList.remove('selected_option');
        document.getElementById('menu').children[4].children[0].classList.remove('selected_option');

        window.location.href = '#welcome_';
        scrollVariables();
        var  scrollH = childSectionSize + (gChildSectionSize * 2) - (innerX - gChildSectionSize )/ 2,
               scrollV = childSectionSize + (gChildSectionSize * 2) - (innerY - gChildSectionSize )/ 2;
        scrollTo(scrollH, scrollV);
        document.getElementById('welcome').children[0].children[0].children[0].style.animationName = '';
        document.getElementById('welcome').children[0].children[0].children[1].style.animationName = '';
        document.getElementById('welcome').children[0].children[1].children[0].style.animationName = '';
        document.getElementById('welcome').children[0].children[1].children[1].style.animationName = '';

        setTimeout(function(){
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
        scrollVariables();
        var   scrollH = (gChildSectionSize * 2) - (innerX - gChildSectionSize )/ 2,
                scrollV = (gChildSectionSize * 3) - (innerY - gChildSectionSize )/ 2;
        scrollTo(scrollH, scrollV);

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
        scrollVariables();
        var  scrollH = (childSectionSize * 2) + (gChildSectionSize * 2) - (innerX - gChildSectionSize )/ 2,
               scrollV = (gChildSectionSize * 3) - (innerY - gChildSectionSize )/ 2;
        scrollTo(scrollH, scrollV);

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
        scrollVariables();
        var  scrollH = (gChildSectionSize * 2) - (innerX - gChildSectionSize )/ 2,
               scrollV = (childSectionSize * 2) + (gChildSectionSize * 2) - (innerY - gChildSectionSize )/ 2;
        scrollTo(scrollH, scrollV);
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
      scrollVariables();
      var   scrollH = (gChildSectionSize * 2) - (innerX - gChildSectionSize )/ 2,
              scrollV = (gChildSectionSize * 3) - (innerY - gChildSectionSize )/ 2;
      scrollTo(scrollH, scrollV);
      break;
    case 'skills':
      /*window.location.href = '#skills' ;*/
      scrollVariables();
      var   scrollH = (childSectionSize * 10 / 100) - (innerX - gChildSectionSize )/ 2,
              scrollV = (childSectionSize * 10 / 100) - (innerY - gChildSectionSize )/ 2;
      scrollTo(scrollH, scrollV);
      break;
    case 'progression':
    /*  window.location.href = '#progression' ;*/
    scrollVariables();
    var   scrollH = (gChildSectionSize * 4) - (childSectionSize * 10 / 100) - (innerX - gChildSectionSize )/ 2,
            scrollV = (childSectionSize * 10 / 100) - (innerY - gChildSectionSize )/ 2;
    scrollTo(scrollH, scrollV);
      break;
  }
}


function projs_navigator(to_where){
  switch(to_where){
    case 'about_projs':
      /*window.location.href = '#about_projs' ;*/
      scrollVariables();
      var   scrollH = (childSectionSize * 2) +(gChildSectionSize * 2) - (innerX - gChildSectionSize )/ 2,
              scrollV = (gChildSectionSize * 3) - (innerY - gChildSectionSize )/ 2;
      scrollTo(scrollH, scrollV);
      break;
    case 'proj_1':
      /*window.location.href = '#proj_1' ;*/
      scrollVariables();
      var   scrollH = (childSectionSize * 2) + (childSectionSize * 10 / 100) - (innerX - gChildSectionSize )/ 2,
              scrollV = (childSectionSize * 10 / 100) - (innerY - gChildSectionSize )/ 2;
      scrollTo(scrollH, scrollV);
      break;
    case 'proj_2':
      /*window.location.href = '#proj_3' ;*/
      scrollVariables();
      var   scrollH = (childSectionSize * 2) + (gChildSectionSize * 4) - (childSectionSize * 10 / 100) - (innerX - gChildSectionSize )/ 2,
              scrollV = (childSectionSize * 10 / 100) - (innerY - gChildSectionSize )/ 2;
      scrollTo(scrollH, scrollV);
  }
}





























/**/
