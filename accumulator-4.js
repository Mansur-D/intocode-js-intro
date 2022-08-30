let a = ["Альви", "Расул", "Мохьмад", "Мансур", "Изнаур", "Ибрагим", "Тимур", "Берс", "Зелим", "Аслан"];
let accumulator = [];
for (let i = 0; i < a.length; i++){
    if(a[i][0] === "А"){
        accumulator.push(a[i])
    }
    
}
console.log(accumulator)