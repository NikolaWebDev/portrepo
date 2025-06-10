// Select all a in nav return a NodList like an array
// Loop through each anchor link found Add click ev list.
// to each link, e - event obj repres. the click.
// href - get the value of href attribute
// querySelector find section on the page matches the id.
// scroll smoothly
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault()
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({behaviour: 'smooth'});
    })
})
