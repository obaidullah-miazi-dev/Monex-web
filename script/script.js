//function to get id
function getId (id){
    return document.getElementById(id);
}

// function to scroll 
function scrollIntoView(id){
    getId(id).scrollIntoView({behavior:"smooth"})
}


// attach to btn
getId('home-btn').addEventListener('click',function(e){
    e.preventDefault()
    scrollIntoView('home')
})


getId('about-btn').addEventListener('click',function(e){
    e.preventDefault()
    scrollIntoView('about')
})


getId('service-btn').addEventListener('click',function(e){
    e.preventDefault()
    scrollIntoView('service')
})


getId('contact-btn').addEventListener('click',function(e){
    e.preventDefault()
    scrollIntoView('contact')
})

