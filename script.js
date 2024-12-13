const listaContenedores = document.querySelector("main ul"); // tomo el listado de contenidos
const navLinks = document.querySelectorAll("nav a"); // tomo los links de la navbar

const renderItem = (e) => { // defino la renderización de items del listado
    const itemSeleccionado = e.target.closest("li"); // defino el item seleccionado
    if (itemSeleccionado.childElementCount === 2) { // chequeo que haya 2 elementos dentro
        itemSeleccionado.lastElementChild.toggleAttribute("mostrar"); // si es así toggleo si se muestra
    } else { // sino...
        const contenidoItem = contenido.find(el => itemSeleccionado.firstChild.innerText.includes(el.id)) // encuentro el contenido correspondiente a lo que se quiere mostrar
        const divItem = document.createElement("div"); // const un div
        divItem.classList.add("item"); // le doy clase item
        const divItemIzq = document.createElement("div");
        divItemIzq.classList.add("column");
        const divItemDer = document.createElement("div");
        divItemDer.classList.add("column");
        if (contenidoItem.link) {
            const divLink = document.createElement("div"); // creo una div de link
            contenidoItem.link.forEach(el=>{
                const a = document.createElement("a"); // const a
                a.innerText = el.ref; // le doy texto igual a ref del el
                a.href = el.url; //le doy href correspondiente a url del el
                a.style.display = "block";
                a.target = "_blank"
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
            divItemDer.appendChild(divLink);
        }

        if (contenidoItem.video) { // agrego videos, si hay
            contenidoItem.video.forEach(video => {
                const divVideo = document.createElement("div");
                divVideo.classList.add("responsive");
                divVideo.innerHTML = video;
                divItemIzq.appendChild(divVideo);
            });
        }
        
        if (contenidoItem.img) { // agrego imágenes, si hay
            const divImg = document.createElement("div");
            contenidoItem.img.forEach(e => {
                const img = document.createElement("img");
                img.src = e;
                img.classList.add("responsive");
                divImg.appendChild(img);
            });
            divItemIzq.appendChild(divImg);
        }

        // const img = document.createElement("img"); // const img
        
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
            divItemDer.appendChild(divTexto)
        }


        divItem.append(divItemIzq); // incluyo estos elementos en el div
        divItem.append(divItemDer); // incluyo estos elementos en el div
        itemSeleccionado.appendChild(divItem); // incluyo el div en el item seleccionado
        itemSeleccionado.lastElementChild.toggleAttribute("mostrar"); // muestro el div
    }
};

const renderLista = (array) => { // defino renderizacion de lista de un conjunto
    listaContenedores.innerHTML = ""; // limpio lista
    array.sort((e1, e2) => {
        if (e1.año < e2.año) {
            return 1;
        } if (e1.año > e2.año) {
            return -1;
        } else {
            return 0
        }
    });
    array.forEach(el => { // por cada elemento en un conjunto
        const li = document.createElement("li"); // creo un li
        li.classList.add(el.categoria, "contenedor"); // le doy clase de contenedor y según la categoria que tiene cada elemento
        const h2 = document.createElement("h2"); // creo un h2
        h2.textContent = `${el.año} - ${el.id}`; // que dice lo mismo que la id del elemento
        listaContenedores.appendChild(li); // agrego el li a la lista
        li.appendChild(h2); // agrego el h2 al li
        h2.addEventListener("click", renderItem); // le doy funcion al h2
    });
};

const renderStatement = () => {
    // listaContenedores.innerHTML = ""; // limpio lista
    if (listaContenedores.parentNode.childElementCount > 1) {
        listaContenedores.parentNode.firstChild.remove();
    } else {
        const div = document.createElement("div");
        div.classList.add("contenedor");
        const divStatIzq = document.createElement("div");
        const divStatDer = document.createElement("div");
        divStatIzq.classList.add("column");
        divStatDer.classList.add("column");
        const img = document.createElement("img");
        img.src = "./img/STATEMENT.jpg";
        img.classList.add("responsive");
        divStatIzq.appendChild(img);
        statement.texto.forEach(el => {
            const p = document.createElement("p");
            p.innerText = el;
            divStatDer.appendChild(p);
        });

        div.append(divStatIzq, divStatDer);
        listaContenedores.parentNode.prepend(div);
    }
    // listaContenedores.appendChild(div);
};

const navLinkFunc = (e) => { // defino la selección de categorias
    if (e.target.href.includes("all")) { // si el link hace referencia a all
        renderStatement();
        renderLista(contenido); // renderizo todo el contenido
    } else if (e.target.href.includes("cine")) {
        if (listaContenedores.parentNode.childElementCount > 1) {
            listaContenedores.parentNode.firstChild.remove();
        }
        const contenidoRubro = contenido.filter(item=>e.target.href.includes(item.rubro)); // defino un listado filtrado por rubro
        renderLista(contenidoRubro); // renderizo este listado
    // } else if (e.target.href.includes("statement")) {
    //     renderStatement()
    } else { // sino...
        if (listaContenedores.parentNode.childElementCount > 1) {
            listaContenedores.parentNode.firstChild.remove();
        }
        const contenidoSeleccionado = contenido.filter(item=>e.target.href.includes(item.categoria)); // defino un listado filtrado por categoría
        renderLista(contenidoSeleccionado); // renderizo este listado
    }
};

navLinks.forEach(el=>{ // por cada link de la barra de nav
    el.addEventListener("click", navLinkFunc); // le doy función de seleccionar categorías
});

renderLista(contenido); // renderizo el listado completo
// contenido.forEach(el=>console.log(el.id))