/* global app:true */
'use strict';

app.controller('NewsCtrl', function($scope, $translate, Article){
  $scope.articles = Article.all;
  
  $scope.article = Article.new();

  $scope.submitArticle = function(){

    Article.create($scope.article).then(function(){
      $scope.article = Article.new();
    });
  };

  // $scope.publishArticle = function(articleID){
    // $scope.articles[articleID].draft = false;
    // Articles.update($scope.article);
  // };

  // $scope.retractArticle = function(articleID){
    // $scope.articles[articleID].draft = true;
  // };

  $scope.deleteArticle = function(articleID) {
    Article.delete(articleID);
  };

  $scope.getCurrentLanguage = function () {
    return $translate.use();
  };

});