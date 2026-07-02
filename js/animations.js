const careerLine = document.querySelector(".line");

const experienceSection = document.querySelector("#resumen");

const lineObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            careerLine.classList.add("animate");

        }

    });

},{
    threshold:.35
});


lineObserver.observe(experienceSection);
/*=========================================
        EDUCATION CHART
=========================================*/

const educationSection = document.querySelector("#formacion");

const educationBars = document.querySelectorAll(".education-bar");

const educationObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            educationBars.forEach((bar, index) => {

                setTimeout(() => {
                    bar.classList.add("animate");
                }, index * 180);

            });

        }

    });

}, {
    rootMargin: "0px 0px -150px 0px"
});

educationObserver.observe(educationSection);

