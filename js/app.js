'use strict';

var hoursOpen = ['6am', '7am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var pikePlace = {
  name: '1st and Pike',
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  averageCookiesPerCustomer: 6.3,
  randomNumCustomers: function () {
    return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour+ 1)) + this.minCustomersPerHour;
  },
  amountOfCookiesPurchased: [],
  calculatedNumberOfCookiesPurchasedPerHour: function () {
    for (var i = 0; i < hoursOpen.length; i++) {
      var storedAmountofCookies = this.averageCookiesPerCustomer * this.randomNumCustomers();
      this.amountOfCookiesPurchased.push(Math.round(storedAmountofCookies));
      this.totalCookiesPerDay += this.amountOfCookiesPurchased[i];
    }
  },
  totalCookiesPerDay: 0,
  render: function() {
    var ulEl = document.getElementById('1st and Pike');
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
  }
};

var seatac = {
  name: 'seatac',
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  averageCookiesPerCustomer: 6.3,
  randomNumCustomers: function () {
    return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour+ 1)) + this.minCustomersPerHour;
  },
  amountOfCookiesPurchased: [],
  calculatedNumberOfCookiesPurchasedPerHour: function () {
    for (var i = 0; i < hoursOpen.length; i++) {
      var storedAmountofCookies = this.averageCookiesPerCustomer * this.randomNumCustomers();
      this.amountOfCookiesPurchased.push(Math.round(storedAmountofCookies));
      this.totalCookiesPerDay += this.amountOfCookiesPurchased[i];
    }
  },

  totalCookiesPerDay: 0,
  render: function() {
    var ulEl = document.getElementById('seatac');
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
  }
};

var seattleCenter = {
  name: 'seattleCenter',
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  averageCookiesPerCustomer: 6.3,
  randomNumCustomers: function () {
    return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour+ 1)) + this.minCustomersPerHour;
  },
  amountOfCookiesPurchased: [],
  calculatedNumberOfCookiesPurchasedPerHour: function () {
    for (var i = 0; i < hoursOpen.length; i++) {
      var storedAmountofCookies = this.averageCookiesPerCustomer * this.randomNumCustomers();
      this.amountOfCookiesPurchased.push(Math.round(storedAmountofCookies));
      this.totalCookiesPerDay += this.amountOfCookiesPurchased[i];
    }
  },
  totalCookiesPerDay: 0,
  render: function() {
    var ulEl = document.getElementById('seattleCenter');
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
  }
};

var capitolHill = {
  name: 'capitolHill',
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  averageCookiesPerCustomer: 6.3,
  randomNumCustomers: function () {
    return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour+ 1)) + this.minCustomersPerHour;
  },
  amountOfCookiesPurchased: [],
  calculatedNumberOfCookiesPurchasedPerHour: function () {
    for (var i = 0; i < hoursOpen.length; i++) {
      var storedAmountofCookies = this.averageCookiesPerCustomer * this.randomNumCustomers();
      this.amountOfCookiesPurchased.push(Math.round(storedAmountofCookies));
      this.totalCookiesPerDay += this.amountOfCookiesPurchased[i];
    }
  },
  totalCookiesPerDay: 0,
  render: function() {
    var ulEl = document.getElementById('capitolHill');
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
  }
};

var alkiBeach = {
  name: 'alkiBeach',
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  averageCookiesPerCustomer: 6.3,
  randomNumCustomers: function () {
    return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour+ 1)) + this.minCustomersPerHour;
  },
  amountOfCookiesPurchased: [],
  calculatedNumberOfCookiesPurchasedPerHour: function () {
    for (var i = 0; i < hoursOpen.length; i++) {
      var storedAmountofCookies = this.averageCookiesPerCustomer * this.randomNumCustomers();
      this.amountOfCookiesPurchased.push(Math.round(storedAmountofCookies));
      this.totalCookiesPerDay += this.amountOfCookiesPurchased[i];
    }
  },
  totalCookiesPerDay: 0,
  render: function() {
    var ulEl = document.getElementById('alkiBeach');
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
  }
};

pikePlace.randomNumCustomers();
pikePlace.calculatedNumberOfCookiesPurchasedPerHour();
pikePlace.render();
seatac.randomNumCustomers();
seatac.calculatedNumberOfCookiesPurchasedPerHour();
seatac.render();
seattleCenter.randomNumCustomers();
seattleCenter.calculatedNumberOfCookiesPurchasedPerHour();
seattleCenter.render();
capitolHill.randomNumCustomers();
capitolHill.calculatedNumberOfCookiesPurchasedPerHour();
capitolHill.render();
alkiBeach.randomNumCustomers();
alkiBeach.calculatedNumberOfCookiesPurchasedPerHour();
alkiBeach.render();