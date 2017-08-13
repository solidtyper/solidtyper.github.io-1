function menu_animate(){
    "use strict";

    document.getElementById('arrow').classList.toggle( 'arrow-animation');

    document.getElementById('options').classList.toggle('menu-opacity');

    for(var i = 0; i < 4; i++)  {
      document.getElementById('options').children[i].classList.toggle('options-appeare')
    }
}
