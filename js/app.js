'use strict';

var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var locations = [];
var salmonCookieStores = document.getElementById('salesTable');
var submitForm = document.getElementById('submit-form');

function handleSubmit(event) {
  event.preventDefault();
  if (!event.target.where.value || !event.target.min.value || !event.target.max.value || !event.target.avg.value) {
    return alert('Fields cannot be empty!');
  }
  var locationEdit = event.target.where.value;
  var minimumCustomersPerHour = parseInt(event.target.min.value);
  var maximumCustomersPerHour = parseInt(event.target.max.value);
  var avgCookiesPerSale = parseFloat(event.target.avg.value);
  new LocationSeattle(locationEdit, minimumCustomersPerHour, maximumCustomersPerHour,avgCookiesPerSale);

  event.target.where.value = null;
  event.target.min.value = null;
  event.target.max.value = null;
  event.target.avg.value = null;


  salmonCookieStores.innerHTML = '';
  makeHeaderRow();
  createTable();
  makeFooterRow();
}

submitForm.addEventListener('submit', handleSubmit);

//this was mine
function LocationSeattle(name, minCustomersPerHour, maxCustomersPerHour, averageCookiesPerCustomer) {
  this.name = name;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  this.totalCookiesPerDay = 0;
  this.amountOfCookiesPurchased = [];
  locations.push(this);
}

new LocationSeattle('1st and Pine', 23, 65, 6.3);
new LocationSeattle('Seatac', 3, 24, 1.2);
new LocationSeattle('Seattle Center', 11, 38, 3.7);
new LocationSeattle('Captiol Hill', 20, 38, 2.3);
new LocationSeattle('Alki Beach', 2, 16, 4.6);

LocationSeattle.prototype.randomNumCustomers = function () {
  return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour+ 1)) + this.minCustomersPerHour;
};

LocationSeattle.prototype.calculateNumberOfCookiesPurchasedPerHour = function () {
  this.totalCookiesPerDay = 0;
  for (var i = 0; i < hoursOpen.length; i++) {
    var storedAmountofCookies = this.averageCookiesPerCustomer * this.randomNumCustomers();
    this.amountOfCookiesPurchased.push(Math.round(storedAmountofCookies));
    this.totalCookiesPerDay += this.amountOfCookiesPurchased[i];
  }
};

LocationSeattle.prototype.render = function () {
  this.calculateNumberOfCookiesPurchasedPerHour();
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);
  for (var i = 0; i < hoursOpen.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.amountOfCookiesPurchased[i];
    trEl.appendChild(tdEl);
  }
  var thEl = document.createElement('th');
  thEl.textContent = this.totalCookiesPerDay;
  trEl.appendChild(thEl);

  salmonCookieStores.appendChild(trEl);
};

function makeHeaderRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Location';
  trEl.appendChild(thEl);
  for (var i = 0; i < hoursOpen.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hoursOpen[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Total';
  trEl.appendChild(thEl);
  salmonCookieStores.appendChild(trEl);
}

function createTable() {
  for (var i = 0; i < locations.length; i++) {
    locations[i].render();
  }
}

function makeFooterRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  var grandCookieTotal = 0;
  thEl.textContent = 'Totals';
  trEl.appendChild(thEl);
  for (var i = 0; i < hoursOpen.length; i++) {
    var cookieTotal = 0;
    for (var j = 0; j < locations.length; j++) {
      cookieTotal += locations[j].amountOfCookiesPurchased[i];
    }
    grandCookieTotal += cookieTotal;
    thEl = document.createElement('th');
    thEl.textContent = cookieTotal;
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = grandCookieTotal;
  trEl.appendChild(thEl);

  salmonCookieStores.appendChild(trEl);
}

makeHeaderRow();
createTable();
makeFooterRow();