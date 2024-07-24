const findTheOldest = people => people.map(person => ({name: person.name, yearsLived: (person.yearOfDeath ? person.yearOfDeath : new Date().getFullYear()) - person.yearOfBirth}))
    .sort((a, b) => b.yearsLived - a.yearsLived)[0];

// Do not edit below this line
module.exports = findTheOldest;
