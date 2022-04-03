var search  = document.querySelector('.weath-container__search')
var city  = document.querySelector('.weath-container__content-title-city')
var country  = document.querySelector('.weath-container__content-title-country')
var time = document.querySelector('.weath-container__content-time')
var value = document.querySelector('.value')
var short = document.querySelector('.weath-container__content-weather p')
var wind = document.querySelector('.weath-container__content-list-one p')
var clound = document.querySelector('.weath-container__content-list-two p')
var skill = document.querySelector('.weath-container__content-list-three p')
var content = document.querySelector('.weath-container__content')
var body = document.querySelector('body')
var nalo = document.querySelector('.weath-container')

function renderApi() {
    var capitalApi = search.value.trim()
    var postApi = `https://api.openweathermap.org/data/2.5/weather?q=${capitalApi}&units=metric&appid=1e0ff0c61167deb8a65e92b9e2a994a5`

    var data = fetch(postApi)
    .then(res => res.json())
    .then (function(data) {
      console.log(data)
      if(data.cod == 200) {
        content.classList.remove('hide')
        city.innerText = data.name
        country.innerText = data.sys.country
        time.innerText = new Date().toLocaleString('vi')
        skill.innerText = data.main.humidity + '%' 
        clound.innerText = data.wind.speed + 'm/s'
        wind.innerText = data.visibility + 'm' 
        short.innerText = data.weather[0].main 
        var temp = Math.floor(data.main.temp)
        value.innerText = temp
        
        body.setAttribute('class','warm')

        if(temp >= 22) {
          body.setAttribute('class','warm')
        }

        if(temp >= 25) {
          body.setAttribute('class','hot')
        }

        if(temp <= 20) {
          body.setAttribute('class','cold')
        }

      }else { 
        content.classList.add('hide')
      }
    })
     
}


search.onkeypress = function(e) {
    if(e.code == 'Enter') {
        renderApi()
    }
}