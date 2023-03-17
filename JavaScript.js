////////////////////HOME TASK
//task1
// function sort(a,b,c){
//     if(a<=b && b<=c){
//         return true
//     }
//     else return false
// }
// console.log(sort(1,2,3))
// console.log(sort(1,5,3))
// console.log(sort(1,1,3))


//task2
// function min(a,b,c){
//     if(a>b && a>c && b>c){
//         return c
//     }
//     else if(a>b && a>c && b<c){
//         return b
//     }
//     else if(a<b && a>c && b>c){
//         return c
//     }
//     else if(a>b && a<c && b<c){
//         return b
//     }
//     else return a
// }
// console.log(min(1,2,0))
// console.log(min(3,2,1))
// console.log(min(1,3,2))
// console.log(min(2,3,1))
// console.log(min(3,0,2))
// console.log(min(2,-10,-30))


//task3
// function minamax(a,b,c){
//     if(a<b && a<c && b<c){ return `${a}  ${c}` }
//     else if(a>b && a>c && b>c){ return `${c}  ${a}`}
//     else if(a<b && a<c && b>c){ return `${a}  ${b}`}
//     else if(a<b && a>c && b>c){ return `${c}  ${b}`}
//     else if(a>b && a<c && b<c){ return `${b}  ${c}`}
//     else { return `${b}  ${a}`}
// }
// console.log(minamax(1,2,3))
// console.log(minamax(3,2,1))
// console.log(minamax(1,3,2))
// console.log(minamax(2,3,1))
// console.log(minamax(2,1,3))
// console.log(minamax(3,1,3))


//task4
// function even(a){
//     return (a+2)-(a%2)
// }
// console.log(even(10))
// console.log(even(9))


//task5
// function sequenceNum(a,b,c){
//     if(a!=b && a==c && b!=c){ return 2}
//     else if(a==b && a!=c && b!=c){ return 3}
//     else if(a!=b && a!=c && b==c){ return 1}
//     else {return 0}
// }
// console.log(sequenceNum(1,2,1))
// console.log(sequenceNum(1,1,2))
// console.log(sequenceNum(2,1,1))
// console.log(sequenceNum(1,1,1))


//task6
// function passingTheHead(a,b,x){
//     return a-x>=1 && b-x>=1
// }
// console.log(passingTheHead(3,4,2))
// console.log(passingTheHead(4,4,2))
// console.log(passingTheHead(7,8,8))
// console.log(passingTheHead(28,4,2))


//task7
// function incAndDec(a,b,c){
//     if(a<b && a<c && b<c){
//         return `${a*2}  ${b*2}  ${c*2}`
//     }
//     else{
//         return `${-a}  ${-b}  ${-c}`
//     }
// }
// console.log(incAndDec(1,2,3))
// console.log(incAndDec(7,5,3))


//task8
// function sequenceNums(a,b,c,d){
//     if(a==b && a==c && b==c && b!=d){
//         return 4
//     }
//     else if(a!=b && a!=c && b==c && b==d){
//         return 1
//     }
//     else if(a!=b && a==c && b!=c && b!=d){
//         return 2
//     }
//     else if(a==b && a!=c && b!=c && b==d){
//         return 3
//     }
//     else return 0
// }
// console.log(sequenceNums(2,2,2,3))
// console.log(sequenceNums(1,6,6,6))
// console.log(sequenceNums(2,8,2,2))
// console.log(sequenceNums(2,2,8,2))
// console.log(sequenceNums(2,2,2,2))


//task9
// function sumOfInequalities(a,b){
//     let x=0
//     let x1=0
//     x=a%10
//     x1=a/10%10
//     if(x+x1>b){
//         return true
//     }
//     else return false
// }
// console.log(sumOfInequalities(55,9))
// console.log(sumOfInequalities(57,9))
// console.log(sumOfInequalities(10,9))
// console.log(sumOfInequalities(55,99))



//task10
// function sumOfInequalities(a){
//     let x=0
//     let x1=0
//     let x2=0
//     let cnt=0
//     x=a%10
//     x1=a/10%10
//     x2=Math.floor(a/100)
//     cnt=x*x1*x2
//     if(cnt>=100){
//         return true
//     }
//     else return false
// }
// console.log(sumOfInequalities(554))
// console.log(sumOfInequalities(371))
// console.log(sumOfInequalities(100))


//task11

// function repeat(a, b){
//     if(b==1){
//         return a
//     }
    
//     return a+repeat(b-1)
// }
// console.log(repeat('asd',3))


//task12
// function evenish(a){
//     let cnt
//     let sum
//     if(a<0){
//         sum=Math.abs(a)
//         if(sum%2==0){ return `Even`}
//         else return 'Odd'
//     }
//     else if(a%2==0){
//         return `Even`
//     }
//     else return `Odd`
// }
// console.log(evenish(-12))
// console.log(evenish(-11))
// console.log(evenish(12))
// console.log(evenish(11))