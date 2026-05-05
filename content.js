const statement = {
    texto: 
    `<p style="text-align: justify;"><strong>Espa&ntilde;ol:</strong></p>
    <p style="text-align: justify;"><strong>Biograf&iacute;a</strong></p>
    <p style="text-align: justify;"><span style="font-weight: 400;">Me llamo Lucy Riera, nac&iacute; en Argentina. Trabajo en mi laboratorio creativo de experiencias y&nbsp; encuentro en la pr&aacute;ctica art&iacute;stica un espacio donde desarrollar mi motor vital a trav&eacute;s de lenguajes transdisciplinarios como las artes visuales, el audiovisual, la escritura, la gr&aacute;fica.&nbsp;</span></p>
    <p style="text-align: justify;"><span style="font-weight: 400;">Dirig&iacute; pel&iacute;culas que tienen como eje el estudio de la imagen. La primera es del 2014, &ldquo;La caja de arriba del ropero&rdquo; recorre la obra de Juan Pi, un fot&oacute;grafo nacido en Ginebra, Suiza que emigra a Argentina. Recientemente termin&eacute; mi segundo largometraje, &ldquo;Vado in America&rdquo; que aborda una colecci&oacute;n de fotos que surge de una amplia investigaci&oacute;n junto a Cristina Boixad&oacute;s que nos llev&oacute; a recuperar las placas fotogr&aacute;ficas que hab&iacute;an sido desechadas en Argentina, nos conect&oacute; con la regi&oacute;n de Ticino, con los descendientes de la familia del fot&oacute;grafo en Suiza y adem&aacute;s es un trabajo que desborda los l&iacute;mites del cine extendi&eacute;ndose a otros formatos.</span></p>
    <p style="text-align: justify;"><span style="font-weight: 400;">Recib&iacute; algunos reconocimientos y premios en el &aacute;mbito del cine como tambi&eacute;n en el campo de las artes visuales. Publiqu&eacute; un libro de poes&iacute;a visual titulado &ldquo;f&oacute;sil&rdquo; y vengo desarrollando otros artefactos. Lo que me atrae es ir detr&aacute;s de un misterio que conecta todas las cosas desde tiempos inmemoriales.</span></p>
    <p style="text-align: justify;"><strong>English:</strong></p>
    <p style="text-align: justify;"><strong>Biography&nbsp;</strong></p>
    <p style="text-align: justify;"><span style="font-weight: 400;">I work in my creative experiment laboratory, where languages multiply. A bacchanal of elements that unfolds like a fabric that reveals a diversity of geometries. I am moved by questions about the paths we have taken through culture, I am interested in people and generating unfinished conversations about links and transformation processes.</span></p>
    <p style="text-align: justify;"><span style="font-weight: 400;">I work with audio-visuals crossing non-linear paths and asking questions about the boxes that sometimes end up being traps. Audiovisual language has been a place to reach, but I have also crossed the path towards photography, graphics, painting and writing. I find in artistic practice a space to develop my curiosity and my vital engine, through intuition. Photography was the first Aleph where I saw myself mirrored. The mysteries of light that travel through time have been a source of inspiration for my work. Delving into the idea of time, I began to admire the archaeological sites, paintings and symbols of ancient cultures. Both photography and painting on a rock are human expressions that generate few answers and many questions. What attracts me is a mystery that connects all things since immemorial time.</span></p>`

    // texto: [
    //     "BIO:",
    //     "Me llamo Lucy Riera, nací en Argentina. Trabajo en mi laboratorio creativo de experiencias y  encuentro en la práctica artística un espacio donde desarrollar mi motor vital a través de lenguajes transdisciplinarios como las artes visuales, el audiovisual, la escritura, la gráfica.",
    //     "Dirigí películas que tienen como eje el estudio de la imagen. La primera es del 2014, “La caja de arriba del ropero” recorre la obra de Juan Pi, un fotógrafo nacido en Ginebra, Suiza que emigra a Argentina. Recientemente terminé mi segundo largometraje, “Vado in America” que aborda una colección de fotos que surge de una amplia investigación junto a Cristina Boixadós que nos llevó a recuperar las placas fotográficas que habían sido desechadas en Argentina, nos conectó con la región de Ticino, con los descendientes de la familia del fotógrafo en Suiza y además es un trabajo que desborda los límites del cine extendiéndose a otros formatos.",
    //     "Recibí algunos reconocimientos y premios en el ámbito del cine como también en el campo de las artes visuales. Publiqué un libro de poesía visual titulado “fósil” y vengo desarrollando otros artefactos. Lo que me atrae es ir detrás de un misterio que conecta todas las cosas desde tiempos inmemoriales.",
    //     "STATEMENT",
    //     "Trabajo en mi laboratorio creativo de experimentos, en donde los lenguajes se multiplican. Una bacanal de elementos que se va desplegando como tejido que advierte diversidad de geometrías. Me mueven preguntas sobre los caminos que hemos recorrido a través de la cultura, me interesan las personas y generar conversaciones siempre inconclusas acerca de los vínculos y los procesos de transformación.",
    //     "Trabajo con el audio-visual cruzando por caminos no lineales y haciendo preguntas sobre los casilleros que a veces terminan siendo trampas. El lenguaje audiovisual ha sido un lugar a donde llegar, pero también he cruzado la vereda hacia la fotografía, la gráfica, la pintura y la escritura. Encuentro en la práctica artística un espacio donde desarrollar mi curiosidad y mi motor vital, a través de la intuición.",
    //     "La fotografía fue el primer Aleph en donde me vi espejada. Los misterios de la luz que viaja en el tiempo han sido fuente de inspiración para mis trabajos. Ahondando en la idea de tiempo, comencé a admirar los yacimientos arqueológicos, pinturas y símbolos de las culturas antiguas. Tanto la fotografía como la pintura en una roca, son expresiones humanas que generan pocas respuestas y muchas preguntas. Lo que me atrae es un misterio que conecta todas las cosas desde tiempos inmemoriales.",
    //     "I work in my creative experiment laboratory, where languages multiply. A bacchanal of elements that unfolds like a fabric that reveals a diversity of geometries. I am moved by questions about the paths we have taken through culture, I am interested in people and generating unfinished conversations about links and transformation processes.",
    //     "I work with audio-visuals crossing non-linear paths and asking questions about the boxes that sometimes end up being traps. Audiovisual language has been a place to reach, but I have also crossed the path towards photography, graphics, painting and writing. I find in artistic practice a space to develop my curiosity and my vital engine, through intuition. Photography was the first Aleph where I saw myself mirrored. The mysteries of light that travel through time have been a source of inspiration for my work. Delving into the idea of time, I began to admire the archaeological sites, paintings and symbols of ancient cultures. Both photography and painting on a rock are human expressions that generate few answers and many questions. What attracts me is a mystery that connects all things since immemorial time."
    // ]
};
const contenido = [
    // VVVMODELO DE OBJETO PARA COPIAR!VVV
    // {
    //     id: "PONER EL TITULO",
    //     año: "OBVIO",
    //     categoria: "personales/O/colectivos",
    //     rubro: (S/N)"cine",
    //     link: [{
    //         ref: "LO QUE SE LEE",
    //         url: "https://LINK.BLE",
    //     }],
    //     texto: 
    //     `PEGAR HTML ACÁ`,
    //     video: [
    //         'EN CASO DE VIMEO SOLO COPIAR Y PEGAR /O/ YOUTUBE:<div style="position: relative;"><iframe QUITAR WIDTH Y HEIGHT></iframe></div>',
    //     ],
    //     img: ["./img/#NUMERODECARPETA#/nombredelarchivo.jpg"],
    // },
    {
        id: "IMPRESSIONI DALL’ARGENTINA",
        año: "2026",
        categoria: "personales",
        link: [{
            ref: "Link",
            url: "https://www.museodelmalcantone.ch/programma-2024/giornata-svizzera-dei-mulini",
        }],
        texto: 
        `<p><strong>Espa&ntilde;ol:</strong></p>
        <p><strong>Im&aacute;genes salvajes para </strong><strong><em>Impressioni dall&rsquo;Argentina</em></strong></p>
        <p style="text-align: justify;"><span style="font-weight: 400;">En la escritura de Elvira aparece un uso persistente de la met&aacute;fora, lo que me llev&oacute; a trabajar con &ldquo;im&aacute;genes salvajes&rdquo;. Me centr&eacute; en animales trasladados a Am&eacute;rica por procesos coloniales como palomas, liebres, truchas arco&iacute;ris, jabal&iacute;es y en un &ldquo;insectario&rdquo; presente en sus cartas: gusanos de seda, mantis, ara&ntilde;as, ef&iacute;meras.</span></p>
        <p style="text-align: justify;"><span style="font-weight: 400;">Para la portada, imagin&eacute; a Elvira tejiendo una red de palabras, met&aacute;foras y deseos de permanencia: una trama de escritura que a&uacute;n resuena en el presente.</span></p>
        <p style="text-align: justify;"><span style="font-weight: 400;">La figura del arcano </span><em><span style="font-weight: 400;">La Fuerza</span></em><span style="font-weight: 400;"> (Tarot de Marsella) aparece como un eco: una mujer que enfrenta y contiene a la bestia. Una imagen que condensa una forma de habitar el mundo en tensi&oacute;n con las normas de su tiempo.</span></p>
        <p style="text-align: justify;"><strong>T&eacute;cnica: </strong><span style="font-weight: 400;">Las ilustraciones fueron realizadas a partir de negativos fotogr&aacute;ficos mediante cianotipia, con su caracter&iacute;stico azul de Prusia y luego intervenidas con grabado en madera. El resultado es una serie de originales m&uacute;ltiples sobre papel, digitalizados para su reproducci&oacute;n en el libro.</span></p>
        <p><strong>English:</strong></p>
        <p><strong>Wild Images for </strong><strong><em>Impressioni dall&rsquo;Argentina</em></strong></p>
        <p style="text-align: justify;"><span style="font-weight: 400;">In Elvira&rsquo;s writing, metaphor appears persistently, which led me to work with &ldquo;wild images.&rdquo; I focused on animals transported to the Americas through colonial processes as pigeons, hares, rainbow trout, wild boar, as well as on an &ldquo;insectarium&rdquo; present in her letters: silkworms, mantises, spiders, mayflies.</span></p>
        <p style="text-align: justify;"><span style="font-weight: 400;">For the cover, I imagined Elvira weaving a web of words, metaphors, and a desire to endure: a fabric of epistolary writing that continues to resonate in the present.</span></p>
        <p style="text-align: justify;"><span style="font-weight: 400;">The figure of </span><em><span style="font-weight: 400;">Strength</span></em><span style="font-weight: 400;"> (from the Marseille Tarot) appears as an echo: a woman confronting and containing the beast. An image that condenses a way of inhabiting the world in tension with the norms of her time.</span></p>
        <p style="text-align: justify;"><strong>Technique: </strong><span style="font-weight: 400;">The illustrations were created from photographic negatives using cyanotype, producing its characteristic Prussian blue, and later intervened with woodcut. The result is a series of original multiples on paper, digitized for reproduction in the book.</span></p>`,
        img: ["./img/10/1 tapa- IMPRESSIONI DALLÔÇÖARGENTINA.png","./img/10/2 i-bigatti-bellissimi.png","./img/10/3 la-forza-(tarot-XI).png"],
    },
    {
        id: "ESTRANIAZIONE",
        categoria: "personales",
        link: [{
            ref: "Prensa",
            url: "https://www.museodelmalcantone.ch/esposizione-temporanea",
        }],
        texto: 
        `<p><strong>Espa&ntilde;ol:</strong></p>
        <p><strong>Estraniazione. Fotograf&iacute;as de un emigrante malcantonés en Argentina</strong></p>
        <p style="text-align: justify;"><span style="font-weight: 400;">Esta exposici&oacute;n forma parte de un proyecto m&aacute;s amplio en torno a la familia Righetti, emigrantes del cant&oacute;n Ticino en Argentina a fines del siglo XIX, que incluye un documental, una video performance de Lucy Riera y una publicaci&oacute;n.</span></p>
        <p style="text-align: justify;"><span style="font-weight: 400;">El proyecto surge a partir del hallazgo de m&aacute;s de 500 placas fotogr&aacute;ficas en Argentina en 2014, dando inicio a una investigaci&oacute;n desarrollada junto a la historiadora Cristina Boixad&oacute;s. Las im&aacute;genes, tomadas entre Argentina y el Malcantone por Pietro y Am&eacute;rico Righetti, trazan un recorrido entre territorios, revelando continuidades y desplazamientos en la experiencia migratoria.</span></p>
        <p style="text-align: justify;"><span style="font-weight: 400;">A trav&eacute;s de estas fotograf&iacute;as, se activan relatos que cruzan lo familiar, el oficio y el territorio. La historia de la familia &mdash;ligada a la herrer&iacute;a, al estuco y a los saberes transmitidos entre generaciones&mdash; se despliega como un entramado entre Europa y Am&eacute;rica, donde las im&aacute;genes funcionan no solo como registro, sino como espacio de memoria y relectura.</span></p>
        <p><strong>English:</strong></p>
        <p><strong>Estraniazione. Photographs of a Malcantone Emigrant in Argentina</strong></p>
        <p><span style="font-weight: 400;">This exhibition is part of a broader project centered on the Righetti family, emigrants from the canton of Ticino to Argentina at the end of the 19th century. The project also includes a documentary, a video performance by Lucy Riera, and a publication.</span></p>
        <p><span style="font-weight: 400;">The project originated with the discovery of more than 500 photographic glass plates in Argentina in 2014, leading to an extended research process developed in collaboration with historian Cristina Boixad&oacute;s. Taken in both Argentina and the Malcantone by Pietro and Am&eacute;rico Righetti, the images trace a movement between territories, revealing continuities and displacements within the migratory experience.</span></p>
        <p><span style="font-weight: 400;">Through these photographs, narratives emerge that intertwine family history, craft, and place. The family&rsquo;s story&mdash;linked to metalwork, stucco, and skills passed down through generations&mdash;unfolds as a network between Europe and South America, where images function not only as records but as sites of memory and reinterpretation.</span></p>
        <p><strong>Investigaci&oacute;n y textos:</strong><span style="font-weight: 400;"> Cristina Boixad&oacute;s, Lucy Riera, Damiano Robbiani&nbsp;</span></p>
        <p><strong>Con la colaboraci&oacute;n de:</strong><span style="font-weight: 400;"> Maglio del Malcantone, Biblioteca de Filosof&iacute;a, Humanidades y Psicolog&iacute;a, Universidad Nacional de C&oacute;rdoba, Argentina, Ana Apontes&nbsp;</span></p>
        <p><strong>Preimpresi&oacute;n:</strong><span style="font-weight: 400;"> Taiana Muzzano, Damiano Robbiani&nbsp;</span></p>
        <p><strong>Con el apoyo de:&nbsp;</strong></p>
        <p><span style="font-weight: 400;">Fundaci&oacute;n Aldo y Cele Dacc&ograve; para el Progreso, Lugano&nbsp;</span></p>
        <p><span style="font-weight: 400;">Fundaci&oacute;n Pasquale Lucchini, Lugano&nbsp;</span></p>
        <p><span style="font-weight: 400;">Ministerio de Cultura, Argentina&nbsp;</span></p>
        <p><span style="font-weight: 400;">New-Jet Ponteggi Sagl&nbsp;</span></p>
        <p><span style="font-weight: 400;">Municipio de Miglieglia </span></p>`,
        año: "2024",
        img: ["./img/9/1-Estranianione-Mostra-Maglio.jpg", "./img/9/2-Estranianione-Mostra-Maglio-3.jpg", "./img/9/3 -Estranianione-Mostra-Maglio-2.jpg"],
    },
    {
        id: "TEATRO DE MÁQUINAS",
        categoria: "personales",
        link: [{
            ref: "Video performances",
            url: "https://vimeo.com/showcase/10394917",
        }],
        texto: 
        `<p><strong>Espa&ntilde;ol:</strong></p>
        <p><strong>Teatro de M&aacute;quinas. Videoperformance</strong></p>
        <p style="text-align: right;"><span style="font-weight: 400;">&ldquo;La verdadera imagen del pasado pasa s&uacute;bitamente. S&oacute;lo en la imagen, que relampaguea de una vez para siempre en el instante de su cognoscibilidad, se deja fijar el pasado&rdquo;&nbsp;</span></p>
        <p style="text-align: right;"><span style="font-weight: 400;">Walter Benjamin&nbsp;</span></p>
        <p style="text-align: justify;"><span style="font-weight: 400;">Este dispositivo perform&aacute;tico, mediado por la m&aacute;quina, opera en capas: memoria colectiva, zonas de sombra y reg&iacute;menes de simulaci&oacute;n donde se vuelve inestable la distinci&oacute;n entre lo real y lo imaginario.</span></p>
        <p style="text-align: justify;"><span style="font-weight: 400;">La video performance se estructura como un bucle de reactivaciones: la escena original &mdash;una fotograf&iacute;a de hace m&aacute;s de un siglo&mdash;, su reinscripci&oacute;n en el presente a trav&eacute;s del video y su posterior circulaci&oacute;n como imagen reproducida. En ese tr&aacute;nsito, la imagen deja de funcionar como registro y se vuelve operaci&oacute;n: un artificio que expone sus propias condiciones de producci&oacute;n.</span></p>
        <p style="text-align: justify;"><span style="font-weight: 400;">La acci&oacute;n no ocurre frente a la c&aacute;mara, sino con ella. Se construye en esa relaci&oacute;n. Resulta ser una imagen fantasm&aacute;tica, desplazada de su tiempo, que se activa como imagen-acci&oacute;n. Un simulacro que, al mismo tiempo, abre una dimensi&oacute;n ritual: un umbral donde cuerpos e im&aacute;genes se desdoblan y dejan de coincidir consigo mismos.</span></p>
        <p><span style="font-weight: 400;"><strong>English:</strong>&nbsp;</span></p>
        <p><strong>Machine Theater. Video Performance&nbsp;</strong></p>
        <p style="text-align: right;"><span style="font-weight: 400;">&ldquo;The true picture of the past flits by. The past can be seized only as an image which flashes up at the instant when it can be recognized and is never seen again.&rdquo; </span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">Walter Benjamin</span></p>
        <p style="text-align: justify;"><span style="font-weight: 400;">This performative device, mediated by the machine, operates in layers: collective memory, shadow zones, and regimes of simulation where the distinction between the real and the imaginary becomes unstable.</span></p>
        <p style="text-align: justify;"><span style="font-weight: 400;">The video performance unfolds as a loop of reactivations: the original scene&mdash;a photograph taken more than a century ago&mdash;its reinscription in the present through video, and its subsequent circulation as a reproduced image. In this process, the image ceases to function as a record and becomes an operation: an artifact that exposes its own conditions of production.</span></p>
        <p style="text-align: justify;"><span style="font-weight: 400;">The action does not take place in front of the camera, but with it. It is constructed within that relationship.</span></p>
        <p style="text-align: justify;"><span style="font-weight: 400;">The result is a ghostly image, displaced from its original time, activated as image-action. A simulacrum that, at the same time, opens onto a ritual dimension: a threshold where bodies and images split and no longer coincide with themselves.</span></p>`,
        // texto: [
        //     "Video performances y video instalación",
        //     "Lugar de realización: Comuna de Aranno, Cantón Ticino, Suiza. Año 2023",
        //     "Este es el registro de la video-performance titulada “Teatro de Máquinas” se desarrolló en el marco de la muestra “Malcantone 1900, bajo la mirada de un emigrante”, organizada por el Museo de Curio (Suiza) junto con su director Damiano Robbiani, gracias a la colaboración de la Fundación “Maglio del Malcantone” y basado en la investigación de la historiadora Cristina Boixadós (Argentina)",
        //     "La video-instalación se realizará en septiembre de 2025 en el Maglio del Malcantone, Suiza."
        // ],
        año: "2024",
        video: [
            '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/955688755?h=d67d8ab528" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
        ]
    },
    {
        id: "VADO IN AMERICA",
        categoria: "personales",
        rubro: "cine",
        texto: 
        `<p><span style="font-weight: 400;">Pel&iacute;cula, no ficci&oacute;n, 90 minutos. Formato: Super 8 y digital. Coproducci&oacute;n: Argentina, Suiza.</span></p>
        <p><strong>Logline</strong></p>
        <p><strong>Espa&ntilde;ol:</strong></p>
        <p style="text-align: justify;"><span style="font-weight: 400;">En Argentina rescatan de la basura fotos de finales del siglo XIX que pertenecieron a inmigrantes suizos. Las im&aacute;genes viajan a trav&eacute;s de territorios, guerras, movimientos humanos, entre Am&eacute;rica y Europa, en medio de la invenci&oacute;n de un Estado naci&oacute;n.</span></p>
        <p><strong>Logline&nbsp;</strong></p>
        <p><strong>English:</strong></p>
        <p style="text-align: justify;"><span style="font-weight: 400;">In Argentina, photos from the late 1800s that belonged to Swiss immigrants were rescued from the trash. The images travel through territories, wars, human movements, between America and Europe, in the middle of the invention of a nation-state.</span></p>
        <p><span style="font-weight: 400;">Gui&oacute;n y direcci&oacute;n: Lucy Riera</span></p>
        <p><span style="font-weight: 400;">Producci&oacute;n: Ana Apontes y Lucy Riera</span></p>
        <p><span style="font-weight: 400;">Investigaci&oacute;n: Cristina Boixad&oacute;s</span></p>
        <p><span style="font-weight: 400;">Producci&oacute;n ejecutiva: Ana Apontes</span></p>
        <p><span style="font-weight: 400;">Coproductor: Nicola Genni</span></p>
        <p><span style="font-weight: 400;">Montaje: Mario Bocchicchio</span></p>
        <p><span style="font-weight: 400;">Dise&ntilde;o de Sonido: Andre Riera</span></p>
        <p><span style="font-weight: 400;">Asistente integral: Federico Robles</span></p>
        <p><span style="font-weight: 400;">Mezcla: Riccardo Studer</span></p>
        <p><span style="font-weight: 400;">M&uacute;sico: Sergio Lavia</span></p>
        <p><span style="font-weight: 400;">Protagonistas: Cristina Boixad&oacute;s y Paolo Righetti</span></p>
        <p><span style="font-weight: 400;">Conversaciones en orden de aparici&oacute;n: Anal&iacute;a Righetti, Ruth Rivas, Malvina Gonz&aacute;lez Lanfir, Ana Sof&iacute;a Maiz&oacute;n, Adriano Righetti</span></p>
        <p><span style="font-weight: 400;">Casas productoras: elojoylaoreja (Argentina), PicFilm (Suiza)</span></p>
        <p><span style="font-weight: 400;">Apoyos: INCAA- Instituto de Cine Argentino, RSI- Radiotelevisione Svizzera,&nbsp;Mecenazgo, Santander, Ticino Film Commission, Museo del Malcantone, Fondo Nacional de las Artes</span></p>`,
        
        // texto: [
        //     "Película, no ficción, 90 minutos.",
        //     "Formato: Super8 y digital.",
        //     "En etapa de postproducción.",
        //     "Coproducción: Argentina, Suiza.",
        //     "Clínica de guión con Gustavo Fontán.",
        //     "LOGLINE (Español):",
        //     "En Argentina rescatan de la basura fotos de finales del siglo XIX que pertenecieron a inmigrantes suizos. Las imágenes viajan a través de territorios, guerras, movimientos humanos, entre América y Europa, en medio de la invención de un Estado nación.",
        //     "LOGLINE (English):",
        //     "In Argentina, photos from the late 1800s that belonged to Swiss immigrants were rescued from the trash. The images travel through territories, wars, human movements, between America and Europe, in the middle of the invention of a nation-state.",
        //     "Guión y dirección: Lucy Riera",
        //     "Producción: Ana Antes y Lucy Riera",
        //     "Investigación: Cristina Boixadós",
        //     "Producción ejecutiva: Ana Apontes",
        //     "Coproductor: Nicola Genni",
        //     "Montaje: Mario Bocchicchio",
        //     "Diseño de Sonido: Andre Riera",
        //     "Asistente integral: Federico Robles",
        //     "Mezcla: Riccardo Studer",
        //     "Músico: Sergio Lavia",
        //     "Protagonistas:",
        //     "Cristina Boixadós",
        //     "Paolo Righetti",
        //     "Conversaciones en orden de aparición:",
        //     "Analía Righetti",
        //     "Ruth Rivas",
        //     "Malvina González Lanfir",
        //     "Ana Sofía Maizón",
        //     "Adriano Righetti",
        //     "Casas productoras:",
        //     "elojoylaoreja (Argentina)",
        //     "PicFilm (Suiza)",
        //     "Apoyos:",
        //     "INCAA- Instituto de Cine Argentino",
        //     "RSI- Radiotelevisione Svizzera",
        //     "Mecenazgo",
        //     "Santander",
        //     "Ticino Film Commission",
        //     "Museo del Malcantone",
        //     "Fondo Nacional de las Artes",
        //     ],
        año: "2027",
        img: ["./img/0/CARTEL-VADO-IN-AMERICA--WEB.jpg"],
        video: [
            '<div style="position: relative;"><iframe style="aspect-ratio: 16 / 9; width: 100% !important;" src="https://www.youtube-nocookie.com/embed/xWko385Ias0?si=1Lu4YoiM0GUUl19p" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>',
        ],
        link: [{
            ref: "Nota de prensa",
            url: "https://ticinofilmcommission.ch/en/article/2413/quelle-fotografie-d-altri-tempi-che-dall-argentina-ci-portano-in-malcantone",
        }],
    },
    {
        id: "RICORDO DI UN PORTALE INTERDIMENSIONALE",
        categoria: "personales",
        img: ["./img/1/1 Aranno-comp.jpg","./img/1/2 ni+¦as-comp.jpg"],
        texto: 
        `<p><strong>Espa&ntilde;ol:</strong></p>
        <p><strong>Recuerdo de un portal interdimensional</strong></p>
        <p style="text-align: justify;"><span style="font-weight: 400;">El proyecto de intervenci&oacute;n sobre im&aacute;genes parte de una intuici&oacute;n y es que &ldquo;las fotograf&iacute;as son portales&rdquo;. El conjunto de fotograf&iacute;as est&aacute; datado entre 1869 y 1930, fue rescatado de la basura gracias al trabajo de la investigadora Cristina Boixad&oacute;s en conjunto con Lucy Riera. Los originales se conserva actualmente en la Biblioteca de Filosof&iacute;a de la Universidad Nacional de C&oacute;rdoba, Argentina. </span></p>
        <p style="text-align: justify;"><span style="font-weight: 400;">El proyecto se activa a trav&eacute;s de la circulaci&oacute;n de postales: im&aacute;genes que se reparten y se env&iacute;an, retomando la l&oacute;gica del intercambio epistolar. Un gesto que insiste en la escritura a mano, en el tiempo diferido del env&iacute;o y en la posibilidad de reactivar v&iacute;nculos a trav&eacute;s de la imagen. Estas postales fueron realizadas en colaboraci&oacute;n con el Museo del Malcantone y la Fondazione Maglio del Malcantone, en el cant&oacute;n del Tesino, Suiza.</span></p>
        <p><strong>English:</strong></p>
        <p><strong>Remembrance of an Interdimensional Portal</strong><span style="font-weight: 400;">&nbsp;</span></p>
        <p style="text-align: justify;"><span style="font-weight: 400;">The image intervention project stems from an intuition: &ldquo;photographs are portals.&rdquo; The body of photographs&mdash;dated between 1869 and 1930&mdash;was recovered from the trash through the work of researcher Cristina Boixad&oacute;s in collaboration with Lucy Riera. The originals are currently held at the Library of Philosophy of the National University of C&oacute;rdoba, Argentina.</span></p>
        <p style="text-align: justify;"><span style="font-weight: 400;">The project is activated through the circulation of postcards: images that are distributed and sent, revisiting the logic of epistolary exchange. A gesture that insists on handwriting, on the delayed temporality of sending, and on the possibility of reactivating connections through the image.</span></p>
        <p style="text-align: justify;"><span style="font-weight: 400;">These postcards were produced in collaboration with the Museo del Malcantone and the Fondazione Maglio del Malcantone, in the canton of Ticino, Switzerland.</span></p>`,
        año: "2023",
    },
    {
        id: "FÓSIL",
        categoria: "personales",
        img: ["./img/2/1.JPG","./img/2/2.JPG","./img/2/3.JPG"],

        video: [
            '<div style="position: relative;"><iframe style="aspect-ratio: 16 / 9; width: 100% !important;" src="https://www.youtube-nocookie.com/embed/BA6auGWigNE?si=FfHwKvnTgdft6mVe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>',
            // '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/730093231?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Video presentación del libro &quot;FÓSIL&quot;"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
            // '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/925117546?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Pasto - Presentación del libro &quot;Fósil&quot;"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
            ],
        texto: [
            `<p><strong>Espa&ntilde;ol:</strong></p>
            <p><strong>F&oacute;sil</strong><strong><br /></strong><span style="font-weight: 400;">Libro de poes&iacute;a visual + video poes&iacute;a</span><span style="font-weight: 400;">.&nbsp;</span><span style="font-weight: 400;">Editado por lumpen.editorial</span></p>
            <p><em><span style="font-weight: 400;">F&oacute;sil</span></em><span style="font-weight: 400;"> propone una lectura desplazada, donde lo visual y lo po&eacute;tico se cruzan sin jerarqu&iacute;as. El libro no se organiza construyendo un campo de percepci&oacute;n: ritmos, tensiones, zonas de vac&iacute;o. Un movimiento que requiere otra forma de atenci&oacute;n, m&aacute;s cercana a la deriva que a la interpretaci&oacute;n.</span></p>
            <p><span style="font-weight: 400;">Como se&ntilde;ala el Prospecto de lectura, de Fisi&oacute;n Ciruja:</span></p>
            <p><em><span style="font-weight: 400;">&ldquo;&iquest;Qu&eacute; necesitas saber antes de iniciar la lectura?</span></em></p>
            <p><em><span style="font-weight: 400;">Es necesario despegarse de lo expl&iacute;cito. Abrir el propio yacimiento emocional. Deponer la ansiedad racional para acompa&ntilde;ar el desplazamiento del poema. Atenerse a lo mutable. Ajustar las expectativas l&iacute;ricas a la inquietud de un oleaje.&rdquo;</span></em></p>
            <p><span style="font-weight: 400;">El proyecto se extiende en una serie de video poemas, donde las im&aacute;genes se activan en el tiempo y contin&uacute;an ese trabajo de desplazamiento y transformaci&oacute;n.</span></p>
            <p><strong>English:</strong></p>
            <p><strong>Fossil</strong><strong><br /></strong><span style="font-weight: 400;"> Visual poetry book + video poetry</span><span style="font-weight: 400;">.&nbsp;</span><span style="font-weight: 400;">Published by lumpen.editorial</span></p>
            <p><em><span style="font-weight: 400;">Fossil</span></em><span style="font-weight: 400;"> proposes a displaced mode of reading, where the visual and the poetic intersect without hierarchy. The book unfolds as a field of perception&mdash;rhythms, tensions, zones of emptiness&mdash;rather than a linear structure. A movement that calls for a different kind of attention, closer to drifting than to interpretation.&nbsp;</span></p>
            <p><span style="font-weight: 400;">As stated in the Reading Prospectus by Fisi&oacute;n Ciruja:</span></p>
            <p><em><span style="font-weight: 400;">&ldquo;What do you need to know before beginning the reading?</span></em></p>
            <p><em><span style="font-weight: 400;">It is necessary to detach from the explicit. To open one&rsquo;s own emotional deposit. To set aside rational anxiety in order to follow the displacement of the poem. To adhere to the mutable. To adjust lyrical expectations to the unrest of a swell.&rdquo;</span></em></p>
            <p><span style="font-weight: 400;">The project extends into a series of video poems, where images unfold in time and continue this process of displacement and transformation.</span></p>`,
            // "libro de poesía visual + video poesía",
            // "Fósil es un libro de poesía visual editado por lumpen.editorial",
            // "Fragmento del Prospecto de lectura, de Fisión Ciruja: ",
            // "“¿Qué necesitas saber antes de iniciar la lectura?",
            // "Es necesario despegarse de lo explícito. Abrir el propio yacimiento emocional. Deponer la ansiedad racional para acompañar el desplazamiento del poema. Atenerse a lo mutable. Ajustar las expectativas líricas a la inquietud de un oleaje.”",
            // "En la presentación nos acompañaron con lecturas y comentarios, Lulú Colombo, Natalia Silberleib @unlibroesunlibro y Tenshi de @fisionciruja (quien confecciona el prospecto de lectura que acompaña el poemario). Sonó música seleccionada para la ocasión por Andrea Riera, proyecciones visuales y una pequeña exposición de pinturas y objetos.",
            // "Viernes 18/03/22, 18 hs. en La Libre @lalibrearteylibros Chacabuco 917",
        ],
        año: "2022",
    },
    {
        id: "EL GIGANTE",
        categoria: "personales",
        rubro: "cine",
        img: ["./img/11/1 afiche-el-gigante.jpg"],
        link: [
            {
                ref: "Facebook",
                url: "https://www.facebook.com/ungigantecae/",
            },
            {
                ref: "Change.org",
                url: "https://www.change.org/p/comuna-4-parar-la-tala-de-%C3%A1rboles-en-caba-y-puntualmente-en-el-barrio-de-la-boca?recruiter=43588956&utm_source=share_petition&utm_medium=facebook&utm_campaign=share_petition&utm_term=psf_combo_share_initial.pacific_post_sap_share_gmail_abi.gmail_abi&recruited_by_id=93dc6f40-6b4f-0130-ac9f-3c764e046567",
            },
            {
                ref: "No a la tala de árboles: firmas del petitorio en change.org",
                url: "https://drive.google.com/file/d/1KxC7iWUkuk96vat3jj_PEnbR9_gFO0L_/view?usp=drive_link",
            },
            {
                ref: "Nota",
                url: "https://radiografica.org.ar/2019/03/25/la-boca-buscan-talar-un-historico-arbol-de-la-calle-palos/",
            },
        ],
        video: [
            '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/649711579?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="El gigante"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
        ],
        texto: [
            `<p><strong>Espa&ntilde;ol:</strong></p>
            <p><strong>El Gigante- Sinopsis</strong></p>
            <p style="text-align: justify;"><span style="font-weight: 400;">Me cortaron las ramas, la frondosidad, mutilaron mis espinas, vinieron desde mis pesadillas con motosierras a despedazar lo poco verde que hab&iacute;a quedado del verano. Se dejaron regadas en el piso las miradas que cruzamos, los amigos del barrio, el barrio cuando estabas.</span></p>
            <p><strong>English</strong></p>
            <p><strong>The Giant - Synopsis</strong></p>
            <p style="text-align: justify;"><strong><br /></strong><span style="font-weight: 400;"> They cut off my branches, my lushness, mutilated my thorns. They came out of my nightmares with chainsaws, tearing apart the little green that remained of summer. The glances we exchanged were left scattered on the ground, the friends from the neighborhood, the neighborhood when you were here.</span></p>`,
            // "Película, no ficción, 8.22 minutos.",
            // "Registro de una acción poética: Pintar la sombra que el Pehuen arrojará sobre la calle, el día 30 de marzo de 2018, en latitud 34.63351202340709, longitud 58.363833530914675, Tiempo Universal Coordinado.",
            // "Realización: Lucy Riera",
            // "Cámara: Milagros Arias y Lucy Riera",
            // "Producción: Juliana Saravia y Ana Navia",
            // "Con el apoyo de la comunidad del barrio de La Boca, Buenos Aires, Argentina",
            // "Festivales:",
            // "Festival de Cine Anarquista, Argentina, Bs As, 2023.",
            // "MARCO Museo La Boca. Exposición Internacional de Videoarte, Buenos Aires, 2021.",
        ],
        año: "2019",
    },
    {
        id: "VUELTA, FUGA Y PUNTO DE RETORNO",
        categoria: "personales",
        rubro: "cine",
        img: ["./img/3/afiche-VFyPR-.jpg"],
        link: [
            {
                ref: "Artículo",
                url: "https://margenes.uv.cl/index.php/margenes/article/view/3899/4210",
            },
            {     
                ref: "Nota de prensa",
                url: "https://lumiton.ar/evento/vuelta-fuga-y-punto-de-retorno/",
            },
        ],
        video: [
            '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1004195114?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="TRAILER: Vuelta, fuga y punto de retorno."></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
        ],
        texto: [
            "Película no ficción, 86 minutos, 2019",
            "Coproducción: Argentina y Chile",
            "LOGLINE:",
            "Un accidente cambia la vida de un arquitecto. Visita una comunidad mapuche y decide aprender eco-construcción. Conoce personas que dejan entrever otros mundos posibles. Así comienza un camino reflexivo y expansivo para construir su casa y habitar un lugar, aunque tal vez el lugar lo habite a él.",
            "Festivales:",
            "Tulum World Environment Film Festival 2022",
            "PIFF Parana Internacional Films Festival 7 Edición 2021",
            "Ecocine - Festival Internacional de Cinema Ambiental e Direitos Humanos 2021",
            "Madrid Indie Film Festival • MADRIFF 2020",
            "FIDBA, International Documentary Film Festival, Buenos Aires, Argentina 2020",
            "Dirección, guión y montaje: Lucy Riera",
            "Diseño de sonido: Andrea Riera",
            "Producción: Carla Márquez y Lucy Riera",
            "Música: Aníbal Correa",
            "Tema: Ingreso a la hiperbórea del sur",
            "Corrección de color: Chino Flores (SAE)",
            "Cámara:",
            "Andrea Riera",
            "Carlos Silva",
            "Fernando Rossi",
            "Sebastián Sacur",
            "Kiara Vega",
            "Lucy Riera",
            "Timelapse:",
            "Fabián Verdugo",
            "Fernando Rossi",
            "Sebastián Sacur",
            "Sonido Directo:",
            "Andrea Riera",
            "Sebastián Sacur",
            "Carla Márquez",
            "Guadalupe Perez Cesaretti",
            "Protagonista: Horacio Márquez",
            "Convesaciones con:",
            "Alberto Polkosnik",
            "Ángela Jorge",
            "Aída Arévalo",
            "Melania Jesús Bocchia",
            "José Ignacio Tessore",
            "Anibal Correa",
            "Omar Eduardo Cañete Islas",
            "Participación especial de los perros: Lola, Ema, Santo, Isis, Pepa, Roy, Mona y Moro",
            "Perros actores de foley: Ozzy y Lemmy",
        ],
        año: "2019",
    },
    {
        id: "PULSIONARCAICA",
        categoria: "personales",
        img: ["./img/4/detalle  mujer cabeza de estampida  -.jpg","./img/4/1.jpeg","./img/4/2 web.jpg","./img/4/3.jpg","./img/4/4.jpg"],
        video: [
            '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/335038540?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Pulsión Arcaica"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
        ],
        link: [{
            ref: "Rotterdam, Holanda",
            url: "https://youtu.be/7rKb2OROSv0",
            ref: "Paris, Canal Saint Martin, Francia",
            url: "https://www.instagram.com/p/CfU9ptslT6h/",
            ref: "Valparaíso, Chile",
            url: "https://vimeo.com/335038540",
            ref: "Buenos Aires, Argentina, La casa del Bosque",
            url: "https://youtu.be/EuWQFWmtl1E",
            ref: "San Luis, Argentina",
            url: "https://www.instagram.com/p/B3LZDLWAyTX/?utm_source=ig",
            ref: "La Plata, Bs. As, Argentina",
            url: "https://www.instagram.com/p/B4BgKTzAJb8/?utm_source=ig",
            ref: "Video La boca,  Buenos Aires, Argentina",
            url: "https://vimeo.com/277170291",
            // ref: "vimeo",
            // url: "https://vimeo.com/showcase/10394394",
        }],
        texto: 
        `<p><strong>Espa&ntilde;ol</strong></p>
        <p><strong>Pulsi&oacute;n Arcaica</strong></p>
        <p style="text-align: justify;"><span style="font-weight: 400;">Las pegatinas xilogr&aacute;ficas de la colecci&oacute;n Pulsi&oacute;n Arcaica se realizan en la v&iacute;a p&uacute;blica como una acci&oacute;n situada, ritual. Un gesto que no busca representar sino activar: una invocaci&oacute;n a la memoria colectiva, a aquello que persiste por fuera de los relatos oficiales. </span></p>
        <p style="text-align: justify;"><span style="font-weight: 400;">El gesto de sacar la obra a la calle no es una exhibici&oacute;n: es una restituci&oacute;n. Devolverla a un espacio donde pueda friccionar con lo que la rodea, donde no est&eacute; aislada sino en contacto. Como las marcas que aparec&iacute;an en las cavernas y caminos, ligadas al tr&aacute;nsito, al cuerpo, a la experiencia. </span></p>
        <p style="text-align: justify;"><span style="font-weight: 400;">Esta pieza nace de la necesidad de reabrir ese flujo. De conectar con formas de conocimiento que no pasan por la escritura, sino por la intuici&oacute;n, la repetici&oacute;n, la marca. De poner en relaci&oacute;n las pictograf&iacute;as originarias con nuestras propias inscripciones en el presente. </span></p>
        <p style="text-align: justify;"><span style="font-weight: 400;">En ese cruce, nuestras biograf&iacute;as como mujeres y disidencias, no aparecen como relato cerrado, sino como trama en construcci&oacute;n. Recuperamos, desviamos, reinventamos. Y en ese mismo gesto, al producir nuevos s&iacute;mbolos, tambi&eacute;n desplazamos la historia. No para fijarla otra vez, sino para volverla inestable, disponible, abierta.&nbsp;</span></p>
        <p><strong>English</strong></p>
        <p><strong>Archaic Impulse</strong><span style="font-weight: 400;">&nbsp;</span></p>
        <p style="text-align: justify;"><span style="font-weight: 400;">The woodcut posters from the </span><em><span style="font-weight: 400;">Archaic Impulse</span></em><span style="font-weight: 400;"> collection are produced in public space as a situated, ritual action. A gesture that does not seek to represent but to activate: an invocation of collective memory, of what persists beyond official narratives.</span></p>
        <p style="text-align: justify;"><span style="font-weight: 400;">Bringing the work into the street is not an exhibition&mdash;it is a restitution. A return to a space where it can come into friction with its surroundings, where it is not isolated but in contact. Like the marks that appeared in caves and along paths, tied to movement, the body, and experience.</span></p>
        <p style="text-align: justify;"><span style="font-weight: 400;">This piece emerges from the need to reopen that flow&mdash;to connect with forms of knowledge that do not pass through writing, but through intuition, repetition, and mark-making. To bring early pictographs into relation with our own inscriptions in the present.</span></p>
        <p style="text-align: justify;"><span style="font-weight: 400;">In that crossing, our biographies&mdash;as women and dissident identities&mdash;do not appear as closed narratives, but as a fabric in the making. We recover, shift, reinvent. And in that same gesture, by producing new symbols, we also displace history&mdash;not to fix it again, but to render it unstable, available, open.</span></p>`,
        año: "2022",
    },
    {
        id: "LA CAJA DE ARRIBA DEL ROPERO",
        categoria: "personales",
        rubro: "cine",
        img: ["./img/5/Afiche_v5.jpg"],
        link: [
            {
                ref: "Nota de prensa",
                url: "https://www.clarin.com/cultura/video-caja-arriba-ropero_3_cOmuvgpP2.html",
            },
            {
                ref: "Artículo",
                url: "https://doi.org/10.22370/margenes.2021.14.21.3091",
            },
            {
                ref: "Nota DAC",
                url: "https://www.youtube.com/watch?v=Nma1yEID5-8",
            },
        ],
        video: [
            '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/55612908?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="TRAILER &quot;La caja de arriba del ropero&quot;"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
        ],
        texto: [
            "Película no ficción, 60 minutos, 2014",
            "Mendoza, Argentina",
            "LOGLINE:",
            "Juan Pi llega de Suiza a Argentina en 1896. En el barco le hablan de un tesoro. Se queda en Mendoza. Se convierte en fotógrafo de San Rafael y registra el nacimiento de la ciudad. Las fotos junto con la mirada de la realizadora, componen una obra hecha de memoria y presente.",
            "Premios y festivales:",
            "Doc Buenos Aires 2014",
            "2° PREMIO COMPETENCIA NACIONAL MENDOC 2012",
            "1° mención Premio de la Prensa COMPETENCIA NACIONAL MENDOC 2012",
            "Ganador del concurso de guiones MenDoc 2011",
            "Festival BAphoto 2020",
            "Emitida en Incaa TV, en Acequia TV y Cinear.play ondemand.",
            "Declarado de interés cultural por la Honorable Cámara de Diputados de la Provincia de Mendoza, Argentina.",
            "Declarado de interés  por la Universidad Nacional de Cuyo",
            "Declarado de interés Social, Cultural y Regional  el Honorable Concejo Deliberante de San Rafael, Mendoza, Argentina.",
            "Dirección, guión y montaje: Lucy Riera",
            "Producción, Fotografía y cámara: Bernardo Blanco",
            "Proyecto, investigación y entrevistas: Taty Chanampa",
            "Diseño de sonido: Andrea Riera",
            "Música original: Abelardo Saravia",
            "Asistentes de Producción: Javier Sotelo, Guadalupe Pérez Cesaretti y Aída Arévalo",
            "Animación y Gráfica: Sebastián García",
            "Post-producción de sonido y mezcla 5.1: Martín Quinzio",
            "Colorista: Nahuel Srnec",
        ],
        año: "2014",
    },
    {
        id: "EL FLOW DE LXS CABRONXS",
        categoria: "colectivos",
        rubro: "cine",
        video: [
            '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/190180886?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Teaser: El flow de lxs cabronxs"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>'
        ],
        link: [{
            ref: "Página web",
            url: "https://elflowdelxscabronxs.github.io/",
        }],
        texto: [
            "Película no ficción en desarrollo",
            "Colectora deseante.",
            "Dirección: Emi Martín y Lucy Riera",
            "Documental en desarrollo sobre transfeminismo y HipHop en Latinoamérica",
            "Apoyos: Fondo Nacional de las Artes, Mecenazgo.",
            "Logline: Raperas latinoamericanas se conectan para hacer un viaje en el tiempo a través del hip hop, descubriendo que el rap de disidencias y mujeres es un lugar desde donde resistir en este cis-tema.",
        ],
        año: "2015 / 2024",
    },
    {
        id: "ESTAMOS ACÁ",
        categoria: "colectivos",
        rubro: "cine",
        video: [
            '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/285370194?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="ESTAMOS ACÁ (legendas em português cc)"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
        ],
        texto: [
            "Película no ficción, 8.30 minutos.",
            "Argentina, Brasil.",
            "Gabriel Martinho y Lucy Riera",
            "Sinopsis: El 8 de agosto de 2018 se votó  en el Senado Nacional de Argentina la ley para la interrupción voluntaria del embarazo (IVE) que ya tenía media sanción del Congreso Nacional. La Campaña Nacional por el Derecho al Aborto Legal, Seguro y Gratuito, convocó a una concentración, denominada 8A, a la cual acudieron una multitud de personas de todas las provincias en Argentina para ponerle el cuerpo a esta ley histórica que marca un punto de inflexión y que en la sociedad ya no tendrá vuelta atrás, más allá de los resultados. “Estamos Acá” fue filmado durante esta concertación, en la Capital Federal argentina. También se realizaron pañuelazos internacionales en la puerta de las embajadas argentinas de Madrid, Barcelona, Vigo, Bilbao, Santiago de Compostela, en algunas ciudades de Italia, en París, en Berlín, Amsterdam, Suecia, Irlanda, Canadá, en Toronto y en Montreal, Chile, México, Perú, en las ciudades brasileñas de Porto Alegre, Belo Horizonte, San Pablo. A las 02.43 de la mañana del 9 de agosto terminó la histórica sesión en el Senado de la Nación Argentina, los resultados fueron por el “no” 38 votos y 31 por el “sí”.",
        ],
        año: "2018",
    },
    // {
    //     id: "POESÍA DE LA LUZ CRUDA",
    //     categoria: "colectivos",
    //     video: [
    //         '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/824365577?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Poesía de la luz cruda"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
    //     ],
    //     texto: [
    //         "Milagros Arias y Lucy Riera",
    //         "Acción en la Plaza San Martín, Córdoba, Argentina, 2019",
    //     ],
    //     año: "2019",
    // },
    {
        id: "LABORATORIO DE INVESTIGACIÓN Y CREATIVIDAD",
        categoria: "colectivos",
        video: [
            '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/248171969?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Laboratorio de Investigación y Creatividad - 2017"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
        ],
        link: [{
            ref: "",
            url: "",
        }],
        texto: [
            "María Fabro, Milagros Arias, Lucy Riera en el Bachillerato popular de Parque Patricios",
            "El Laboratorio de Investigación y Creatividad es un área dentro del Bachillerato Popular de Parque Patricios. Durante el 2017 realizamos la experiencia con estudiantes de segundo y tercer año.  El Laboratorio brinda herramientas para el conocimiento territorial a la vida. Hay autores que hablan del uso libre del mundo “abarcar la vida como un todo y producir espacios que son políticos, nunca neutrales”. En ese sentido lo que precisamos es que el aprendizaje se viva como experiencia, no buscando confirmar verdades preestablecidas. Construir una política y pedagogía de lo sensible donde el arte  habilite la intuición, la investigación, la experimentación, la materialización de proyectos, la autogestión. La propuesta se centra en las aptitudes, habilidades, potenciaciones que nos interesa habilitar en las personas y no tanto en los contenidos a incorporar. Potenciar al artista como agente social. El arte dialoga con el contexto.",
        ],
        año: "2018",
    },
    {
        id: "LES EFELANTES",
        categoria: "colectivos",
        texto: "Libro para la infancia con ilustraciones de Fisión Ciruja., Editorial Lumpen,  Buenos Aires.",
        año: "2018",
    },
    {
        id: "REVISTA FERIA SUBJETIVA",
        categoria: "colectivos",
        link: [{
            ref: "Revistas",
            url: "https://issuu.com/feriasubjetiva",
            },
            {
               ref: "",
               url: "",
            },
        ],
        texto: [
            "La propuesta desde el Laboratorio, fue crear un proyecto que se pueda materializar colectivamente y así fue como surgió la idea de darle continuidad a una revista llevada adelante por Paula Domínguez y Lucy Riera, que había comenzado en el año 2015, desde el área de “Letras”. Luego en el 2016 sumándose el área de “Trabajo, Autogestión y Economía social y solidaria”. Y a partir del 2017 se convirtió en un proyecto llevado adelante por “El Laboratorio de Investigación y Creatividad” que renovó la revista y la conectó con el territorio. Por un lado, los textos se trabajan con temáticas transversales a todas las áreas del bachillerato. Pero además comenzamos a realizar un festival, que dimos en llamar “Festival subjetivo” en donde presentamos la revista a la comunidad, invitando a los vecinos y amigos a compartir una jornada en donde participaron distintos artistas y compartimos comida, música, lecturas y feria. Se convirtió en una herramienta para abrirnos a la comunidad circundante, el barrio, para comunicar nuestros pensamientos y para escuchar las necesidades e ideas, generando intercambio y retroalimentación. Cada número se centró en una temática: ",
            "N1: La palabra, julio 2016",
            "N2: Caminos y encuentros, octubre 2016",
            "N3 Salud, abril 2017",
            "N4: Identidad, julio 2017",
            "N5: Cuatro años de bahi, junio 2018",
            "N6: “Feria subjetiva” Periódico",
            "Apoyo: Fondo Nacional de las Artes",
            ],
        año: "2016 / 2018",
    },
    {
        id: "REVISTA CUMBRE DE FOCAS",
        categoria: "colectivos",
        link: [
            {
                ref: "ISSUU", 
                url: "https://issuu.com/mansaballena",
            },
            {
                ref: "Facebook", 
                url: "https://www.facebook.com/cumbredefocas",
            },
        ],
        texto: [
            "Colectivo: Mansa Ballena",
            "Cumbre de Focas es un encuentro, un cruce de viejas morsas de la plástica, el audiovisual y las letras provenientes de distintas latitudes que se dan cita en este fanzine orquestado por el colectivo trans-feminista Mansa Ballena.",
        ],
        año: "2016 / 2017",
    },
    {
        id: "CUADERNILLO DE ACOMPAÑAMIENTO PRE DURANTE Y POST ABORTO CON PASTILLAS",
        categoria: "colectivos",
        link: [
            {ref: "link", url: "https://archive.org/details/cuadernodecuidadosabortoconpastillas"},
        ],
        texto: [
            "Editorial Adelitas, Mansa Ballena",
            "Este material no explica cómo realizar un aborto con pastillas. Compila recetas y ejercicios para acompañar el proceso, junto a relatos en primera persona de experiencias de aborto con pastillas en Argentina, Chile y Colombia.",
        ],
        año: "2016",
    },    
    {
        id: "EL TRANSEÚNTE INTERIMAGINARIO",
        categoria: "colectivos",
        video: [
            '<div style="padding:80% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/43368444?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="El transeúnte interimaginario"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
        ],
        texto: [
            "Animación con Arena",
            "Martina Carminati, Fede Broz y Lucy Riera",
        ],
        año: "2016",
    },    
    
    {
        id: "QUIRQUINCHO-ESTUDIO", 
        categoria: "colectivos",
        img: ["./img/6/Centaurus-.jpg"],
        texto: ["Concepto, ilustración y diseño de etiquetas para productos","Compañías como: Almanac Beer Company San Francisco, California, United States.  Olfactory Brewing San Francisco, United States. Purpose Brewing & Cellars, Colorado, United State. Cervecería Granizo, Valparaíso, Chile. Cerveza Mauco, Valparaíso,Chile."],
        año: "2017 / 2024",
    },
    {
        id: "TERRITORIOS DEL CANTO", 
        categoria: "colectivos",
        img: ["./img/7/LUCI2406.jpg"],
        texto: ["Ilustraciones y arte realizadas para las visuales proyectadas en el  de cantoras de pueblos originarios, en el Auditorio Nacional “Ballena Azul” Centro Cultural Kirchner, para el 8M en 2023 titulado “Movemos el mundo”, Buenos Aires, Argentina."],
        año: "2023",
    },
    // {
    //     id: "ADELAS", 
    //     video: [
    //         '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/925116504?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="ADELAS animación basada en obras de Luis Quesada"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
    //     ],
    //     categoria: "colectivos",
    //     texto: "Animación para el corto “Adelas” Dirigido por Paula Domínguez. La animación es a pedido y está basada en grabados del artista Luis Quesada.",
    //     año: "2023",
    // },
    // {
    //     id: "VIDEO-LIBRO DE ARTISTA",
    //     categoria: "colectivos",
    //     video: [
    //         '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/925114695?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Video-Libro de artista- Inés Pacciarini"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
    //     ],
    //     año: "2023",
    // },
    {
        id: "FUGAS, EL ARTE COMO TRINCHERAS",
        categoria: "colectivos",
        video: [
            '<div style="position: relative;"><iframe style="aspect-ratio: 16 / 9; width: 100% !important;" src="https://www.youtube.com/embed/8VNd25w8HUk?si=3xyvtM11uXGYNQ4o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>',
        ],
        texto: "Acción urgente, México, arte, ilustraciones, diseño y animaciones para serie de 5 capítulos de Caro Reynoso y Emi Martín, sobre arte y disidencia en América Latina. Otros Mundos Cine.",
        año: "2022",
    },
    // {
    //     id: "SOBERANÍA ALIMENTARIA Y VISIBILIDAD DE LAS MUJERES CAMPESINAS, ARGENTINA",
    //     categoria: "colectivos",
    //     texto: "Campaña gráfica del Ministerio de Cultura Nacional y dirigida por Kekena Corvalán.",
    //     año: "2021",
    // },
    {
        id: "II FESTIVAL DE PERFORMANCE POLÍTICA, CHILE",
        categoria: "colectivos",
        img: ["./img/8/berta 3.jpg"],
        texto: "Ilustración y diseño del afiche “Berta Cáceres”",
        año: "2018",
    },
    {
        id: "MANSA BALLENA",
        categoria: "colectivos",
        video: [
            '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://www.youtube.com/embed/Tmuz-c0eMH4?si=6QNZ6d4qqPCM2cYt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>',
        ],
        link: [
            {
                ref: "Canal de youtube", 
                url: "https://www.youtube.com/@mansaballena"
            },
            {
                ref: "Facebook", 
                url: "https://www.facebook.com/mansa.ballena?locale=es_LA"
            },
        ],
        texto: [
            "MANSA BALLENA, es una colectiva artista multidimensional, transgordillerana!",
            "Argentina y Chile.",
            "Mar del Plata, 11 de octubre de 2015. Editamos este video con urgencia para hacer circular algunas de las imágenes que tomamos, no solo de la represión policial sufrida en la catedral, sino de la fiesta y la marcha de alegría de más de 60mil mujeres unidas en el Encuentro Nacional de Mujeres, Argentina.",
        ],
        año: "2012 / 2015",
    },
];