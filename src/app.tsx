import * as React from 'react';
import { Header } from './components';

export const App: React.StatelessComponent<{}> = (props) => {
  return (
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <nav className="col-sm-1 col-md-1 hidden-xs-down bg-faded sidebar">
              <ul className="nav nav-pills flex-column">
                <li className="nav-item">
                  <a className="nav-link active" href="#">Overview <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Reports</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Analytics</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Export</a>
                </li>
              </ul>
            </nav>
            <main className="col-sm-11 offset-sm-1 col-md-11 offset-md-1 pt-1">
              {props.children}
            </main>
          </div>
        </div>
      </div>

  );
}
