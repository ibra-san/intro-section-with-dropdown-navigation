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