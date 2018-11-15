import React from 'react';
import { Link } from 'react-router-dom'

function LoginTabs(props) {
    return (
        <nav className='tabs'>
          <Link
            to='/login'
            className={props.login}
          >Login</Link>
          <Link
            to='/register'
            className={props.register}
          >Register</Link>
        </nav>
    );
}

export default LoginTabs;
