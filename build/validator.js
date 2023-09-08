"use strict";
const getCpfNumber = document.querySelector("input");
const btnValidade = document.querySelector("button");
let fieldCpf = document.querySelector("body > span");
if (fieldCpf != null) {
    fieldCpf.style.display = "none";
}
const cpfCodeValidator = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/;
let paragraphy = document.createElement("p");
let first_span = document.createElement("span");
let second_span = document.createElement("span");
let fragment = document.createDocumentFragment();
const div = document.querySelector("div");
getCpfNumber === null || getCpfNumber === void 0 ? void 0 : getCpfNumber.addEventListener("keydown", function (event) {
    if (fieldCpf === null || fieldCpf === void 0 ? void 0 : fieldCpf.style.display)
        fieldCpf.style.display = "none";
});
getCpfNumber === null || getCpfNumber === void 0 ? void 0 : getCpfNumber.addEventListener("focus", function () {
    if (first_span.textContent != "" && second_span.textContent != "")
        removeElement();
    getCpfNumber.style.outlineColor = "#5e1925";
});
getCpfNumber === null || getCpfNumber === void 0 ? void 0 : getCpfNumber.addEventListener("change", () => {
    if (fieldCpf === null || fieldCpf === void 0 ? void 0 : fieldCpf.style.display)
        fieldCpf.style.display = "none";
});
btnValidade === null || btnValidade === void 0 ? void 0 : btnValidade.addEventListener("click", () => {
    if (first_span.textContent != "" && second_span.textContent != "")
        removeElement();
    cpfValidator(getCpfNumber === null || getCpfNumber === void 0 ? void 0 : getCpfNumber.value);
});
function cpfValidator(cpf) {
    const isValid = cpfCodeValidator.test(cpf);
    paragraphy.appendChild(first_span);
    paragraphy.appendChild(second_span);
    fragment.append(paragraphy);
    if ((getCpfNumber === null || getCpfNumber === void 0 ? void 0 : getCpfNumber.value) != "") {
        if (isValid) {
            first_span.textContent = `O formato do cpf ${cpf}`;
            second_span.textContent = ` é válido`;
            div === null || div === void 0 ? void 0 : div.append(fragment);
            resetInput();
        }
        else {
            first_span.textContent = `O formato do cpf ${cpf}`;
            second_span.textContent = ` é inválido`;
            div === null || div === void 0 ? void 0 : div.append(fragment);
            resetInput();
        }
    }
    else {
        getCpfNumber.focus();
        if (fieldCpf != null) {
            fieldCpf.style.display = "block";
        }
    }
}
function resetInput() {
    if (getCpfNumber != null || getCpfNumber === "")
        getCpfNumber.value = "";
}
function removeElement() {
    first_span.textContent = "";
    second_span.textContent = "";
}
