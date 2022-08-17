---
layout: common-pages
title: "Contato"
---

<form class="contact_form" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/{form_id}" method="post">

  <fieldset class="contact_form--field" action="https://formspree.io/f/xknenybo">
    <label for="full-name">Nome</label>
    <input type="text" name="name" id="full-name" placeholder="Escreva a aqui seu nome." required class="field--inputs contact_form--name">

    <label for="email-address">E-mail para o retorno</label>
    <input type="email" name="_replyto" id="email-address" placeholder="exemplo@dominio.com" required class="field--inputs field--email">

    <label for="message">Mensagem</label>
    <textarea name="message" id="message" placeholder="Escreva a sua mensagem aqui" required class="field--inputs field--massage"></textarea>

    <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission">
  </fieldset>

  <button class="contact_form--submit">Enviar</button>
</form>
