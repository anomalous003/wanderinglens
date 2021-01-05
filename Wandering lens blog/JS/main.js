var count = 0;

function show_menu(id, id2){
    element = document.querySelector(id);
    menuIcon = document.querySelector(id2)
    count = count + 1;

    console.log(menuIcon)

    if (count % 2 == 0){
        element.style.display = 'none';
        menuIcon.style.border = '0px';

    }
    else {
        element.style.display = 'flex';
        menuIcon.style.border = '1.5px solid #444444';
    }
}