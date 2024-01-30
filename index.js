const numberElBtn = document.querySelectorAll(".rating__card__buttons__number-btn");

// add a click event for each rating number button
numberElBtn.forEach(btn => {
    btn.addEventListener('click',function () {
        console.log('hello world');
    });
})