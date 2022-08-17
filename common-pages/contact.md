---
layout: common-pages
title: "Contate-me Contact page"
---

<form class="contact_form" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/{form_id}" method="post">

  <fieldset action="https://formspree.io/f/xknenybo">
    <label for="full-name">Nome</label>
    <input type="text" name="name" id="full-name" placeholder="John Doe" required class="contact_form--inputs contact_form--name">

    <label for="email-address">E-mail para o retorno</label>
    <input type="email" name="_replyto" id="email-address" placeholder="exemplo@dominio.com" required class="contact_form--inputs contact_form--email">

    <label for="message">Mensagem</label>
    <textarea  name="message" id="message" placeholder="Escreva a sua mensagem aqui" required class="contact_form--inputs contact_form--massage"></textarea>

    <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission">
  </fieldset>

  <input type="submit" value="Submit">
</form>
