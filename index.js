const numberElBtn = document.querySelectorAll(".rating__card__buttons__number-btn")
const submitBtn = document.querySelector(".submit-btn")
const thankYouPage = document.querySelector(".container__thank-you-card")
const mainPage = document.querySelector(".rating__card")

let ratingElNumber = document.querySelector(".container__thank-you-card__rating")

let rating = 0


// add a click event for each rating number button
numberElBtn.forEach(btn => {
    btn.addEventListener('click',function () {

        rating = this.dataset.ratingNumber
        ratingElNumber.innerText = `You selected ${rating} out of 5`


    });
})

submitBtn.addEventListener("click", function() {
    if (rating === 0) {
        window.alert("You need to first select a rating number")
    } else {
        thankYouPage.style.display = "flex"
        mainPage.style.display = "none"
    }
})

