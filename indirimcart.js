const cardlar = document.querySelectorAll('.card')
    
gsap.set('.icerik',{ yPercent: 100 })

gsap.utils.toArray(cardlar).forEach(card =>{

    const yazi = card.querySelector('.card-yazi')
    const icerik = card.querySelector('.icerik')

    let tl = gsap.timeline({paused:true})
    
    let animationYazi = tl.to(yazi,{
    y:-300,
    opacity:0,
    
    duration:0.5,
        
    }).to(icerik,{
        yPercent: 0,
        duration:0.5,
        opacity:1,
        delay:0.2,
    },'<')

    card.addEventListener('mouseenter',()=>{
        animationYazi.play()
       
    })
    card.addEventListener('mouseleave',()=>{
        animationYazi.reverse()
       
    })


})





