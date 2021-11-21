/* const lefts = document.querySelectorAll('.scroll-left');
let rights = document.querySelector('.right');
console.log(window.innerHeight || document.documentElement.clientHeight);

const elementInView = (el) => {
 const elementTop = el.getBoundingClientRect().top;
 return elementTop <= (window.innerHeight || document.documentElement.clientHeight);
};

const elementOutView = (el) => {
 const elementTop = el.getBoundingClientRect().top;
 return elementTop > (window.innerHeight || document.documentElement.clientHeight);
};

function displayScroll(element){
    element.classList.add('left');
}

function hideScroll(element){
    element.classList.remove('left');
}

const handleScroll = () => {
    lefts.forEach((el) => {
        if (elementInView(el)){ 
         displayScroll(el);
        } else if (elementOutView(el)){
            hideScroll(el);
        }
    })
}

window.addEventListener('scroll', () => {
    handleScroll();
}); */

/*
const lefts = document.querySelectorAll('.scroll-left');
console.log(lefts);
const rights = document.querySelectorAll('.right');
const height = window.innerHeight;
const point = 0;


const handleScrollLeft = () => {
    lefts.forEach(element => {
        if(element.getBoundingClientRect().top <= (height - point)){
            console.log(element.getBoundingClientRect().top);
            element.classList.add('left');
        } else {
            element.classList.remove('left');
        }
    })
}

const handleScrollRight = () => {
    rights.forEach(element => {
        if(element.getBoundingClientRect().top <= (height - point)){
            element.classList.add('right');
        } else {
            element.classList.remove('right');
        }
    })
}

window.addEventListener('scroll', handleScrollRight); 
window.addEventListener('scroll', handleScrollLeft); 
*/
let lefts = document.querySelectorAll('.scroll-left');
const rights = document.querySelectorAll('.scroll-right');
const flipTranslale = document.querySelectorAll('flip-translate');
const fadeIn = document.querySelectorAll('.fade');
const zoom = document.querySelectorAll('.zoom')
const up = document.querySelectorAll('.scroll-up');
const options = {};

//Intersection observer for fade-in left animation
const observerLeft = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){ 
        console.log(entry.target);
        entry.target.classList.add('left');
        }

    });
}, options);
 
  lefts.forEach(left => {
      observerLeft.observe(left);
    }); 

//Intersection observer for fade-in right animation
    const observerRight = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting){
                entry.target.classList.add('right');
            }
        });
    }, options);

  rights.forEach(right => {
      observerRight.observe(right);
  });

  //Intersection observer for fade-in Flipleft animation
  const observerFlip = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if(entry.isIntersecting){
              entry.target.classList.add('flipTranslate');
          }
      })
  }, options);

  flipTranslale.forEach(flip => {
      observerFlip.observe(flip);
  });

  //Intersection observer for fade-in animation

  const observerFade = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('fade-in');
        }
    })
}, options);

fadeIn.forEach(flip => {
    observerFade.observe(flip);
});

//Intersection observer for zoom-in animation

const observerZoom = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('zoomIn');
        }
    })
}, options);

zoom.forEach(flip => {
    observerZoom.observe(flip);
});


//Intersection observer for fade-in up animation
const observerUp = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){ 
        console.log(entry.target);
        entry.target.classList.add('up');
        }

    });
}, options);
 
  up.forEach(el => {
      observerUp.observe(el);
    }); 


    //Fonction for dropdowns 

    let dropdowns = document.querySelectorAll('.dropdowns');
    let drop = document.querySelectorAll('.drop');
    let hamburger = document.getElementById('hamburger');
    let navlinks = document.querySelector('.navlinks');
    let links = document.querySelectorAll('.links');
    console.log(dropdowns.length);


dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', () => {
        console.log(dropdown.classList.contains('active'));
        dropdown.classList.toggle('active');
        var panel = dropdown.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 10 + "px";
    } 
    });
});
    

//Fonction  which opens navigation menu when hamburger icon is clicked and switches between hamburger and close icon
    hamburger.addEventListener('click', () => {
        console.log(hamburger.classList.value);
        if (hamburger.classList.value === 'fas fa-bars'){ //Checks if the icon is hamburger to switch to close icon
            hamburger.classList.value = 'fas fa-times'; // Switches to close icon
          navlinks.style.height = "150vh";
       links.forEach(el => {
           el.style.display = "block";
       });}
       else {
        hamburger.classList.value = 'fas fa-bars';
        navlinks.style.height = "0vh";
        links.forEach(el => {
            el.style.display = "none";
        });  
       }
    });

    let reserveOne = document.querySelectorAll('.reserver');
    let reserveTwo = document.querySelectorAll('.reserver2');
    let whatsappButton = document.querySelector('.whatsapp-button');
    let contacter = document.querySelector('.contacter');
    let message = "Bonjour, s'il vous plait j'aimerais passer une commande pour {Jour} d'un pack de {Prix}F.";

    whatsappButton.addEventListener('click', () => {
        window.open('https://wa.me/237698496809/?text=' + `${message}`);
    });


    reserveOne.forEach(reserve => {
        reserve.addEventListener('click', () => {
            window.open('https://wa.me/237698496809/?text=' + `${message}`);
        });
    });

    reserveTwo.forEach(reserve => {
        reserve.addEventListener('click', () => {
            window.open('https://wa.me/237698496809/?text=' + `${message}`);
        });
    });


    contacter.addEventListener('click', () => {
        window.open('https://wa.me/237698496809/?text=' + `${message}`);
    });

    



