import * as React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';


export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App1} >
          <IndexRoute component={About} />
          <Route path="/about" component={About} />
          <Route path="/members" component={MembersPageContainer} />
          <Route path="/member" component={MemberPageContainer} />
          <Route path="/member/:id" component={MemberPageContainer} />
        </Route>
      </Router>
    </Provider>
  );
}
