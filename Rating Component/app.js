let buttons = document.querySelectorAll('.btn');
let submit = document.getElementsByClassName('submitbtn');
let span = document.getElementsByClassName('number');

for(let i = 0; i < buttons.length; ++i){
    buttons[i].addEventListener('click', ()=>{
        let rating = buttons[i].innerHTML;
        for(let j = 0; j < buttons.length; ++j){
            if(buttons[j].classList.contains('selected')){
                buttons[j].classList.remove('selected');
            }
        }
        buttons[i].classList.add('selected');
        submit[0].addEventListener('click', ()=>{
            span[0].innerHTML = rating;
            document.querySelector('.survey').style.display = 'none';
            document.querySelector('.thankyou').style.display = 'block';
        })
    })
}

