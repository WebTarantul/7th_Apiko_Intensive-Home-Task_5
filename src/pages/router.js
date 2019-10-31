import React, {Fragment} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import ShopPage from './ShopPage';
import ReviewsPage from './ReviewsPage';
import ReviewPage from './ReviewPage';


export const routes = {
  HOME: '/',
  SHOP: '/shop',
  REVIEWS: '/reviews',
  REVIEW: '/reviews/:id',
}

const Router = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route path={routes.HOME} component={HomePage} exact />
          <Route path={routes.SHOP} component={ShopPage} />
          <Route path={routes.REVIEW} component={ReviewPage}/>
          <Route path={routes.REVIEWS} component={ReviewsPage} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  )
}

export default Router
