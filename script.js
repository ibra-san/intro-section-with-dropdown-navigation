document.addEventListener("click", (e) => { 

    const isDropDownButton = e.target.matches("button[data-dropdown-button]") ; 

    if(!isDropDownButton && e.target.closest("div[data-dropdown]") != null) return; 


    let currentDropDown; 
    if(isDropDownButton) { 
        currentDropDown = e.target.closest('[data-dropdown]'); 
        currentDropDown.classlist.toggle("active"); 
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => { 
        if(dropdown === currentDropDown) return;
        dropdown.classList.remove('active');    
    })

})