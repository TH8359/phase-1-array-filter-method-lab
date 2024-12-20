function findMatching(drivers, driver){
    let counter = 0
    let names = []
    while (counter < drivers.length){
        if (drivers[counter] === driver || drivers[counter] === driver.toLowerCase()){
            names.push(drivers[counter])
        }
        counter++
}
return names
}

findMatching.filter(drivers, driver) 

function fuzzyMatch(drivers, driver){
let names = []
let counter = 0;
while (counter < drivers.length){
    if (drivers[counter].slice(0, driver.length) === driver){
        names.push(drivers[counter])
    }
    counter++
}

return names
}

fuzzyMatch.filter(drivers, driver)

function matchName(drivers, driver){
let names = []
let counter = 0
while (counter < drivers.length){
    if (drivers[counter].name === driver){
        names.push(drivers[counter])
    }
    counter++
}
    return names
}

matchName.filter(drivers, driver)

