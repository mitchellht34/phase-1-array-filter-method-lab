// Code your solution here
function findMatching(drivers, name){
    const matching = drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
    return matching;
}

function fuzzyMatch(drivers, letters){
    const matching = drivers.filter(driver => driver.indexOf(letters) === 0);
    return matching;
}

function matchName(drivers, name){
    const matching = drivers.filter(driver => driver.name === name);
    return matching;
}