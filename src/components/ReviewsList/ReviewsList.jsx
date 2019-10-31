import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import s from "./ReviewsList.module.scss";

const ReviewsList = ({ reviews }) => {
  const location = useLocation();
  return (
    <div className={s.ReviewsListWrapper}>
      <ul className={s.list}>
        {reviews.map(({ id, text }) => {
          return (
            <li key={id}>
              <Link to={`${location.pathname}/${id}`} >
                <span>{text}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string
    })
  ).isRequired
};


export default ReviewsList;
