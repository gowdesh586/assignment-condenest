import React from "react";
import Article from "./Article";

const Results = ({ articles }) => {
  return (
    <div className="search">
      {!articles.length ? (
        <h1>There are no articles..!</h1>
      ) : (
          articles.map(article => {
          return (
            <Article
                key={article.title}
                author={article.author}
                title={article.title}
                description={article.description}
                url={article.url}
                urlToImage={article.urlToImage}
                publishedAt={article.publishedAt}
                content={article.content}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;
