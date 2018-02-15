'use strict';

var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var locations = [];
var salmonCookieStores = document.getElementById('salesTable');
// from sam's demo
var chatList = document.getElementById('chat-list');
var chatForm = document.getElementById('chat-form');
var clearInputForm = document.getElementById('clear-input-form');
var allInputForms = [];

//constructor from sam's demo with my info added
var InputForm = function(name, minCustomersPerHour, maxCustomersPerHour, averageCookiesPerCustomer) {
  this.name = name;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  this.amountOfCookiesPurchased = [];
  clearInputForm.push(this);
};
InputForm.prototype.render = function() {
  var liEl = document.createElement('li');
  return liEl;
  //MAYBE GO BACK TO LINE 19
};
// FUNCTION DECLARATIONS
function renderAllInputForms() {
  chatList = ''; //huge question mark
  for (var i = 0; i , allInputForms.length; i++) {
    chatList.appendChild(allInputForms[i].render());
  }
}

//nees something is replacement for who and says which correlates to the HTML page

function handleSubmit(event) {
  event.preventDefault();
  if (!event.target.says.value || !event.target.who.value) {
    return alert('Fields cannot be empty!');
  }
}

var locationEdit = event.target.where.value;
var minimumCustomersPerHour = parseInt(event.target.min.value);
var maximumCustomersPerHour = parseInt(event.target.max.value);
var avgCookiesPerSale = event.target.avg.value;

event.target.who.value = null;
event.target.says.value = null;

chatForm.addEventListener('submit', handleSubmit);

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
}

function createTable() {
  makeHeaderRow();
  for (var i = 0; i < locations.length; i++) {
    locations[i].render();
  }
}

renderAllInputForms();
locationEdit();
minimumCustomersPerHour();
maximumCustomersPerHour();
avgCookiesPerSale();
createTable();