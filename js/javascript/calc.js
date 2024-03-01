// (function(){
// const screen = document.querySelector(".screen")
// const buttons = document.querySelectorAll(".btn")
// const equal = document.querySelector(".equal")
// const clear = document.querySelector(".clear")
// buttons.forEach(function(button) {
//             button.addEventListener('click', function(e) {
//                     let value = e.target.dataset.num;
//                     screen.value += value;
//                 })
//         });
// equal.addEventListener('click',(e)=>{
//     if(screen.value == ''){
//         screen.value = ''
//     }
//     else{
//         screen.value = eval(screen.value)
//     }
// })
// clear.addEventListener('click',(e)=>{
//     screen.value = ''
// })
// })()


    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.clear');
    let equal = document.querySelector('.equal');

    buttons.forEach((button) => {
        button.addEventListener('click', function(e) {
                let alue = e.target.innerHTML;
                screen.value += alue;
            })
    });

    equal.addEventListener('click', (e)=>{
        if(screen.value == ''){
            screen.value = "";
        }else{
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })

    clear.addEventListener('click', function(e){
        screen.value = "";
    })


