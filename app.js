const sections = document.querySelectorAll('.section');
const sectionBtns = document.querySelectorAll('.controlls');
const sectionBtn = document.querySelectorAll('.control');

function PageTransitions(){
    // Button click active class
    for (let i = 0; i < sectionBtn.length; i++){
        sectionBtn[i].addEventListener('click',function() {
            let currentbtn = document.querySelectorAll('.active-btn');
            currentbtn[0].className = currentbtn[0].className.replace('active-btn','');
            this.className += 'active-btn';
        })
    }
}

PageTransitions();