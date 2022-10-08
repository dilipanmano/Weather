class Storage {
    constructor(city, country) {
        this.city = city;
        this.country = country;
        this.defaultCity = "New Delhi";
        this.defaultCountry = "IN";
    }

    getLocationData() {
        if (localStorage.getItem("city") === null) {
            this.city = this.defaultCity;
        } else {
            this.city = localStorage.getItem("city");
        }

        if (localStorage.getItem("country") === null) {
            this.country = this.defaultCity;
        } else {
            this.country = localStorage.getItem("country");
        }
        return {
            city: this.city,
            country: this.country,
        };
    }

    setLocationData(city, country) {
        localStorage.setItem("city", city);
        localStorage.setItem("country", country);
    }
}
