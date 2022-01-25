const mobile_menu = document.getElementsByClassName("mobile-header-lines");
const menu_btn = document.getElementsByClassName("slider-btn");
const paralax_frame = document.getElementById("paralax-frame");

menu_btn.item(0).addEventListener("click", toggleMenu);

function toggleMenu(e){
    menu = mobile_menu.item(0)
    btn = menu_btn.item(0)
    className =  menu.className.split(" ")[1]
    
    if (className === "closed-mobile-lines"){
        menu.classList.remove(className)
        menu.classList.add("open-mobile-lines")
        btn.innerText = "X"
    }else{
        menu.classList.remove(className)
        menu.classList.add("closed-mobile-lines")
        btn.innerText = String.fromCharCode(8801) ;
    }
}



          

paralax_frame.onload = function()
{ 
paralax_frame.style.height = paralax_frame.contentWindow.document.body.height + 'px';
paralax_frame.style.width  = paralax_frame.contentWindow.document.body.width + 'px';
}