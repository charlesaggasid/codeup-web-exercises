(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    var theSun = planets.unshift('The Sun')
    console.log('Adding "The Sun" to the beginning of the planets array.');
    console.log(planets);

    var pluto = planets.push('Pluto')
    console.log('Adding "Pluto" to the end of the planets array.');
    console.log(planets);

    var removeSun = planets.shift('Removing "The Sun"')
    console.log('Removing "The Sun" from the beginning of the planets array.');
    console.log(planets);

    var removePluto = planets.pop('Removing Pluto')
    console.log('Removing "Pluto" from the end of the planets array.');
    console.log(planets);

    var indexEarth = planets.indexOf('Earth')
    console.log('Finding and logging the index of "Earth" in the planets array.');
    console.log(indexEarth);

    console.log("Reversing the order of the planets array.");
    console.log(planets.reverse());

    console.log("Sorting the planets array.");
    console.log(planets.sort());


    console.log(planets)

})();