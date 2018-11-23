import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import * as userActionCreators  from '../../actions/user' //combine user actions into a single object
import { Link } from 'react-router-dom'


//function passed to Reduxes Connect to populate store
const mapStateToProps = (store) => {
  return {
    users: store.user.users
  }
}

//function passed to Reduxes Connect to dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
      getPeople: () => dispatch(userActionCreators.getUsers())
  }
}

  class Question extends Component {

    componentDidMount() {
      this.props.getPeople();
   }

   render() {

     let author=this.props.users.filter((user)=>user.id==this.props.question.author);
     let optionOne=this.props.question.optionOne.text;
     let optionTwo=this.props.question.optionTwo.text;

     return (
            <div className="question">
                <header>{author[0].name} Asks:</header>
                <div className='body'>
                  <div className='img'>
                    <img src={author[0].avatarURL}/>
                  </div>
                  <div className='copy'>
                    <h2>Would you rather?</h2>
                    <p><strong>►</strong> {optionOne}</p>
                    <p><strong>►</strong> {optionTwo}</p>
                    <Link to={"questions/"+this.props.question.id} className='link'>Go to poll</Link>
                  </div>
                </div>
            </div>

     );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Question);
