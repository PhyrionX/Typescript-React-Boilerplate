import * as React from 'react';

export const About: React.StatelessComponent<{}> = () => {
  return (
    <div>
      <div className="row">
        <nav className="breadcrumb">
          <a className="breadcrumb-item" href="#">Home</a>
          <a className="breadcrumb-item" href="#">Library</a>
          <a className="breadcrumb-item" href="#">Data</a>
          <span className="breadcrumb-item active">Bootstrap</span>
        </nav>
      </div>
      <div className="row">
        hello
      </div>
    </div>
  );
}
