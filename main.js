let inputValue = document.querySelector(".inputValue");
let button = document.querySelector(".button");
let cityName = document.querySelector(".name");
let description = document.querySelector(".desc");
let temp = document.querySelector(".temp");

button.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=3707ac5d9ac9e0fa74834751c282d165')
    .then(response => response.json())
    .then(data => {
    let tempValue = data['main']['temp'];
    let nameValue = data['name'];
    let descValue = data['weather'][0]['description'];

    cityName.innerHTML = nameValue;
    description.innerHTML = "Desc - "+descValue;
    temp.innerHTML = "Temp - "+(tempValue - 273.15).toFixed(1);
    inputValue.value ="";
})

.catch(() => alert("Wrong"));
})