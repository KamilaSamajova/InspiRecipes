// Vue component for handling articles on the Main page

let articles = new Vue({
    el: "#app",
    data() {
        return {
            show: 0,
            articles: [
                { articleId: 1, name: "Article 1", image: '../Pictures/Article.jpg',
                  article: "Article content. Article content. Article content. Article content. Article content. \
                  Article content. Article content. Article content. Article content. Article content." },
                { articleId: 2, name: "Article 2", image: '../Pictures/Article.jpg',
                  article: "Article content. Article content. Article content. Article content. Article content. \
                  Article content. Article content. Article content. Article content. Article content." },
                { articleId: 3, name: "Article 3", image: '../Pictures/Article.jpg',
                  article: "Article content. Article content. Article content. Article content. Article content. \
                  Article content. Article content. Article content. Article content. Article content." },
                { articleId: 4, name: "Article 4", image: '../Pictures/Article.jpg',
                  article: "Article content. Article content. Article content. Article content. Article content. \
                  Article content. Article content. Article content. Article content. Article content." },
            ],
        }
    },
});