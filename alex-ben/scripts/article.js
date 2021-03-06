'use strict';

let articles = [];

function Article(rawDataObj) {

  for (let key of Object.keys(rawDataObj)){
    this[key] = rawDataObj[key];
  }

}

Article.prototype.toHtml = function () {
  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn)) / 60 / 60 / 24 / 1000);
  this.publishStatus = this.publishedOn ? `published ${this.daysAgo} days ago` : '(draft)';
  let template = $('#article-template').html();
  let templateToRender = Handlebars.compile(template); 
  return templateToRender(this);

};

// COMMENT: Why are there parentheses around "(a,b)" in the .sort() method, but not around the "articleObject" or "article" arguments in the .forEach() methods?
// When you have only one parameter the parenthesis are optional, but they are required with multiple parameters
rawData.sort((a, b) => {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

rawData.forEach(articleObject => {
  articles.push(new Article(articleObject));
});

articles.forEach(article => {
  $('#articles').append(article.toHtml());
});