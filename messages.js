document.getElementById("sendBtn").addEventListener("click", function () {
  let input = document.getElementById("message");
  let message = input.value.trim();
  if (message !== "") {
    let p = document.createElement("p");
    p.textContent = message;
    p.addEventListener("click", function () {
      this.remove();
    });
    document.getElementById("text").appendChild(p);
    input.value = "";
  }
});
