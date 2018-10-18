import React, { Component } from 'react'
import { connect } from 'react-redux'

import { ContainerView } from '../styles/typography'
import { editGoal } from '../actions'
import { EditGoal } from '../components/EditGoal'

class EditScreen extends Component {
  render() {
    const { navigation, goals } = this.props
    const id = navigation.getParam('id')
    const goal = goals.find(g => g.id === id)

    return (
      <ContainerView>
        {goal && <EditGoal {...this.props} goal={goal} />}
      </ContainerView>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editGoal: goal => dispatch(editGoal(goal))
  }
}

const mapStateToProps = state => ({
  goals: state.Goals.goals
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditScreen)
