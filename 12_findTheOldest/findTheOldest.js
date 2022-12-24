const findTheOldest = function(people) {
    return oldest = people.reduce((max, person) =>{
        const maxDeath = max.yearOfDeath ? max.yearOfDeath : (new Date()).getFullYear();
        const maxLife = maxDeath - max.yearOfBirth;
        const deathYear = person.yearOfDeath ? person.yearOfDeath : (new Date()).getFullYear();
        const personLife = deathYear - person.yearOfBirth;
        if(personLife > maxLife){
            max = person;
        }
        return max;
    }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
