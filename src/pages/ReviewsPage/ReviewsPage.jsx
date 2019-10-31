import React, { useContext, useState, useEffect } from "react";
import uuid from "uuid/v4";
import { ReducerContext } from "../../components/App/App";
import ReviewsList from "../../components/ReviewsList/ReviewsList";
import withNavBar from "../../hocs/withNavBar";
import { REVIEWS_ACTIONS } from "../../modules/reviews/reviews.actions";
import s from "./ReviewsPage.module.scss";

const ReviewsPage = () => {
  const [state, dispatch] = useContext(ReducerContext);
  const [review, setReview] = useState("");

  const { reviews } = state;

  const onAddReview = (e, review) => {
    const newReview = {
      id: uuid(),
      text: review
    };
    dispatch({ type: REVIEWS_ACTIONS.addReview, payload: newReview });
    setReview("");
    e.preventDefault();
  };
  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  return (
    <div className={s.ReviewsPageWrapper}>
      <form onSubmit={e => onAddReview(e, review)}>
        <input
          type="text"
          placeholder="Type your review please"
          value={review}
          onChange={e => setReview(e.target.value)}
        />
      </form>
      <ReviewsList {...{ reviews }} />
    </div>
  );
};

export default withNavBar(ReviewsPage);
