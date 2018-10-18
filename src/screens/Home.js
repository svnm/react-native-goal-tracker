import React, { Component } from 'react'
import { connect } from 'react-redux'

import { ContainerView } from '../styles/typography'
import { GoalList } from '../components/GoalList'
import { addGoal, removeGoal, reopenGoal, completeGoal } from '../actions/goals'

class HomeScreen extends Component {
  render() {
    return (
      <ContainerView>
        <GoalList {...this.props} />
      </ContainerView>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addGoal: goal => dispatch(addGoal(goal)),
    removeGoal: goal => dispatch(removeGoal(goal)),
    reopenGoal: goal => dispatch(reopenGoal(goal)),
    completeGoal: goal => dispatch(completeGoal(goal))
  }
}

const mapStateToProps = state => ({
  goals: state.Goals.goals
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
