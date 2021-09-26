const colorSwitch = document.getElementById('flexSwitchCheckDefault');
colorSwitch.addEventListener('click', darkMode);

function darkMode(){
    if(colorSwitch.checked){
        darkModeOn();
    }
    else {
        darkModeOff();
    }
}

function darkModeOn(){
    document.body.classList.add('dark-mode-on');
}
function darkModeOff(){
    document.body.classList.remove('dark-mode-on');
}
