const Park = function (name, ticketPrice, collectionOfDinosaurs){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collectionOfDinosaurs = collectionOfDinosaurs;
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.collectionOfDinosaurs.push(dinosaur)
};

Park.prototype.removeDinosaur = function (deadDinosaur) {
  this.collectionOfDinosaurs.filter(deadDinosaur)
};

module.exports = Park;
