function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

//handle request
async function handleSubmit(event){
    event.preventDefault();
    
    const conf = confirm("Valider la modification de réservation?");
    if(!conf){
        return null;
    };

    const name = event.target.name.value;
    const email = event.target.email.value;

    if(!validateEmail(email)){
        alert(`L'email n'est pas valide!`);
        return null;
    }

    const newRes = {
        name: name,
        email: email
    };

    //http://test-technique.pexa4457.odns.fr/register
    try{
        const res = await fetch('', {
            method: "POST",
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Authorization': 'SuperSecretToken1234',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newRes)
        });
        const data = await res.json();
        console.log(data);

        return data;
    }catch(error){
        console.log(error);
    }
    return false;
}

//add event listener to form
const form = document.getElementById('submitForm');
if(form.attachEvent){
    form.attachEvent("submit", handleSubmit);
}else{
    form.addEventListener("submit", handleSubmit);
}

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//on scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    })
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
