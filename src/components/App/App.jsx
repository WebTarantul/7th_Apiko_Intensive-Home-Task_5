import React, { useReducer } from "react";
import { INITIAL_STATE, reviewsReducer } from "../../modules/reviews/reviews.reducer";
import Router from "../../pages/router";
import s from "./App.module.scss";
export const ReducerContext = React.createContext();

const App = () => {
  const reducer = useReducer(reviewsReducer, INITIAL_STATE);

  return (
    <div className={s.AppWrapper}>
      <ReducerContext.Provider value={reducer} >
        <Router />
      </ReducerContext.Provider>
    </div>
  );
};


export default App;
