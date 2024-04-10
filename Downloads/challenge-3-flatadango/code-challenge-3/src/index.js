// const { type } = require("server/reply")

const BASE_URL = 'http://localhost:3000'

document.addEventListener('DOMContentLoaded', () => {
    fetchmovies()
})

function fetchmovies(){
   navigation()
   
fetch('http://localhost:3000/films',{
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
})
.then((res) => {
   
    return res.json();
})
.then((movies) => {
    movies.forEach(movie => {
        showMovie(movie);
    });
    })
    .catch((err) => console.log(err))

    
}function updatePage(movie){
    fetch(`http://localhost:3000/films`,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(movie)
    })
    .then((res) => {return res.json()})
    .then((movie)=> {
        console.log(movie)
    })
}

function newTicket(movie){
    fetch('http://localhost:3000/films',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(movie.id)
    })
    .then(res => res.json())
    .then(movie =>
        movie.tickets_sold++
            )

}

function navigation(){
const navig = document.querySelector('#heading')
const parentDiv = document.createElement('div')
parentDiv.className = 'item'

const head = document.createElement('h2')
head.className = 'ui header'

const icon = document.createElement('i')
icon.className = 'orange ticket icon'

const titleText = document.createElement('div')
titleText.className = 'content'
titleText.innerText = 'FLATIDINGO'

const subTtl = document.createElement('div')
subTtl.id = 'subtitle'
subTtl.className = 'sub header'
subTtl.innerText = 'BUY MOVIES HERE'


head.append(icon, titleText, subTtl)

parentDiv.appendChild(head)
navig.appendChild(parentDiv)
}

function showMovie(movie){
   

   
    const colmns = document.querySelector('#columns')
    colmns.className = 'four wide column'

    const lContainer = document.createElement('div')
    lContainer.className = 'list-container'

    const divdList = document.createElement('ul')
    divdList.className = 'ui divided list'
    divdList.id = 'films'

    const movieList = document.createElement('li')
    movieList.className = 'film item'
    movieList.innerText = movie.title
    
    divdList.append(movieList)
    lContainer.append(divdList)
    colmns.append(lContainer)
   

   
    
    movieList.addEventListener("click", () => {
        generatePosters()
    })
    function generatePosters(){
        const posterDiv = document.querySelector('#imagediv')
        posterDiv.className = 'four wide column'
        const image = document.querySelector('#poster')
        image.src = movie.poster
        image.alt = movie.title
    
        posterDiv.append(image)

        const movieDesc = document.querySelector('#desc')
        movieDesc.className = 'four wide column'

        const crds = document.querySelector('#showing')
        crds.classname = 'ui cards'

        const platform = document.createElement('div')
        platform.className = 'card'

        const smTitle = document.querySelector('#title')
        smTitle.className = 'title'
        smTitle.innerText = movie.title

        const rTime = document.querySelector('#runtime')
        rTime.className = 'meta'
        rTime.innerText = `${movie.runtime} mins`

        const cntnt =document.createElement('div')
        cntnt.className = 'content'

        const descript = document.createElement('div')
        descript.className = 'description'

        const info = document.querySelector('#film-info')
        info.innerText = movie.description

        const sTime = document.querySelector('#showtime')
        sTime.className = 'ui label'
        sTime.innerText = movie.showtime

        const tRem = document.querySelector('#ticket-num')
        tRem.innerText = `${movie.capacity - movie.tickets_sold} remaining tickets`

        const xContent = document.createElement('div')
        xContent.className = 'extra content'

        let purchaseTicket = document.querySelector('#buy-ticket')
        purchaseTicket.className = 'ui orange button'
        purchaseTicket.innerText = 'BUY TICKET'
        purchaseTicket.addEventListener("click", () => {
             updatePage(movie)
            newTicket(movie)
            movie.tickets_sold++
            let slotsRem = movie.capacity - movie.tickets_sold
            tRem.innerText = `${slotsRem} remaining tickets`
          
        })
       
       
    }


     
   
}

            