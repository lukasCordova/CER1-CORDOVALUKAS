//CUENTA REGRESIVA

const elementoCuentaRegresiva = document.getElementById("cuentaRegresiva");
const fechaEvento = new Date("2025-09-13T22:00:00").getTime();
function actualizaCuentaRegresiva() {
    const ahora = new Date().getTime();
    const distancia = fechaEvento - ahora;

    if (distancia < 0) {
    elementoCuentaRegresiva.innerHTML = "¡El evento ha comenzado!";
    clearInterval(contador);
    return;
    } //para que termine cuando ya ocurrió

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    elementoCuentaRegresiva.innerHTML =
    `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}
const contador = setInterval(actualizaCuentaRegresiva, 1000);
actualizaCuentaRegresiva();

//CARDS DE EVENTOS
//- DATOS DE LOS EVENTOS
const eventosObj = [
    {   titulo:"Matiah Chinaski y Dj Perez",
        fecha:"13-09-2025",
        hora:"22:00",
        lugar:"Teatro Aula Magna (casa central)",
        imagen:"https://elsureno.cl/wp-content/uploads/2025/01/matiah-chinaski-y-dj-perez.jpg",
        valor:18000
    },
    {   titulo:"Feria de proyecto de IA",
        fecha:"24-10-2025",
        hora:"16:00",
        lugar:"Patio central usm jmc",
        imagen:"https://enlinea.santotomas.cl/web/wp-content/uploads/sites/2/2019/09/imagen_blog-1100x605-744x465.png",
        valor: 3000
    },
    {   titulo:"Taller lenguaje de señas",
        fecha:"17-09-2025",
        hora:"15:00",
        lugar:"Sala de ocio usm jmc",
        imagen:"https://www.diarioconstitucional.cl/wp-content/uploads/2023/01/lenguasenas-uchile.cl_.jpg",
        valor: 5000
    },
    {   titulo:"Taller de composición musical",
        fecha:"09-09-2025",
        hora:"19:30",
        lugar:"Sala de música usm jmc",
        imagen:"https://crehana-blog.imgix.net/media/filer_public/95/4d/954ddf5d-83dc-466c-b3e3-f91c4bd04151/composicion-musical.jpg?auto=format&q=50",
        valor:6000
    }]
const filaEventos = document.getElementById("fila-eventos");
function agregarCard(evento){
    const columna = document.createElement("div")
    columna.className = "col-12 col-md-6 col-lg-4 mb-3";
    columna.innerHTML = `
        <div class="card card-evento h-100 align-items-center tema-t p-5">
        <img src=${evento.imagen} class="card-img-top">
            <div class="card-body d-flex flex-column justify-content-end">
                
                <h5 class="card-title mb-1 fs-3"><strong>${evento.titulo}</strong></h5>
                <p class="mb-1 fs-5 ">
                    <strong>Fecha:</strong> ${evento.fecha} * <strong>Hora:</strong> ${evento.hora}
                </p>
                <p class="mb-1 fs-5"><strong>Lugar:</strong> ${evento.lugar}</p>
                <div class="mt-1 d-flex justify-content-between">
                    <p><strong>Valor:</strong> ${evento.valor}</p>
                    <a href="#" class="btn btn-sm"><span class="tema-p fs-3 p-1 borde-claro">Ver</span></a>
                </div>
                    
            </div>
        </div>
        `
    filaEventos.appendChild(columna);
    
}
eventosObj.forEach(evento => agregarCard(evento))


//COMENTARIOS
//-COMENTARIOS RECIENTES
let comentarios = [
    {
        nombre:"PedroCopec",
        mensaje: "Primera en serviciooo",
        fecha: "8/9/2025",
        hora: "22:35:10"
    },
    {
        nombre:"Sofiausm",
        mensaje: "Se cae el aulaaa",
        fecha: "9/9/2025",
        hora: "4:29:09"
    },
    {
        nombre:"Raperomaldito",
        mensaje: "wena matiahhh",
        fecha: "9/9/2025",
        hora: "4:20:00"
    },
    {
        nombre:"Raperobendito",
        mensaje: "wena dj pereee",
        fecha: "9/9/2025",
        hora: "5:00:00"
    },
    {
        nombre:"Piñera",
        mensaje: "cuando taller acuático",
        fecha: "9/9/2025",
        hora: "6:56:56"
    },
    {
        nombre:"Xurrasquin",
        mensaje: "soy de conceeee cuando en conce",
        fecha: "9/9/2025",
        hora: "8:00:10"
    },
    {
        nombre:"elMesias",
        mensaje: "acompañadme hermanos",
        fecha: "1/1/0",
        hora: "0:00:01"
    }


];
function agregarComentario(nombreN, mensajeN, fechaN, horaN){
    comentarios.unshift({nombre: nombreN, mensaje: mensajeN, fecha: fechaN, hora:horaN});
    mostrarComentarios();

}
function mostrarComentarios(){
    const listaComentarios =  document.getElementById("lista-comentarios");
    listaComentarios.innerHTML = "";
    for (let i = 0; i < comentarios.length; i++) {
        if(i === 10){
            break;
        }
        let c = comentarios[i];
        console.log(c);
        
        let li = document.createElement("li");
        li.className = "list-group-item container-fluid d-flex justify-content-between";
        
        let divComentario = document.createElement("div");
        divComentario.innerHTML = `<strong>${c.nombre}:</strong> ${c.mensaje}`;
        let divFechaHora = document.createElement("div");
        divFechaHora.innerHTML = `<span>F ${c.fecha} H ${c.hora}</span>`;
        li.appendChild(divComentario);
        li.appendChild(divFechaHora);
        
        listaComentarios.appendChild(li);
    }

}
const form = document.getElementById('form-comentario');
function procesarComentario(event){
    event.preventDefault();

    const nombre = document.getElementById("nombre-form").value;
    const mensaje = document.getElementById("mensaje-form").value;
    const ahora = new Date();
    const fecha = ahora.toLocaleDateString();
    const hora = ahora.toLocaleTimeString();    

    agregarComentario(nombre, mensaje, fecha, hora);

    form.reset(); 
}
mostrarComentarios();
form.addEventListener("submit", procesarComentario)




