let btn = document.querySelector('button')
let box = document.querySelector('#box');



btn.addEventListener('click',function() {
    let c1 = Math.floor(Math.random()*256)
    let c2 = Math.floor(Math.random()*256)
    let c3 = Math.floor(Math.random()*256)

    Box.style.backgroundColor = `rgb(${c1},${c2},${c3})`


    // box.style.backgroundColor = `rgb(${c1},${c2},${c3})`
    // box.style.backgroundColor = `rgb(${c1},${c2},${c3})`
    // console.log(` c1 ${c1} / c2 ${c2} / c3 ${c3}`)
});
// document.getElementById('BOX'){
// }








// ***********************************************************************************

// var num = Math.floor(Math.random() * 10);  // matlab random value deti hao 

// console.log(num);

// var num = Math.random() * 10;  // matlab random value deti hao 

// console.log(num);