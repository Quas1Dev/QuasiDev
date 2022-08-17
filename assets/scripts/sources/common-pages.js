require('./global.js')

var form = document.getElementById("contact_form");

async function handleSubmit(event) {
  event.preventDefault();

  var status = document.getElementById("contact_form_status");
  var data = new FormData(event.target);

  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "Obrigado!";
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          status.innerHTML = "Ops! algo deu errado. :("
        }
      })
    }
  }).catch(error => {
    status.innerHTML = "Ops! algo deu errado. :("
  });
}

form.addEventListener("submit", handleSubmit)
