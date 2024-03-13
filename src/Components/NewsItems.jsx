import React from 'react';
import img from '../assets/news-img.jpg';

const NewsItems = ({ title, description, src, url }) => {
  if (!src || !description || description.split(' ').length <= 0) {
    return null; 
  }

  const truncatedTitle = title === "Removed" ? "New this" : title ? `${title.slice(0, 40)} ...` : "null";
  const truncatedDescription = description ?  `${description.slice(0, 80)} ...` : "null";

  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3  px-2 py-2" style={{ maxWidth: "310px", margin:"0 13px" }}>
      <img src={src? src : img} style={{ height: "200px", width: "290px", objectFit: "cover"}} className="card-img-top" alt={truncatedTitle} />
      <div className="card-body">
        <h5 className="card-title">{truncatedTitle}</h5>
        <p className="card-text">{truncatedDescription}</p>
        <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItems;
