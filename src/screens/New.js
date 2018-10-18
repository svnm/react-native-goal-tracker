import React, { Component } from 'react'
import { connect } from 'react-redux'

import { ContainerView } from '../styles/typography'
import { addGoal } from '../actions'
import { NewGoal } from '../components/NewGoal'

class NewScreen extends Component {
  render() {
    return (
      <ContainerView>
        <NewGoal {...this.props} />
      </ContainerView>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addGoal: goal => dispatch(addGoal(goal))
  }
}

const mapStateToProps = state => ({
  goals: state.Goals.goals
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewScreen)
