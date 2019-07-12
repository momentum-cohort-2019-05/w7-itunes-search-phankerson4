let allArtist = []
let searchAPI= ''
let button = document.querySelector('#submit')
let input = document.querySelector('#search')
let output = document.querySelector('#output')

button.addEventListener('click', function () {
    fetch('https://itunes-api-proxy.glitch.me/search?term='+input.value)
      .then(function (response) {
        return response.json()
      })
      .then(function(data){
          console.log(data)
      })
    })