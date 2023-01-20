// MODO OSCURO
const btnSwitch = document.querySelector('#switch')

btnSwitch.addEventListener('click',()=>{
    document.body.classList.toggle('dark')
    btnSwitch.classList.toggle('active')
})
// CARRUSEL
let swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });

//   PrebasApi



const cards=(array)=>{
    const nodos = array.reduce((acc,element)=>{
        return acc + `
        <div class="card">
            <div class="container-img">
                <img src=${element.img} alt=${element.nombre}
            </div>
            <h2>${element.name}</h2>
            <h3>${element.precio}</h3>
         </div>
         `
    },"")
    document.querySelector(".contenedor").innerHTML = nodos
}

const personajes= async () => {
    const respuesta = await fetch("https://63c8a84f075b3f3a91e494d5.mockapi.io/api/accesorios",{
        method: "GET"
    })
    const data = await respuesta.json()
    // console.log(data)
    cards(data.results)
}
  
personajes()
