/*=============== EMAIL JS ===============*/
// EMAIL JS
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

// Function to send email
const sendEmail = (e) => {
  e.preventDefault();

  // Service ID, Template ID, and Public Key from Email.js
  emailjs
    .sendForm('service_qmpouw7', 'template_ekkfrfl', '#contact-form', 'DBmplKTWz32it7it4')
    .then(
      () => {
        // Display success message
        contactMessage.textContent = 'Message sent successfully ✔';
        contactMessage.style.color = 'green';

        // Remove msg after 3 secs
        setTimeout(()=>{
            contactMessage.textContent = ''
        }, 3000)

        // Clear form fields after submission
        contactForm.reset();
      },
      (error) => {
        // Display error message
        contactMessage.textContent = 'Message could not be sent. Please try again.';
        contactMessage.style.color = 'red';
        console.error('Error:', error);
      }
    );
};

// Add event listener for form submission
contactForm.addEventListener('submit', sendEmail);


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__list a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
})

sr.reveal(`.perfil, .contact__form`)
sr.reveal(`.info`,{origin:'left',delay:50})
sr.reveal(`.skills`,{origin:'left',delay:100})
sr.reveal(`.about`,{origin:'right',delay:200})
sr.reveal(`.projects__card, .services__card, .experience__card`, {interval:5})