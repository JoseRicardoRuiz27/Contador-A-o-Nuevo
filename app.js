// const $ = selector => document.getElementById(selector)

// const dias = $(`dias`)
// const hora = $(`hora`)
// const min = $(`min`)
// const seg = $(`segundo`)

// const añoNuevo = '1 Jan 2025';

// function contador(){
//     const diaDeAñoNuevo = new Date(añoNuevo);
//     const diaActual = new Date()

//     const totalSegundos = (diaDeAñoNuevo - diaActual) / 1000;
    
//     const fechaDias = Math.floor(totalSegundos / 3600 / 24);
//     const fechaHoras = Math.floor(totalSegundos / 3600) % 24;
//     const fechaMin = Math.floor(totalSegundos / 60) % 60;
//     const fechaSeg = Math.floor(totalSegundos % 60);

//     dias.innerHTML = fechaDias
//     hora.innerHTML = fechaHoras
//     min.innerHTML = fechaMin
//     seg.innerHTML = fechaSeg
// }

// contador()


const tiempoReversa = fechaLimite =>{
    const ahora = new Date(),
        añoNuevo = (new Date(fechaLimite) - ahora + 1000) / 1000;
        tiempoDia = Math.floor(añoNuevo / (3600 * 24))
        timepoHora = Math.floor(añoNuevo / 3600 % 24)
        tiempoMin = Math.floor(añoNuevo / 60 % 60)
        timepoSeg = Math.floor(añoNuevo % 60)
        return{
            añoNuevo,
            tiempoDia,
            timepoHora,
            tiempoMin,
            timepoSeg
        }
 }
const contadorReverso = (fechaLimite, todou, mensajeFinal) =>{
    const elemento = document.getElementById(todou)

    const tiempoActualizado = setInterval(() =>{
        const tiempo = tiempoReversa(fechaLimite)
        elemento.innerHTML = `${tiempo.tiempoDia}D <br> ${tiempo.timepoHora}H <br> ${tiempo.tiempoMin}M <br> ${tiempo.timepoSeg}S`

        if (tiempo.añoNuevo <= 1){
            clearInterval(tiempoActualizado);
            elemento.innerHTML = mensajeFinal;
        }

    }, 1000)
}

contadorReverso(`1 Jan 2025 00:00:00  GMT-4`, `todou`, `Feliz Año Nuevo`)