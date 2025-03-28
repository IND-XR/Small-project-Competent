var button = document.querySelector('#butt');
var Name = document.querySelector('h5');

let check = 0;
button.addEventListener('click',function(){
    
    if(check == 0){
        Name.innerText = 'friend';
        button.innerHTML = 'remove frend'
        console.log("heloo")
        check=1;

    }else{
        Name.innerText = 'Stranger';
        button.innerHTML = 'ADD frend'
        console.log("hii");
        check=0;
    }
})
