
let button = document.querySelector('#submit')
let input = document.querySelector('#search')
let output = document.querySelector('#output')

button.addEventListener('click', (e) =>{
    fetch('https://itunes-api-proxy.glitch.me/search?term='+input.value)
    .then(data => data.json())
    .then(json => {
        console.log(json)
        let searchAPI= ''

     

          json.results.forEach(song => {
            searchAPI += `
             <div class = "col s4 m4 l4>
            <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
              <img src="${song.artworkUrl100}">
            </div>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">${song.trackCensoredName}<i class="material-icons right">more_vert</i></span>
              <p>${song.artistname}</p>
            </div>
            <div class="play-song">
            <audio controls src="${song.previewUrl}"></audio>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
              <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
            </div>
            </div>
         
         
               `
               
          })

          
          output.innerHTML = searchAPI
        })
        
        .catch(error => console.log(error))
      })
    
    
    
    
