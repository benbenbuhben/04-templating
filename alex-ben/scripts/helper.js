'use strict';

Handlebars.registerHelper('appendArticleWithAttrValues', (value1, value2) => {
  return new Handlebars.SafeString(
    `<article data-category="${value1}" data-author="${value2}">`
  );
});

Handlebars.registerHelper('appendAnchorWithAttrValue', (text, url) => {
  return new Handlebars.SafeString(
    `<a href="${url}"> ${text} </a>`
  );
});

Handlebars.registerHelper('appendOptionWithAttrValue', (value) => {
  return new Handlebars.SafeString(
    `<option value="${value}">${value}</option>>`
  );
});