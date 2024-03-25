// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
// const result = drivers.filter(findMatching("Bobby"));
function findMatching(drivers, name){
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}
function fuzzyMatch(drivers, letters){
    return drivers.filter(driver => driver.startsWith(letters));
}

function matchName(drivers, name){
    return drivers.filter(match => match.name === name);
    // for(const item of drivers){
    //     if (item.name === name){
    //         return true;
    //     }`
    // }

    // return false;
}