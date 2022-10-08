class Weather {
    constructor(city, country) {
        this.city = city;
        this.country = country;
        this.api = localStorage.getItem("API");
    }

    async getWeather() {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.api}&units=metric`
        );

        const responseData = await response.json();

        return responseData;
    }

    changeLocation(city, country) {
        this.city = city;
        this.country = country;
    }
}
