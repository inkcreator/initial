let btns = document.querySelectorAll("button");
let input = document.querySelector("input");
let finaldata;

btns.forEach((e, i) => {
  e.addEventListener("click", () => {
    let inputVal = input.value;
    let LastCharAfterRemove = inputVal.slice(0, inputVal.length - 1);
    let LastChar = inputVal[inputVal.length - 1];
    let opr = ["+", "-", "/", "*"];
    if (e.innerHTML == "AC") {
      input.value = "";
    } else if (e.innerHTML == "=") {
      try {
        input.value = eval(inputVal);
      } catch (error) {
        input.value = "Error";
      }
    } else if (e.innerHTML == "+/-") {
      input.value = inputVal.slice(0, inputVal.length - 1);
    } else {
      if (opr.includes(e.innerHTML)) {
        if (opr.includes(LastChar)) {
          finaldata = LastCharAfterRemove + e.innerHTML;
        } else {
          finaldata = inputVal + e.innerHTML;
        }
      } else {
        finaldata = inputVal + e.innerHTML;
      }
      if (e.innerHTML === "." && inputVal.includes(".")) {
        finaldata = inputVal;
      }

      input.value = finaldata;
    }
  });
});
