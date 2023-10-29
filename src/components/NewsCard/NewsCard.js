import React from "react";
import "./NewsCard.css";

const NewsCard = ({ newsItem }) => {
  // console.log(newsItem);
  return (
    <div className="newsCard">
      <img
        src={
          newsItem.newsIcon
            ? newsItem.newsIcon
            : "https://cdn1.vectorstock.com/i/1000x1000/50/20/no-photo-or-blank-image-icon-loading-images-vector-37375020.jpg"
        }
        alt={newsItem.headline}
        className="newsImage"
      />
      <div className="newsText">
        <div>
          <span className="title"> {newsItem.headline}</span>
          <br />{" "}
          <span className="author">
              <b>source:</b>
            {" "}
            <span className="muted">
              by {newsItem.newsSource ? newsItem.newsSource : "unknown"} /{" "}
            </span>
          </span>
        </div>
        <div className="lowerNewsText">
          <div className="description">#{newsItem.hashtags}</div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
