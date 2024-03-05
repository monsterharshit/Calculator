var input = document.querySelector(".zero");
let exp = "";

document.querySelector(".z").addEventListener("click", () => {
    let btnZero = document.querySelector(".z");
    exp += btnZero.textContent;
    input.textContent = exp;
});

document.querySelector(".one").addEventListener("click", () => {
    let btnZero = document.querySelector(".one");
    exp += btnZero.textContent;
    input.textContent = exp;
});
document.querySelector(".two").addEventListener("click", () => {
    let btnZero = document.querySelector(".two");
    exp += btnZero.textContent;
    input.textContent = exp;
});
document.querySelector(".three").addEventListener("click", () => {
    let btnZero = document.querySelector(".three");
    exp += btnZero.textContent;
    input.textContent = exp;
});
document.querySelector(".plus").addEventListener("click", () => {
    let btnZero = document.querySelector(".plus");
    exp += btnZero.textContent;
    input.textContent = exp;
});
document.querySelector(".four").addEventListener("click", () => {
    let btnZero = document.querySelector(".four");
    exp += btnZero.textContent;
    input.textContent = exp;
});
document.querySelector(".five").addEventListener("click", () => {
    let btnZero = document.querySelector(".five");
    exp += btnZero.textContent;
    input.textContent = exp;
});

document.querySelector(".six").addEventListener("click", () => {
    let btnZero = document.querySelector(".six");
    exp += btnZero.textContent;
    input.textContent = exp;
});
document.querySelector(".minus").addEventListener("click", () => {
    let btnZero = document.querySelector(".minus");
    exp += btnZero.textContent;
    input.textContent = exp;
}); document.querySelector(".seven").addEventListener("click", () => {
    let btnZero = document.querySelector(".seven");
    exp += btnZero.textContent;
    input.textContent = exp;
});

document.querySelector(".eight").addEventListener("click", () => {
    let btnZero = document.querySelector(".eight");
    exp += btnZero.textContent;
    input.textContent = exp;
});

document.querySelector(".nine").addEventListener("click", () => {
    let btnZero = document.querySelector(".nine");
    exp += btnZero.textContent;
    input.textContent = exp;
});
document.querySelector(".multiply").addEventListener("click", () => {
    let btnZero = document.querySelector(".multiply");
    exp += btnZero.textContent;
    input.textContent = exp;
});

document.querySelector(".dot").addEventListener("click", () => {
    let btnZero = document.querySelector(".dot");
    exp += btnZero.textContent;
    input.textContent = exp;
});
document.querySelector(".divide").addEventListener("click", () => {
    let btnZero = document.querySelector(".divide");
    exp += btnZero.textContent;
    input.textContent = exp;
});


document.querySelector(".equals").addEventListener("click", () => {

    let a  = eval(exp)
    return input.textContent = a
    exp = ""

});

document.querySelector(".erase").addEventListener("click", () => {
    exp = ""
    input.textContent = 0
});






