const storage = new Storage();
const weatherStorage = storage.getLocationData();

const weather = new Weather(weatherStorage.city, weatherStorage.country);
const ui = new UI();

document.getElementById("w-change-btn").addEventListener("click", () => {
    const city = document.getElementById("city").value;
    const country = document.getElementById("country").value;

    weather.changeLocation(city, country);

    storage.setLocationData(city, country);

    getWeather();

    $("#locModal").modal("hide");
});

document.addEventListener("DOMContentLoaded", getWeather);

function getWeather() {
    weather
        .getWeather()
        .then((result) => {
            ui.paint(result);
        })
        .catch((err) => console.log("failed :" + err));
}
