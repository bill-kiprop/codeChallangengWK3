const BASE_URL = 'http://localhost:3000/films'

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
    .then((res) => res.json())
    .then((movies) => {
    movies.forEach(movie => { 
        showMovie(movie)
        
      
    });
    })
    .catch((err) => console.log(err))

    
}

function navigation(){
const navig = document.querySelector('#heading')
const parentDiv = document.createElement('div')
parentDiv.classList.add('item')

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
subTtl.innerText = 'BUT MOVIES HERE'


head.append(icon, titleText, subTtl)

parentDiv.appendChild(head)
navig.appendChild(parentDiv)
}

function showMovie(movie){
   

    // const sideMenu = document.querySelector('#columns')
    // sideMenu.className = 'ui centered grid'

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
        

    }
    movieList.addEventListener("click", () => {
        generatePosters()
    })
}


