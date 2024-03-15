import React from 'react';
import PropTypes from 'prop-types';
import img from '../assets/news-img.jpg';

const NewsItems = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "305px"}}>
      <img src={src ? src : img} alt={title} style={{ height: "200px", width: "290px", objectFit: "cover"}} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">{description ? description.slice(0, 90) : "Some internal error occurred, hence we can't show any news description."}</p>
        <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
};

NewsItems.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  src: PropTypes.string,
  url: PropTypes.string.isRequired,
};

export default NewsItems;
