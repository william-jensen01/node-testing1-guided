class Car {
  constructor(make, model) {
    this.make = make
    this.model = model
    this.odometer = 0
  }
  drive(distance) {
    this.odometer += distance
    return `${distance} km driven!`
  }
  driveAsync(distance) {
    // promises?
  }
}

module.exports = Car
