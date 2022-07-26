//BTNS
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
//RESET BUTTON
const resetBtn = document.querySelector(".reset");
//BILLS INPUT
let bill = document.querySelector(".bill1");
let numPeople = document.querySelector(".bill2");
//TIPS
let tipAmount = document.querySelector(".tip_amount");
let tipPerson = document.querySelector(".tip_person");
//TIPS PERCENTAGE;
// GET THE INPUT
btn1.addEventListener("click", () => {
  console.log(bill.value);
});
btn2.addEventListener("click", () => {
  console.log(numPeople.value);
});

const btn = document.querySelectorAll(".btn");
function get() {
  btn.forEach((e) => {
    e.addEventListener("click", (bn) => {
      let tipPercent = bn.target.textContent.slice(0, -1);
      console.log(tipPercent);
      let tipsAmount = (bill.value * tipPercent) / 100;
      let totalTip = tipsAmount / numPeople.value;
      tipAmount.innerHTML = totalTip.toPrecision(4);
      let totalPerson = bill.value / numPeople.value;
      let amount1Person = totalPerson + totalTip;
      tipPerson.innerHTML = amount1Person.toPrecision(4);
      resetBtn.addEventListener("click", () => {
        tipAmount.innerHTML = 0;
        tipPerson.innerHTML = 0;
      });

      console.log(numPeople.value);
    });
  });
}
get();
// console.log(get());
