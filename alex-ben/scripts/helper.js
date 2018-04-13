'use strict';

Handlebars.registerHelper('link', function (text, url) {
  return new Handlebars.SafeString(
    `<a href="${url}"> ${text} </a>`
  );
});

Handlebars.registerHelper('appendAttribute', function (value1, value2) {
  return new Handlebars.SafeString(
    `<article data-category="${value1}" data-author="${value2}">`
  );
});

Handlebars.registerHelper('option', (value) => {
  console.log(value)
  return new Handlebars.SafeString(
    `<option value="${value}">${value}</option>>`
  );
});