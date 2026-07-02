const sections = document.querySelectorAll("section");
const indicators = document.querySelectorAll(".side-indicator span");

const sideObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            indicators.forEach(point=>{

                point.classList.remove("active");

            });

            const activePoint = document.querySelector(
                `.side-indicator span[data-section="${entry.target.id}"]`
            );

            if(activePoint){

                activePoint.classList.add("active");

            }

        }

    });

},{
    threshold:.45
});

sections.forEach(section=>{

    sideObserver.observe(section);

});