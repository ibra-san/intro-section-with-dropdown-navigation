document.addEventListener("click", e => { 
    const isDropDownButton = e.target.matches("[data-dropdown-button]")
    const isArrowDown = e.target.matches("[data-arrow-down]")
    const isArrowUp = e.target.matches("[data-arrow-up]")
    if ((!isDropDownButton && !isArrowDown && !isArrowUp) && e.target.closest("[data-dropdown]") != null) return

    

    let currentDropDown
    if (isDropDownButton || isArrowDown) { 
        currentDropDown = e.target.closest("[data-dropdown]")
        currentDropDown.classList.toggle("active")
    } 
 

    
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => { 
        if (dropdown === currentDropDown) return
        dropdown.classList.remove('active')    
    })

    
    
})


const menuOpenButton = document.getElementById("menu__btn--open")
const navMenu = document.getElementById("nav__bar");
const screenDiv = document.getElementById("screen__div");
const menuCloseButton = document.getElementById("menu__btn--close")

menuOpenButton.addEventListener("click", () => { 
    navMenu.style.right = "0";
    screenDiv.style.opacity = "1";
    screenDiv.style.width = "100vw";
})

menuCloseButton.addEventListener("click", ()=> { 
    navMenu.style.right = "-50%";
    screenDiv.style.opacity="0";
    screenDiv.style.width="0vw"
})
