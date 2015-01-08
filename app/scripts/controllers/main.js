/* global app:true */
'use strict';

angular.module('ui.bootstrap.carousel', ['ui.bootstrap.transition'])
  .controller('CarouselController', ['$scope', '$timeout', '$transition', '$q', function ($scope, $timeout, $transition, $q) {
  }]).directive('carousel', [function() {
      return { }
}]);

app.controller('MainCtrl', function($scope, User){

  $('.carousel').carousel({
    interval: 6000,
  });

  $('#carousel').on('slide.bs.carousel', function (e) {
    if (e.type == "slide" && e.direction == "right" && e.relatedTarget.className != "item"){
      return e.preventDefault()
    }
  })

});

$(function(){
  $('body').on('click', '.navbar-collapse li.open ul.dropdown-menu li a, .navbar-nav > li > a[href]', function(event) {
    $('.navbar-collapse.in').removeClass('in');
  })
})

$('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
  // Avoid following the href location when clicking
  event.preventDefault();
  // Avoid having the menu to close when clicking
  event.stopPropagation();
  // Toggle menu.
  if ($(this).parent().hasClass('open'))
    $(this).parent().removeClass('open');
  else
    $(this).parent().addClass('open');
  // If children are open, close them.
  $(this).children().removeClass('open');
  // If a sibling menu is already open we close it
  $(this).parent().siblings().removeClass('open').children().removeClass('open');
  $(this).siblings().children().removeClass('open');

  var menu = $(this).parent().find("ul");
  var menupos = menu.offset();

  if (menupos.left + menu.width() > $(window).width()) {
    var newpos = -$(menu).width();
    menu.css({ left: newpos });
  } else {
    var newpos = $(this).parent().width();
    menu.css({ left: newpos });
  }
});

