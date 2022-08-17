---
layout: default
title: "Contact page"
---

<form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/{form_id}" method="post">

  <fieldset id="fs-frm-inputs" action="https://formspree.io/f/xknenybo">
    <label for="full-name">Nome</label>
    <input type="text" name="name" id="full-name" placeholder="John Doe" required>

    <label for="email-address">E-mail para o retorno</label>
    <input type="email" name="_replyto" id="email-address" placeholder="exemplo@dominio.com" required>

    <label for="message">Mensagem</label>
    <textarea  name="message" id="message" placeholder="Escreva a sua mensagem aqui" required></textarea>

    <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission">
  </fieldset>

  <input type="submit" value="Submit">
</form>
