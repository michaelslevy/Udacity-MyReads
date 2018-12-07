import React, { Component } from 'react';
import Navigation from './Navigation'

class NotFound extends Component {

   render() {

     return (
       <div id='main'>
          <Navigation home='' leaderboard='' newquestion='' />
          <div className='container'>
            <h1>Page not found.</h1>
            <p>The page you were looking for was not found.</p>
          </div>
       </div>
     );
  }
}

//connects Login component to store
export default NotFound  ;
