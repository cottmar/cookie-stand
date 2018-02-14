'use strict';

var hoursOpen = ['6am', '7am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var locations = [];

function LocationLocationLocation(name, id, minCustomersPerHour, maxCustomersPerHour, averageCookiesPerCustomer) {
  this.name = name;
  this.id = id;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  this.totalCookiesPerDay = 0;
  this.randomNumCustomers = function () {
    return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour+ 1)) + this.minCustomersPerHour;
  };
  this.amountOfCookiesPurchased = [];
  this.calculateNumberOfCookiesPurchasedPerHour = function () {
    for (var i = 0; i < hoursOpen.length; i++) {
      var storedAmountofCookies = this.averageCookiesPerCustomer * this.randomNumCustomers();
      this.amountOfCookiesPurchased.push(Math.round(storedAmountofCookies));
      this.totalCookiesPerDay += this.amountOfCookiesPurchased[i];
    }
  };

  this.render = function() {
    this.calculateNumberOfCookiesPurchasedPerHour();
    var ulEl = document.getElementById(id);
    for (var i = 0; i < this.amountOfCookiesPurchased.length; i++) {
      // create an element
      var liEl = document.createElement('li');
      // give it content
      liEl.textContent = hoursOpen[i] + ': ' + this.amountOfCookiesPurchased[i] + ' cookies';
      // append it to the DOM
      // parent.appendChild(child)
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookiesPerDay + ' cookies';
    ulEl.appendChild(liEl);

  };
  locations.push(this);
}

new LocationLocationLocation('1st and Pine', '1st and Pike', 23, 65, 6.3);
new LocationLocationLocation('Seatac', 'seatac', 23, 65, 6.3);
new LocationLocationLocation('Seattle Center', 'seattleCenter', 23, 65, 6.3);
new LocationLocationLocation('Captiol Hill', 'capitolHill', 23, 65, 6.3);
new LocationLocationLocation('Alki Beach', 'alkiBeach', 23, 65, 6.3);
