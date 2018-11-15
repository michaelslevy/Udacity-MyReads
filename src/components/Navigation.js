import React from 'react';
import { Navigation } from 'react-router-dom'

function Navigation(props) {
    return (
        <nav className='tabs'>
          <Link
            to='/'
            className={props.home}
          >Home</Link>
          <Link
            to='/leaderboard'
            className={props.leaderboard}
          >Leaderboard</Link>
          <Link
            to='/new-question'
            className={props.newquestion}
          >New Question</Link>
          <a href=''>Logout</a>
        </nav>
    );
}

export default Navigation;
