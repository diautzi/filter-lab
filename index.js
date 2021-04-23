// Code your solution here
function findMatching(drivers, name) {
  return drivers.filter(driverName => driverName.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(drivers, name) {
  let nameLength = name.length;
  return drivers.filter(driverName => driverName.slice(0, nameLength) === name)
}

function matchName(drivers, name) {
  return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase())
}