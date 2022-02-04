document.getElementById("submit").addEventListener("click", event => {
  event.preventDefault();
  const email = document.getElementById("email");
  const message = document.querySelector("#message");

  if (email.value.match(email.pattern)) {
    message.classList.add("valid-email");
    message.classList.remove("invalid-email");
  } else {
    message.classList.add("invalid-email");
    message.classList.remove("valid-email");
  }
});
