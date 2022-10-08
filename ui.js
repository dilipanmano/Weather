class UI {
    constructor() {
        this.location = document.getElementById("w-location");
        this.desc = document.getElementById("w-desc");
        this.string = document.getElementById("w-string");
        this.icon = document.getElementById("w-icon");
        this.feels = document.getElementById("w-feels-like");
        this.humidity = document.getElementById("w-humidity");
        this.pressure = document.getElementById("w-pressure");
        this.wind = document.getElementById("w-wind-speed");
    }

    paint(weather) {
        this.location.textContent = weather.name + ", " + weather.sys.country;
        this.desc.textContent = weather.weather[0].main;
        this.string.textContent = weather.main.temp + "°C";
        this.icon.setAttribute(
            "src",
            `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
        );
        this.feels.textContent = `Feels Like: ${weather.main.feels_like}`;
        this.humidity.textContent = `Humidity: ${weather.main.humidity}`;
        this.pressure.textContent = `Pressure: ${weather.main.pressure}`;
        this.wind.textContent = `Wind Speed: ${weather.wind.speed}`;
    }
}
