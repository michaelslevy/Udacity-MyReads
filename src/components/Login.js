import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Login extends Component {
   render() {
     return (
       <div id='loginBox'>
          <h1 class='logo'>Would you rather?</h1>
          <div id='selectBox'>
            <nav class='tabs'><a href='' class='active'>Login</a><a href=''>Register</a></nav>
            <div id='userSelector'>
            <div class='input'>please select user</div>
            <ul>
              <li><img src='http://style.anu.edu.au/_anu/4/images/placeholders/person_8x10.png' align='absmiddle' />User 1</li>
              <li><img src='http://style.anu.edu.au/_anu/4/images/placeholders/person_8x10.png' align='absmiddle' />User 2</li>
              <li><img src='http://style.anu.edu.au/_anu/4/images/placeholders/person_8x10.png' align='absmiddle' />User 3</li>
              <li><img src='http://style.anu.edu.au/_anu/4/images/placeholders/person_8x10.png' align='absmiddle' />User 4</li>
            </ul>
            </div>
          </div>
       </div>
     );
  }
}

export default Login;
