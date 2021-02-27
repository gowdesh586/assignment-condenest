import React from "react";

const Article = props => {
  const { title, description, url, urlToImage, publishedAt, content } = props;
  return (
      <div className="article">
          <div className="image-container">
              <img src={urlToImage} alt={"No Image"} />
          </div>
          <div className="info">
              <a href={url}><h1>{title}</h1></a>
              <div>
                  <p>{description}</p>
                  <p>{content}</p>
                  <h5>Posted On: {new Date(publishedAt).toLocaleString()}</h5>
              </div>
          </div>
      </div>

  );
};

export default Article;
