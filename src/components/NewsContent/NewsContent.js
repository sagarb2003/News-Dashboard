import { Container } from "@mui/material";
import React from "react";
import "./NewsContent.css";
import NewsCard from "../NewsCard/NewsCard";

const NewsContent = ({ newsArray}) => {
  return (
    <Container maxWidth="md">
      <div className="content">
        {newsArray.map((newsItem) => (
          <NewsCard newsItem={newsItem.attributes} key={newsItem.id} />
        ))}
      </div>
    </Container>
  ); //maxwidth is used to align the container in the center
};

export default NewsContent;
