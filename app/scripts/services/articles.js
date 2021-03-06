'use strict';

app.factory('Article', 
  function ($firebase, FIREBASE_URL) {
    var ref = new Firebase(FIREBASE_URL + 'articles');
    var articles = $firebase(ref);
 
    var Article = {
      all: articles,
      create : function(article){
        
        articles[article.slug] = article;
        
        return articles.$save(article.slug)

      },
      find : function(articleId){
        return articles.$child(articleId);
      },
      delete : function(articleId){
        return articles.$remove(articleId);
      },
      new : function(){
        return {
          title: {
            'en' : '',
            'zh-hk' : '',
            'zh-cn' : ''
          },
          slug: '',
          author: '',
          html : {
            'en' : '',
            'zh-hk' : '',
            'zh-cn' : ''
          },
          cover: '',
          category: 'news',
          draft: true,
          internal: false,
          publish_date: Date.now(),
          updated_at: Date.now(),
          created_at: Date.now()
        };
      }
    };

    return Article;
})
