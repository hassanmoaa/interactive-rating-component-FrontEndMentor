const numberElBtn = document.querySelectorAll(".rating__card__buttons__number-btn");
const submitBtn = document.querySelector(".submit-btn")
const thankYouPage = document.querySelector(".container__thank-you-card")
let rating = 0;


// add a click event for each rating number button
numberElBtn.forEach(btn => {
    btn.addEventListener('click',function () {
        console.log('hello world');
    });
})

submitBtn.addEventListener("click", function() {
    
    if (submitBtn === "none") {
        thankYouPage.style.display = "flex"
    } else {
        thankYouPage.style.display ="none"
    }

})

