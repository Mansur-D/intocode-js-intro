
let a = [-1,-2,-3,4,5,6,7,8,9,10]
let i = 0;
let akkumulator = 0;
while(i < a.length){
    if(i < a[i]){
        akkumulator = akkumulator + a[i]

    }
      
  i++
}
console.log(akkumulator)