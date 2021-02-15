function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

 
document.addEventListener('DOMContentLoaded', () => {
    const scorollItem = document.querySelectorAll('.scroll-item');
    const scrollAnim = () => {
        let windowCenter = (window.innerHeight / 2) + window.scrollY;
        scorollItem.forEach (el => {
            let scrollOfset = el.offsetTop + el.offsetHeight / 2;
            if (windowCenter >= scrollOfset) {
                el.classList.add('animation');
            } else {
                el.classList.remove('animation');
            }
            if (window.innerWidth <= 1024) {
                el.classList.add('animation');
               
            }
        });
    };
    const line = document.querySelector('.progres-line_item');
    const progressAnimation = () => {
		let scrollTop = window.scrollY;
		let windowHeight = window.innerHeight;
		let siteHeight = document.documentElement.scrollHeight;
		let percentageProgress = Math.floor(scrollTop / (siteHeight - windowHeight) * 100);
		line.style.width = `${percentageProgress}%`;
    };


 
    scrollAnim();
    progressAnimation();
    window.addEventListener('scroll', ()=>{
        scrollAnim();
        progressAnimation();
       
    });
});

