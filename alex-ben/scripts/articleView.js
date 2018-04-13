'use strict';

let articleView = {};

// COMMENT: How do arrow functions affect the context of "this"? How did you determine if a function could be refactored?
// Arrow functions do not have their own this and use the this of their contextual parent. If any function is using a this before it woeuld be r an arrow function, it cannot become an arrow function and maintian the same functionality while using the same code.

articleView.populateFilters = function() {
  $('article').each(function() {
    if (!$(this).hasClass('template')) {
      let val = $(this).find('address a').text().trim();

      if ($(`#author-filter option[value="${val}"]`).length === 0) {
        let template = $('#author-template').html();
        let templateToRender = Handlebars.compile(template);
        $('#author-filter').append(templateToRender($(this)));
      }

      val = $(this).attr('data-category');
      if ($(`#category-filter option[value="${val}"]`).length === 0) {
        let template = $('#category-template').html();
        let templateToRender = Handlebars.compile(template);
        $('#category-filter').append(templateToRender($(this)));
      }
    }
  });
};

articleView.handleAuthorFilter = function() {
  $('#author-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $(`article[data-author="${$(this).val()}"]`).fadeIn();
    } else {
      $('article').fadeIn();
      $('article.template').hide();
    }
    $('#category-filter').val('');
  });
};

articleView.handleCategoryFilter = function() {
  $('#category-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $(`article[data-category="${$(this).val()}"]`).fadeIn();
    } else {
      $('article').fadeIn();
      $('article.template').hide();
    }
    $('#author-filter').val('');
  });
};

articleView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function(e) {
    e.preventDefault();
    $('.tab-content').hide();
    $(`#${$(this).data('content')}`).fadeIn();
  });

  $('.main-nav .tab:first').click();
};

articleView.setTeasers = function() {
  $('.article-body *:nth-of-type(n+2)').hide();
  $('article').on('click', 'a.read-on', function(e) {
    e.preventDefault();
    if ($(this).text() === 'Read on →') {
      $(this).parent().find('*').fadeIn();
      $(this).html('Show Less &larr;');
    } else {
      $('body').animate({
        scrollTop: ($(this).parent().offset().top)
      },200);
      $(this).html('Read on &rarr;');
      $(this).parent().find('.article-body *:nth-of-type(n+2)').hide();
    }
  });
};

$(document).ready( () => {
  articleView.populateFilters();
  articleView.handleCategoryFilter();
  articleView.handleAuthorFilter();
  articleView.handleMainNav();
  articleView.setTeasers();
})
