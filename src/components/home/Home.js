import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import Navigation from '../Navigation'
import HomeTabs from '../home/HomeTabs'
import QuestionList from './QuestionList'


//function passed to Reduxes Connect to populate store
const mapStateToProps = (store) => {
  return {

  }
}

//function passed to Reduxes Connect to dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {

  }
}

class Home extends Component {

  /* NOTE TO REVIEWER
  * Decision made to use local state for tab switch since status isn't shared with other components.
  */
  constructor() {
      super();
      this.switchDisplay = this.switchDisplay.bind(this);
      this.state={
        display:"Unanswered",
        answered: '',
        unanswered:'active',
      }
    }

    switchDisplay = (display) => {
        let answered, unanswered;
        if(display=="Unanswered"){
          answered='';
          unanswered='active';
        } else {
          answered='active';
          unanswered='';
        }
        this.setState({display,unanswered,answered});

    }


  componentDidMount() {
    document.body.classList.remove('login');
  }

   render() {
     return (
       <div id='main'>
          <Navigation home='active' leaderboard='' newquestion='' />
          <div className='container'>
            <h2>{this.state.display} Questions</h2>
            <HomeTabs switchDisplay={this.switchDisplay} answered={this.state.answered} unanswered={this.state.unanswered} />
            <QuestionList />
          </div>

       </div>
     );
  }
}

//connects Login component to store
export default connect(mapStateToProps, mapDispatchToProps)(Home);
