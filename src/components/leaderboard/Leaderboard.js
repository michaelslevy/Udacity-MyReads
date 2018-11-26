import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import Navigation from '../Navigation'
import {getQuestions}  from '../../actions/questions'
import {getUsers}  from '../../actions/user'

//function passed to Reduxes Connect to populate store
const mapStateToProps = (store) => {
  return {
    loading: store.user.loading,
    users: store.user.users,
    questions: store.questions.questions,
  }
}

//function passed to Reduxes Connect to dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    getQuestions: () => dispatch(getQuestions()),
    getUsers: () => dispatch(getUsers())
  }
}

class Leaderboard extends Component {

  constructor(){
    super();
    this.state={
      mergedUsers:[]
    }
  }

   componentDidMount() {

      this.props.getQuestions();
      this.props.getUsers();

      let mergedUsers=[];

      for (let i=0; i<this.props.users.length; i++){
        let id, name, userID, avatarURL, questionsAnswered, questionsAsked, optionOneCount, optionTwoCount, questionsAuthored, score;

        name=this.props.users[i].name
        userID=this.props.users[i].id;
        optionOneCount = this.props.questions.filter(q=>q.optionOne.votes.includes(userID)).length;
        optionTwoCount = this.props.questions.filter(q=>q.optionTwo.votes.includes(userID)).length;
        avatarURL=this.props.users[i].avatarURL;
        questionsAnswered=optionOneCount+optionTwoCount;
        questionsAuthored=this.props.questions.filter(q=>q.author===userID).length;
        score=questionsAnswered+questionsAuthored;

        let user={ userID, name, avatarURL, questionsAnswered, questionsAuthored, score };
        mergedUsers.push(user);

      }

      this.setState({mergedUsers});

   }


   render() {
      console.log(this.state);
     return (
       <div id='main'>
          <Navigation home='' leaderboard='active' newquestion='' />
          <div className='container'>
            <h1>Leaderboard</h1>
            <div id='questionBox'>
              {this.state.mergedUsers.sort((a,b)=>b.score-a.score).map((user)=>
                <div key='{user.id}' className='UserScoreCard'>
                  <h2>{user.name}</h2>
                  <div className='cardData'>
                  <div className='userInfo'><img src={user.avatarURL} /></div>
                  <div className='content'>
                    <p>Questions answered: {user.questionsAnswered }</p>
                    <p>Questions asked: {user.questionsAuthored }</p>
                  </div>
                  <div className='score'>
                    score
                    <mark>
                      {user.score}
                    </mark>
                  </div>
                </div>
              </div>
              )}
            </div>
          </div>
       </div>
     );
  }
}

//connects Login component to store
export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard)  ;
