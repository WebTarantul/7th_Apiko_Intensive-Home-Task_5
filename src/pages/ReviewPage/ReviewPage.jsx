import React, { useContext } from "react";
import { useHistory, useParams } from 'react-router-dom';
import { ReducerContext } from "../../components/App/App";


const ReviewPage = () => {
  const [{reviews}, dispatch] = useContext(ReducerContext);
  const params = useParams();
  const history = useHistory();
  const reviewItem = reviews.find(item => item.id === params.id);

  return (
  <div className="ReviewPageWrapper">
  <p><span>Review: </span> {reviewItem.text}</p>
  <p><span>Review ID: </span> {reviewItem.id}</p>
  <button onClick={history.goBack} >Go back</button>
  </div>);
};

export default ReviewPage;
