// for (let i = 0; i < 10; i++){
//     console.log(i)
// }


for(let i = 0; i<10; i++){
    // console.log(`the outer loop is ${i}`)
    for(j = 0; j<10; j++){
        // console.log(`the inner loop is ${j}`)
        // console.log(i + '*' + j + '=' + i*j)
    }
}
 for(i=0; i<10; i++){
    if(i == 5){
        break
    }
    console.log(i)
 }
 for(i=0; i<10; i++){
    if(i == 5){
        continue
    }
    console.log(i)
 }