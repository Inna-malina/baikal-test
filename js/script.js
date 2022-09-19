function Validate() {
    let regPhone = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
    let myPhone = document.querySelector('.phone').value;
    let tooltipPhone = document.querySelector('.phone-tooltip');
    let validPhone = regPhone.test(myPhone);
    if (validPhone == false) {
        tooltipPhone.classList.remove('disactive');
        tooltipPhone.classList.add('active');
    }

    let regName = /^[a-zA-Zа-яА-ЯёЁ ,.'-]+$/;
    let myName = document.querySelector('.name').value;
    let tooltipName = document.querySelector('.name-tooltip');
    let validName = regName.test(myName);
    if (validName == false) {
        tooltipName.classList.remove('disactive');
        tooltipName.classList.add('active');
    }

    let regLastname = /^[a-zA-Zа-яА-ЯёЁ ,.'-]+$/;
    let myLastname = document.querySelector('.lastname').value;
    let tooltipLastname = document.querySelector('.lastname-tooltip');
    let validLastname = regLastname.test(myLastname);
    if (validLastname == false) {
        tooltipLastname.classList.remove('disactive');
        tooltipLastname.classList.add('active');
    }
}

let tooltips = document.querySelectorAll('.tooltip__box');

tooltips.forEach(function (tooltip) {
    tooltip.addEventListener('click', function () {
        tooltip.classList.remove('active');
        tooltip.classList.add('disactive');
    });
});

let form = document.querySelector('.form__box');
form.addEventListener("submit", (e) => e.preventDefault());