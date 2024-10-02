const listaContenedores = document.querySelector("main ul"); // tomo el listado de contenidos
const navLinks = document.querySelectorAll("nav a"); // tomo los links de la navbar


const renderItem = (e) => { // defino la renderización de items del listado
    const itemSeleccionado = e.target.closest("li"); // defino el item seleccionado
    if (itemSeleccionado.childElementCount === 2) { // chequeo que haya 2 elementos dentro
        itemSeleccionado.lastElementChild.toggleAttribute("mostrar"); // si es así toggleo si se muestra
    } else { // sino...
        const contenidoItem = contenido.find(el => el.id===itemSeleccionado.firstElementChild.innerText) // encuentro el contenido correspondiente a lo que se quiere mostrar
        const divItem = document.createElement("div"); // const un div
        divItem.classList.add("item"); // le doy clase item
        
        if (contenidoItem.img) { // agrego imágenes, si hay
            const divImg = document.createElement("div");
            contenidoItem.img.forEach(e => {
                const img = document.createElement("img");
                img.src = e;
                img.classList.add("responsive");
                divImg.appendChild(img);
            });
            divItem.appendChild(divImg);
        }
        const img = document.createElement("img"); // const img
        
        if (contenidoItem.video) { // agrego videos, si hay
            contenidoItem.video.forEach(video => {
                const divVideo = document.createElement("div")
                divVideo.innerHTML = video
                divItem.appendChild(divVideo)
            });
        }

        if (contenidoItem.texto) {
            const divTexto = document.createElement("div"); // creo una div de texto
            if (typeof(contenidoItem.texto) === "object") {
                contenidoItem.texto.forEach(el => { // por cada texto del contenido
                    const p = document.createElement("p"); // const p
                    p.innerHTML = el; // le doy contenido al p igual al HTML del contenido
                    divTexto.appendChild(p); // incluyo el p al div
                });
            } else {
                const p = document.createElement("p"); // const p
                p.innerHTML = contenidoItem.texto; // le doy texto al p igual al texto del contenido
                divTexto.appendChild(p); // incluyo el p al di
            }
            divItem.appendChild(divTexto)
        }
        if (contenidoItem.link) {
            const divLink = document.createElement("div"); // creo una div de link
            contenidoItem.link.forEach(el=>{
                const a = document.createElement("a"); // const a
                a.innerText = el.ref; // le doy texto igual a ref del el
                a.href = el.url; //le doy href correspondiente a url del el
                a.style.display = "block"
                divLink.appendChild(a); // incluyo el a al div
            })
            // if (typeof(contenidoItem.link) === "object") {
            //     contenidoItem.link.forEach(el => { // por cada link del contenido
            //         const a = document.createElement("a"); // const a
            //         a.innerText = "ver más!"; // le doy texto
            //         a.href = el; //le doy href correspondiente
            //         divLink.appendChild(a); // incluyo el a al div
            //     });
            // } else {
            //     const a = document.createElement("a"); // const a
            //     a.innerText = "ver más!"; // le doy texto
            //     a.href = contenidoItem.link; //le doy href correspondiente
            //     divLink.appendChild(a); // incluyo el a al div
            // }
            divItem.appendChild(divLink)
        }


        divItem.append(img); // incluyo estos elementos en el div
        itemSeleccionado.appendChild(divItem); // incluyo el div en el item seleccionado
        itemSeleccionado.lastElementChild.toggleAttribute("mostrar"); // muestro el div
    }
};

const renderLista = (array) => { // defino renderizacion de lista
    listaContenedores.innerHTML = ""; // limpio lista
    array.forEach(el => { // por cada elemento en un conjunto
        const li = document.createElement("li"); // creo un li
        li.classList.add(el.categoria, "contenedor"); // le doy clase de contenedor y según la categoria que tiene cada elemento
        const h2 = document.createElement("h2"); // creo un h2
        h2.textContent = el.id; // que dice lo mismo que la id del elemento
        listaContenedores.appendChild(li); // agrego el li a la lista
        li.appendChild(h2); // agrego el h2 al li
        h2.addEventListener("click", renderItem); // le doy funcion al h2
    });
};

const renderStatement = () => {
    listaContenedores.innerHTML = ""; // limpio lista
    const div = document.createElement("div");
    statement.texto.forEach(el => {
        const p = document.createElement("p");
        p.innerText = el;
        div.appendChild(p);
    });
    listaContenedores.appendChild(div);
};

const navLinkFunc = (e) => { // defino la selección de categorias
    if (e.target.href.includes("all")) { // si el link hace referencia a all
        renderLista(contenido); // renderizo todo el contenido
    } else if (e.target.href.includes("cine")) {
        const contenidoRubro = contenido.filter(item=>e.target.href.includes(item.rubro)); // defino un listado filtrado por rubro
        renderLista(contenidoRubro); // renderizo este listado
    } else if (e.target.href.includes("statement")) {
        renderStatement()
    } else { // sino...
        const contenidoSeleccionado = contenido.filter(item=>e.target.href.includes(item.categoria)); // defino un listado filtrado por categoría
        renderLista(contenidoSeleccionado); // renderizo este listado
    }
};

navLinks.forEach(el=>{ // por cada link de la barra de nav
    el.addEventListener("click", navLinkFunc); // le doy función de seleccionar categorías
});

renderLista(contenido); // renderizo el listado completo
// contenido.forEach(el=>console.log(el.id))