// თუ მოგეწონა კოდი დამიფასე მაინც ;)

const numbers = document.querySelectorAll(".number");
const input = document.querySelector(".output");

const clear = document.getElementById("clear");
const remove = document.getElementById("remove");
const jami = document.getElementById("jami");

const percent = document.getElementById("percent")
const point = document.getElementById("point");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multi = document.getElementById("multi");
const gayofa = document.getElementById("gayofa");
const xarisxi = document.getElementById("xarisxi");

function firstInput() {
    if (input.value.length == 1) {
        plus.setAttribute("disabled", true);
        minus.setAttribute("disabled", true);
        multi.setAttribute("disabled", true);
        gayofa.setAttribute("disabled", true);
        xarisxi.setAttribute("disabled", true);
        percent.setAttribute("disabled", true)
    }
}
numbers.forEach((item) => {
    firstInput();

    item.addEventListener("click", (e) => {
        if (input.value.length == 1 && input.value[0] == 0) {
            input.value = e.target.value;
        }

        input.value += e.target.textContent;

        if (input.value[input.value.length - 1] == "+") {
            plus.setAttribute("disabled", true);
        } else if (input.value[input.value.length - 1] == "-") {
            minus.setAttribute("disabled", true);
        } else if (input.value[input.value.length - 1] == "*") {
            multi.setAttribute("disabled", true);
        } else if (input.value[input.value.length - 1] == "/") {
            gayofa.setAttribute("disabled", true);
        } else if (input.value[input.value.length - 1] == "**") {
            xarisxi.setAttribute("disabled", true);
        } else if (input.value[input.value.length - 1] == ".") {
            point.setAttribute("disabled", true);
        } else if (input.value[input.value.length - 1] == "%") {
            percent.setAttribute("disabled", true)
        } 
         else {
            plus.removeAttribute("disabled");
            minus.removeAttribute("disabled");
            multi.removeAttribute("disabled");
            gayofa.removeAttribute("disabled");
            xarisxi.removeAttribute("disabled");
            point.removeAttribute("disabled");
            percent.removeAttribute("disabled")
        }
    });
});

jami.addEventListener("click", () => {
    input.value = eval(input.value);
});

clear.addEventListener("click", () => {
    input.value = "0";
    firstInput();
});

remove.addEventListener("click", () => {
    if (input.value.length > 1) input.value = input.value.slice(0, -1);
    else {
        input.value = "0";
    }
});
