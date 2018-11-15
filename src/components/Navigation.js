import React from 'react';
import { Link } from 'react-router-dom'


function Navigation(props) {
    return (
      <header className='layout'>
        <div className='container'>
        <span className='logo'>
          Would You Rather?
        </span>
        <nav className='primaryMenu'>
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
          </div>
        </header>
    );
}

export default Navigation;
