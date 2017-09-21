import  * as React from 'react';

export interface SFCCounterProps {

  }
  export class Footer extends React.Component {
    render() {
      return (
        <div>
        <hr/>
        <span style={{color: 'gray'}}>© 2016-{(new Date()).getFullYear()} Ismael Rodríguez. All rights reserved. Made with React.</span>
      </div>
    );
    }

}


