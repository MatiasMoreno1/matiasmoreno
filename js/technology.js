const technologies = {

    sql: {

    title: "SQL Server",

    description: "Consultas, modelado y administración básica de bases de datos relacionales.",

    sections: [

        {
            title: "Consultas",
            items: [
                "SELECT",
                "WHERE",
                "ORDER BY",
                "GROUP BY",
                "HAVING",
                "DISTINCT"
            ]
        },

        {
            title: "Relaciones",
            items: [
                "INNER JOIN",
                "LEFT JOIN",
                "RIGHT JOIN",
                "FULL JOIN"
            ]
        },

        {
            title: "Objetos",
            items: [
                "Views",
                "Functions",
                "Procedures"
            ]
        },

        {
            title: "Otros",
            items: [
                "Subconsultas",
                "CTE",
                "Backup / Restore"
            ]
        }

    ]

},
powerbi: {

    title: "Power BI",

    description: "Creación de dashboards interactivos y visualización de datos.",

    sections: [

        {
            title: "Modelado",
            items: [
                "Relaciones",
                "Modelo de datos",
                "Calendario"
            ]
        },

        {
            title: "Transformación",
            items: [
                "Power Query",
                "Limpieza",
                "ETL"
            ]
        },

        {
            title: "Visualización",
            items: [
                "KPIs",
                "Tarjetas",
                "Gráficos",
                "Segmentadores",
                "Dashboards"
            ]
        }

    ]

},

  excel: {

    title: "Excel",

    description: "Análisis de datos, automatización y reportes.",

    sections: [

        {
            title: "Funciones",
            items: [
                "BuscarX",
                "SI",
                "SUMAR.SI",
                "CONTAR.SI"
            ]
        },

        {
            title: "Análisis",
            items: [
                "Tablas dinámicas",
                "Gráficos",
                "Filtros"
            ]
        },

        {
            title: "Herramientas",
            items: [
                "Power Query",
                "Formato condicional",
                "Validación de datos"
            ]
        }

    ]

},
   python: {

    title: "Python",

    description: "Programación aplicada al análisis de datos y automatización.",

    sections: [

        {
            title: "Fundamentos",
            items: [
                "Variables",
                "Funciones",
                "Listas",
                "Diccionarios",
                "Bucles"
            ]
        },

        {
            title: "Análisis",
            items: [
                "Pandas",
                "Matplotlib",
                "CSV",
                "JSON"
            ]
        },

        {
            title: "Automatización",
            items: [
                "Scripts",
                "Archivos",
                "Requests"
            ]
        }

    ]

},
    html: {

    title: "HTML",

    description: "Estructuración de sitios web.",

    sections: [

        {
            title: "Contenido",
            items: [
                "HTML5",
                "Semántica",
                "Formularios",
                "Tablas"
            ]
        }

    ]

},

   css: {

    title: "CSS",

    description: "Diseño moderno y adaptable.",

    sections: [

        {
            title: "Layout",
            items: [
                "Flexbox",
                "Grid",
                "Responsive"
            ]
        },

        {
            title: "Estilos",
            items: [
                "Animaciones",
                "Variables",
                "Transiciones"
            ]
        }

    ]

},
    javascript: {

    title: "JavaScript",

    description: "Interactividad para aplicaciones web.",

    sections: [

        {
            title: "DOM",
            items: [
                "Eventos",
                "Manipulación",
                "Funciones"
            ]
        },

        {
            title: "Otros",
            items: [
                "Arrays",
                "Objetos",
                "Fetch API"
            ]
        }

    ]

},

    csharp: {

    title: "C#",

    description: "Desarrollo de aplicaciones y lógica de programación.",

    sections: [

        {
            title: "Fundamentos",
            items: [
                "Variables",
                "Condicionales",
                "Bucles",
                "Funciones"
            ]
        },

        {
            title: "POO",
            items: [
                "Clases",
                "Objetos",
                "Métodos",
                "Arrays"
            ]
        }

    ]

},
}
const wheel = document.getElementById("technology-wheel");

wheel.innerHTML = `

<div class="wheel">

<button class="tech-node sql active" data-tech="sql">SQL</button>

<button class="tech-node powerbi" data-tech="powerbi">Power BI</button>

<button class="tech-node excel" data-tech="excel">Excel</button>

<button class="tech-node python" data-tech="python">Python</button>

<button class="tech-node html" data-tech="html">HTML</button>

<button class="tech-node css" data-tech="css">CSS</button>

<button class="tech-node js" data-tech="javascript">JavaScript</button>

<button class="tech-node csharp" data-tech="csharp">C#</button>

<div class="center-circle">

<span>Tecnología</span>

</div>

</div>

`;

const panel = document.getElementById("technology-panel");

function renderTechnology(id){

    const tech = technologies[id];

    // Desaparece
    panel.classList.add("fade");

    setTimeout(()=>{

        panel.innerHTML = `

            <h2>${tech.title}</h2>

            <p>${tech.description}</p>

            ${tech.sections.map(section=>`

                <div class="tech-section">

                    <h4>${section.title}</h4>

                    <div class="tech-grid">

                        ${section.items.map(item=>`

                            <div class="tech-card">

                                ${item}

                            </div>

                        `).join("")}

                    </div>

                </div>

            `).join("")}

        `;

        // Vuelve a aparecer
        panel.classList.remove("fade");

    },200);

}
const buttons = document.querySelectorAll(".tech-node");

buttons.forEach(button=>{

    button.addEventListener("click",()=>{

        buttons.forEach(btn=>btn.classList.remove("active"));

        button.classList.add("active");

        renderTechnology(button.dataset.tech);

    });

});
renderTechnology("sql");

const educationPanel = document.getElementById("education-panel");
const educationData = {

    utn:{
        title:"UTN",
        subtitle:"Tecnicatura en Programación",
        items:[
            "Python",
            "Lógica y Algoritmos",
            "Estructura de Datos",
            "Base de Datos"
        ],
        status:"PAUSADO"
    },

    freecodecamp:{
        title:"FreeCodeCamp",
        subtitle:"Responsive Web Design",
        items:[
            "HTML5",
            "CSS3",
            "JavaScript",
            "NodeJS"
        ],
        status:"FINALIZADO"
    },

    coderhouse:{
        title:"Coderhouse",
        subtitle:"Data Analytics",
        items:[
            "SQL",
            "Power BI",
            "Excel",
            "Tableau",
            "Storytelling"
        ],
        status:"FINALIZADO"
    },

    ift11:{
        title:"IFT11",
        subtitle:"Tecnicatura en Desarrollo de Software",
        items:[
            "C#",
            "SQL Server",
            "Estadística",
            "Resolución de Problemas"
        ],
        status:"EN CURSO"
    }

};
function renderEducation(id){

    const course = educationData[id];

    educationPanel.innerHTML = `

        <h3>${course.title}</h3>

        <span>${course.subtitle}</span>

        <hr>

        <ul>

            ${course.items.map(item=>`

                <li>${item}</li>

            `).join("")}

        </ul>

        <p>${course.status}</p>

    `;

}
if(window.innerWidth <= 768){

    const columns = document.querySelectorAll(".education-column");

    columns.forEach(column=>{

        column.addEventListener("click",()=>{

            renderEducation(column.dataset.course);

        });

    });

    renderEducation("coderhouse");

}