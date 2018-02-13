'use strict';

var hoursOpen = ['6am', '7am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var locations = [];

function Location(name, minCustomersPerHour, maxCustomersPerHour, averageCookiesPerCustomer) {
  this.name = name;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  this.randomNumCustomers = function () {
    return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour+ 1)) + this.minCustomersPerHour;
  };
  this.amountOfCookiesPurchased = [];
  this.calculateNumberOfCookiesPurchasedPerHour = function () {
    this.totalCookiesPerDay = 0;
    for (var i = 0; i < hoursOpen.length; i++) {
      var storedAmountofCookies = this.averageCookiesPerCustomer * this.randomNumCustomers();
      this.amountOfCookiesPurchased.push(Math.round(storedAmountofCookies));
      this.totalCookiesPerDay += this.amountOfCookiesPurchased[i];
    }
  };
  this.logMe = function() {
    console.log(this.name)
  }
  locations.push(this);
}

new Location('1st', 23, 65, 6.3);
new Location('Seatac', 23, 65, 6.3);
new Location('Seattle Center', 23, 65, 6.3);
new Location('Captiol Hill', 23, 65, 6.3);
new Location('Alki Beach', 23, 65, 6.3);


//   render = function() {
//     var ulEl = document.getElementById('1st and Pike');
//     for (var i = 0; i < this.amountOfCookiesPurchased.length; i++) {
//       // create an element
//       var liEl = document.createElement('li');
//       // give it content
//       liEl.textContent = hoursOpen[i] + ': ' + this.amountOfCookiesPurchased[i] + ' cookies';
//       // append it to the DOM
//       // parent.appendChild(child)
//       ulEl.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + this.totalCookiesPerDay + ' cookies';
//     ulEl.appendChild(liEl);
//       }
//     }
//   }

