document.body.querySelector(`#purchaseButton`).addEventListener(`click`, () => alert(`Out Of Stock`))

let navLinks = document.body.querySelectorAll(`.navText`)

navLinks.forEach(ele => {
    ele.addEventListener(`click`, (event) => alert(`${event.target.textContent} Is Under Construction At The Moment. Check Back Soon!`))
})