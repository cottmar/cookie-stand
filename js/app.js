'use strict';

var hoursOpen = ['6am', '7am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var locations = [];
var salmonCookieStores = document.getElementById('locations');

function LocationSeattle(name, minCustomersPerHour, maxCustomersPerHour, averageCookiesPerCustomer, storedAmountofCookies) {
  this.name = name;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  this.totalCookiesPerDay = storedAmountofCookies;
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
    locations.push(this);
  };

  this.render = function() {
    this.calculateNumberOfCookiesPurchasedPerHour();
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = this.name;
    trEl.appendChild(tdEl);
    tdEl = document.createElement('td');
    tdEl.textContent = this.minCustomersPerHour;
    trEl.appendChild(tdEl);
    tdEl = document.createElement('td');
    tdEl.textContent = this.maxCustomersPerHour;
    trEl.appendChild(tdEl);
    tdEl = document.createElement('td');
    tdEl.textContent = this.averageCookiesPerCustomer;
    trEl.appendChild(tdEl);
    for (var i = 0; i < this.amountOfCookiesPurchased.length; i++) {
      tdEl = document.createElement('td');
      tdEl.textContent = this.amountOfCookiesPurchased[i];
      trEl.appendChild(tdEl);
    }
    tdEl = document.createElement('td');
    tdEl.textContent = this.totalCookiesPerDay;
    trEl.appendChild(tdEl);
    salmonCookieStores.appendChild(trEl);
  };
  locations.push(this);
}

function makeHeaderRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = '6';
  trEl.appendChild(thEl);
  thEl = document.createElement('th');
  thEl.textContent = '7';
  trEl.appendChild(thEl);
  thEl = document.createElement('th');
  thEl.textContent = '8';
  trEl.appendChild(thEl);

  salmonCookieStores.appendChild(trEl); //js console can't read property appendChild of null at makeheaderRow
}

// this function works in repl.it for hoursOpen but not for makeStoreRows
function makeStoreRows() {
  for (var i = 0; i < hoursOpen.length; i++) {
    hoursOpen.length[i];
  }
}
makeHeaderRow();
makeStoreRows();

new LocationSeattle('1st and Pine', 23, 65, 6.3, 7);
new LocationSeattle('Seatac', 3, 24, 1.2, 9);
new LocationSeattle('Seattle Center', 11, 38, 3.7, 9);
new LocationSeattle('Captiol Hill', 20, 38, 2.3, 200);
new LocationSeattle('Alki Beach', 2, 16, 4.6, 90);