window.addEventListener("load", function() {
    let imagenes = document.querySelectorAll("img");
    let imgG = document.createElement("img");

    let mostrarimgG = (f) => {
        switch(f.target.id) {
            case "1":cambioimg("1");
            break;
            case "2":cambioimg("2");
            break;
            case "3":cambioimg("3");
            break;
            case "4":cambioimg("4");
            break;
            case "5":cambioimg("5");
            break;
            case "6":cambioimg("6");
            break;
            case "7":cambioimg("7");
            break;
            case "8":cambioimg("8");
            break;
            case "9":cambioimg("9");
            break;
            case "10":cambioimg("10");
            break;
            case "11":cambioimg("11");
            break;
            case "12":cambioimg("12");
            break;
        }
    }

    let cambioimg = (id) => {
        let marco = document.getElementById("marco");
        let source = document.getElementById(id).getAttribute("src");
        imgG.setAttribute("src", source);
        imgG.classList.add("expandir");
        marco.appendChild(imgG);
    }

    imagenes.forEach((i) => {
        i.addEventListener("click", mostrarimgG);
    });
});

