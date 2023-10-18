// const user = {
//     name: "Przemysław",
//     score: 0,
//     updateScore(newScore){
//         user.score += newScore;
//     }
// }
//
// const user2 = {
//     name: "Jarosław",
//     score: 0,
//     updateScore(newScore){
//         user2.score += newScore;
//     }
// }

// function user(name){
//     return {
//         name: name,
//         score: 0,
//         updateScore(newScore){
//             this.score += newScore;
//         }
//     }
// }
//
// user1 = user("Jarosław");
// user2 = user("Przemysław");
//
// user1.updateScore(666);
// console.log(user1);
// console.log(user2);

function User(name){
    this.name = name;
    this.score = 0;
}

User.prototype.updateScore = function(newScore){
    this.score += newScore;
}

//
// const user = new User('Jarosław');
// user.updateScore(666);
// console.log(user);


Array.prototype.pawelFilter = function(cb){
    const res = [];

    for (let i = 0; i < this.length; i++){
        if(cb(this[i], i, this)){
            res.push(this[i]);
        }
    }

    return res;

}

// const arr = [1, 2, 3]
// const result = arr.pawelFilter((element, idx, arr) => element > 2);
// console.log(result);
String.prototype.title = function(){
    return this[0].toUpperCase() + this.slice(1);
}

// String.prototype.dupa = function(){
//     return "He He Jestem śmieszkiem!"
// }

// 'ala'.title()

// myMap
Array.prototype.myMap = function (fn) {
    const temp = [];

    for (let i = 0; i < this.length; i++){
        const result = fn(this[i], i, this)
        temp.push(result);
    }

    return temp;
}

// [1, 2, 3].myMap(() => 43);

