const getCpfNumber: HTMLInputElement | null = document.querySelector("input");
const btnValidade: HTMLButtonElement | null = document.querySelector("button");
let fieldCpf: HTMLSpanElement | null = document.querySelector("body > span");

if (fieldCpf != null) {
  fieldCpf.style.display = "none";
}

const cpfCodeValidator: RegExp = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/;

let paragraphy: HTMLParagraphElement = document.createElement("p");
let first_span: HTMLSpanElement = document.createElement("span");
let second_span: HTMLSpanElement = document.createElement("span");
let fragment = document.createDocumentFragment();

const div: HTMLDivElement | null = document.querySelector("div");

getCpfNumber?.addEventListener("keydown", function (event) {
  if (fieldCpf?.style.display) fieldCpf.style.display = "none";
});

getCpfNumber?.addEventListener("focus", function () {
  if (first_span.textContent != "" && second_span.textContent != "")
    removeElement();
  getCpfNumber.style.outlineColor = "#5e1925";
});

getCpfNumber?.addEventListener("change", () => {
  if (fieldCpf?.style.display) fieldCpf.style.display = "none";
});

btnValidade?.addEventListener("click", () => {
  if (first_span.textContent != "" && second_span.textContent != "")
    removeElement();
  cpfValidator(getCpfNumber?.value);
});

function cpfValidator(cpf: any): void {
  // Verifica se o cpf é válido ou inválido
  const isValid: boolean = cpfCodeValidator.test(cpf);
  paragraphy.appendChild(first_span);
  paragraphy.appendChild(second_span);

  fragment.append(paragraphy);

  // Aplica a lógica na view
  if (getCpfNumber?.value != "") {
    if (isValid) {
      first_span.textContent = `O formato do cpf ${cpf}`;
      second_span.textContent = ` é válido`;
      div?.append(fragment);
      resetInput();
    } else {
      first_span.textContent = `O formato do cpf ${cpf}`;
      second_span.textContent = ` é inválido`;
      div?.append(fragment);
      resetInput();
    }
  } else {
    getCpfNumber.focus();
    if (fieldCpf != null) {
      fieldCpf.style.display = "block";
    }
  }
}

function resetInput() {
  if (getCpfNumber != null || getCpfNumber === "") getCpfNumber.value = "";
}

function removeElement() {
  first_span.textContent = "";
  second_span.textContent = "";
}
