function sum(a, b){
    return a + b;
}

const result = sum(1, 2);
// console.log(result);
// console.log(sum(1, 2));

// napisz funkcję, która zwraca 'Cześć, Janusz', przy czym
// Janusz to parametr

function greetings(name){
    return 'Cześć, ' + name;
}

// console.log(greetings('Janusz'));

function getDayName(day){
    return ['ndz', 'pon', 'wt'][day]
}

// console.log(getDayName(0)) // niedziela

// wylosuj 6 liczb bez powtórzeń z zakresu 1-49
function drawDigits(quantity){
    const temp = [];

    while (temp.length < quantity){
        const digit = Math.floor(Math.random() * 48 + 1);
        if (!temp.includes(digit)){
            temp.push(digit)
        }
    }

    return temp;
}


// console.log(drawDigits(8)) // [1, 2, 34, 23, 44, 11]


function symmetricalDifference(arr1, arr2) {
  // Tworzymy zbiory z elementów obu tablic, aby pozbyć się duplikatów.
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  // Tworzymy tablice z wynikiem symetrycznej różnicy.
  const result = [];

  // Dodajemy do wyniku elementy, które występują tylko w jednym z zbiorów.
  for (const element of set1) {
    if (!set2.has(element)) {
      result.push(element);
    }
  }

  for (const element of set2) {
    if (!set1.has(element)) {
      result.push(element);
    }
  }

  return result;
}

// Przykład użycia:
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
// const difference = symmetricalDifference(array1, array2);
// console.log(difference); // Wynik: [1, 2, 5, 6]

// fn, do zwracania intersection 2 tablic
// algorytm postępowania


// 1. Stwórz funkcje, która przyjmuje 2 parametry
// 2. Stwórz pustą tablicę, do zapisywania powtarzających się elementów
// 3. Przeiteruj po pierwszej tablicy - for
// 4. Sprawdz w iteracji każdy element, czy jest w drugiej - includes
// 5. Jeżeli jest to dodaj do pustej tablicy - push
// 6. Po iteracji zwróc tablicę z pkt 2

function arrayIntersection(arr1, arr2) {
    const result = [];

    for (let i = 0; i < arr1.length; i++){
        if (arr2.includes(arr1[i])) {
            result.push(arr1[i]);
        }
    }

    return result;
}

const x = [42, 1, 2, 3, 4, 5]

// console.log(arrayIntersection([1, 3, 4, 11], [2, 4, 11]))

// myLord - Witaj mój Panie!, Co jeszcze mogę dla Ciebie zrobić,
// Pięknie dzisiaj wyglądasz!

// 1. Stwórz funkcje, która nie ma args
// 2. Stworz tablice z tekstami i przypis do zmiennej
// 3. Zwróc losowy tekst zależny od indeksu z tablicy

function myLord() {
    const sentences = ['Witaj mój Panie!',' Co jeszcze mogę dla Ciebie zrobić', 'Pięknie dzisiaj wyglądasz!'];
    return sentences[Math.round(Math.random() * (sentences.length - 1))];
}

console.log(myLord())