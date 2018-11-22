import React from 'react';

function HomeTabs(props) {
    return (
        <nav className='tabs'>
          <button  onClick={()=>props.switchDisplay('Unanswered')} className={props.unanswered} >Unanswered</button>
          <button onClick={()=>props.switchDisplay('Answered')} className={props.answered} >Answered</button>
        </nav>
    );
}

export default HomeTabs;
