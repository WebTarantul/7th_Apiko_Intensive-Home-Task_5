import { REVIEWS_ACTIONS } from "./reviews.actions";

export const INITIAL_STATE = {
  reviews: JSON.parse(localStorage.getItem("reviews")) || []
};

export const reviewsReducer = (state, action) => {
  switch (action.type) {
    case REVIEWS_ACTIONS.addReview:
      return {
        ...state,
        reviews: [
          ...state.reviews,
          action.payload
        ]
      };

    default:
      throw new Error();
  }
};
