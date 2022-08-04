const inputs = document.querySelectorAll("input");
const codeBlock = document.getElementById("code-block");
const code = document.getElementById("code");
const form = document.querySelector("form");


const onRedirect = function () {
  window.location.href ="./index.html"
}

inputs.forEach((input, key) => {
  if (key !== 0) {
    input.addEventListener("click", function () {
      inputs[0].focus();
    });
  }
  input.addEventListener("keyup", function () {
    if (input.value) {
      if (key === 3) {
        const userCode = [...inputs].map((input) => input.value).join("");
        codeBlock.classList.remove("hidden");
        code.innerText = userCode;
      } else {
        inputs[key + 1].focus();
      }
    }
  });
});