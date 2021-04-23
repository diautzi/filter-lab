// Code your solution here
function findMatching(drivers, name) {
<<<<<<< HEAD
  return drivers.filter(driverName => driverName.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(drivers, name) {
  let nameLength = name.length;
  return drivers.filter(driverName => driverName.slice(0, nameLength) === name)
}

function matchName(drivers, name) {
=======
  return arr.filter(driverName => driverName.toLowerCase() === name.toLowerCase())
}

function findMatching(drivers, name) {
  let nameLength = mane.length;
  return drivers.filter(driverName => driverName.slice(0, nameLength) === name)
}

function findMatching(drivers, name) {
>>>>>>> 4e9c746c7fdd0741167541431a1fc30962511788
  return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase())
}