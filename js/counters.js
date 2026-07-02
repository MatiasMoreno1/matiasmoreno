const counters = document.querySelectorAll(".kpi-number[data-target]");

function animateCounter(counter){

    const target = Number(counter.dataset.target);

    let current = 0;

    const increment = Math.max(1, Math.ceil(target / 40));

    const timer = setInterval(()=>{

        current += increment;

        if(current >= target){

            current = target;

            clearInterval(timer);

        }

        counter.textContent = current;

    },35);

}

window.addEventListener("load",()=>{

    setTimeout(()=>{

        counters.forEach(counter=>{

            animateCounter(counter);

        });

    },1200);

});