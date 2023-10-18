const data = [
    {
        name: 'pawel',
        city: 'krakow',
        age: 38,
        hobbies: ['js', 'python', 'drugs']
    },
    {
        name: 'pawel',
        city: 'Wroclaw',
        age: 37,
        hobbies: ['js', 'drugs', 'eat']
    },
    {
        name: 'pawel',
        city: 'chelm',
        age: 24,
        hobbies: ['tennis', 'sleep', 'gym']
    },
    {
        name: "iza",
        city: "warsaw",
        age: 28,
        hobbies: ["learning languages", "traveling", "js"]
    },
    {
        name: 'marzena',
        city: 'warsaw',
        age: 31,
        hobbies: ["js", "books", "travelling"],
    },
    {
        name: 'adam',
        city: 'pisz',
        age: 19,
        hobbies: ['guitar', 'gym', 'html']
    },
    {
        name: "kamila",
        city: "gdynia",
        age: 37,
        hobbies: ["diving", "eating", "js"]
    },
    {
        name: 'tomek',
        city: 'zabrze',
        age: 40,
        hobbies: ['paintball']
    },
    {
        name: 'dawid',
        city: 'tarnów',
        age: 23,
        hobbies: ['js', 'beer', 'css']
    },
    {
        name: "olga",
        city: "warszawa",
        age: 34,
        hobbies: ["js", "cats", "swimming"]
    },
    {
        name: 'kasia',
        city: 'warszawa',
        age: 29,
        hobbies: ['programowanie', 'sport']
    },
    {
        name: 'dominika',
        city: 'warszawa',
        age: 40,
        hobbies: ['cycling', 'dreaming', 'car driving']
    }
]

// console.log(data.length);

// policz średnią wieku

function calculateAvgAge(people) {
    let sum = 0;

    // for (let i = 0; i < people.length; i++) {
    //     sum += people[i].age
    // }

    for (const person of people) {
        sum += person.age;
    }

    return sum / people.length;
}

function calculateAvgAge2(people) {
    const ages = people.map((person) => person.age);
    return ages.reduce((acc, age) => acc + age) / people.length
}

const cb = (acc, person) => acc + person.age;
const initial = 0;
const calculateAvgAge3 = (people) => people.reduce(cb, initial) / people.length;

// const result = calculateAvgAge3(data);
// console.log(result);



// policz średnią wieku ludzi z warszawy

function avgAgeWarsaw(items) {
    let sum = 0;
    let counter = 0;

    for (const item of items) {
        if (["warszawa", "warsaw"].includes(item.city.toLowerCase())) {
            sum += item.age;
            counter++;
        }
    }

    return sum / counter;
}

const avgAgeWarsaw2 = (items) => {
    // filtrowanie (usuwanie niepotrzebnych)
    const warsawItems = items.filter((item) => ["warszawa", "warsaw"].includes(item.city.toLowerCase()));
    // transformacje danych
    const ages = warsawItems.map((item) => item.age);
    // agregacja (sumowanie)
    return ages.reduce((acc, age) => acc + age) / ages.length;
}

const avgAgeWarsaw3 = (items) => {
    const ages = items
        .filter((item) => ["warszawa", "warsaw"].includes(item.city.toLowerCase()))
        .map((item) => item.age)

    return ages.reduce((acc, age) => acc + age) / ages.length;
}


// nie potrzebnie robiony 2x filter, kosztowne i nieczytelne
const avgAgeWarsaw4 = (items) => items
    .filter((item) => ["warszawa", "warsaw"].includes(item.city.toLowerCase()))
    .map((item) => item.age)
    .reduce((acc, age) => acc + age) / items.filter((item) => ["warszawa", "warsaw"].includes(item.city.toLowerCase()));


// const r = avgAgeWarsaw3(data);
// console.log(r);

// czy wszyscy kochają js


function isAllLoveJs(elements) {

    for (let i = 0; i < elements.length; i++) {
        if (!elements[i].hobbies.includes('js')) {
            return false;
        }
    }

    return true;

}

const isAllLoveJs2 = (elements) => elements.every((element) => element.hobbies.includes('js'))

function isAllLoveJs3(elements) {
    return elements.every((element) => element.hobbies.includes('js'))
}


// const res = isAllLoveJs2(data);
// console.log(res);

// sprawdź, czy ktokolwiek kocha python

function isAnybodyLovePython(items) {
    for (let i = 0; i < items.length; i++) {
        if (items[i].hobbies.includes('python')) {
            return true;
        }
    }

    return false;
}

const isAnybodyLovePython2 = (elements) => elements.some((element) => element.hobbies.includes('python'))


// function isAnybodyLovePython3(elements){
//     return elements.some((element) => element.hobbies.includes('python'))
// }

// const result = isAnybodyLovePython2(data);
// console.log(result);

// czy ktoś spoza warszawy ma więcej niż 30 lat

function isOlderThan30(people) {
    for (const person of people) {
        // (!(a || b) && c)
        // (!(1 || 0) && 1) => F
        if (!('warsaw' === person.city || 'warszawa' === person.city) && person.age > 30) {
            return true;
        }
    }

    return false;
}

const isOlderThan302 = (people) => people
    .some((person) => !('warsaw' === person.city || 'warszawa' === person.city) && person.age > 30);

// const res = isOlderThan30(data)
// console.log(res);

// policz ile jest unikalnych hobbies

const countHobbies = (people) => {
    const hobbies = [];

    for (const person of people) {
        for (const hobby of person.hobbies) {
            if (!hobbies.includes(hobby)) {
                hobbies.push(hobby);
            }
        }
    }

    return hobbies.length;
}

const countHobbies2 = (items) => new Set(
    items.flatMap((item) => item.hobbies)
).size;

const r = countHobbies2(data);
console.log(r);






