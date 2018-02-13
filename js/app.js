var hoursOpen = ['6am', '7am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// var locationsSeattle = ['1st and Pike', 'Seatac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];

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
    }
  },
  render: function() {
    var ulEl = document.getElementById('1st and Pike');
    for (var i = 0; i < this.amountOfCookiesPurchased.length; i++) {
      // create an element
      var liEl = document.createElement('li');
      // give it content
      liEl.textContent = hoursOpen[i] + ': ' + this.amountOfCookiesPurchased[i];
      // append it to the DOM
      // parent.appendChild(child)
      ulEl.appendChild(liEl);  
    }
  }
};

pikePlace.randomNumCustomers();
pikePlace.calculatedNumberOfCookiesPurchasedPerHour();
pikePlace.render();