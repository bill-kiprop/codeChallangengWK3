fetch('http://localhost:3000/films',{
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then((res) => res.json())
    .then((movies) => {
    console.log(movies.length)
    })
