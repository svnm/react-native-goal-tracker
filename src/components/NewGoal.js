// @flow

import React, { Component } from 'react'
import Button from '../components/Button'
import { NewGoalWrapper, GoalTitle, GoalInput } from '../styles/typography'

export class NewGoal extends Component {
  state = {
    title: null,
    description: null
  }

  handleAddClick = event => {
    const { addGoal } = this.props
    const { title, description } = this.state

    if (title !== null && description !== null) {
      addGoal({ title, description, complete: false, completed_at: null })
    }
  }

  render() {
    const { title, description } = this.state

    return (
      <NewGoalWrapper>
        <GoalTitle>Add a new Goal</GoalTitle>
        <GoalInput
          onChangeText={title => this.setState({ title })}
          autoFocus
          placeholder="Title"
        />
        <GoalInput
          onChangeText={description => this.setState({ description })}
          placeholder="Description"
        />
        <Button
          text="Add goal"
          onPress={() => {
            this.handleAddClick()
          }}
        />
      </NewGoalWrapper>
    )
  }
}
