// @flow

import React, { Component } from 'react'
import uuidv1 from 'uuid/v1'

import Button from '../components/Button'
import { NewGoalWrapper, GoalTitle, GoalInput } from '../styles/typography'

export class NewGoal extends Component {
  state = {
    title: '',
    description: '',
    validationSubmit: false
  }

  handleAddClick = event => {
    const { addGoal, navigation } = this.props
    const { title, description } = this.state

    this.setState({ validationSubmit: true })

    if (title !== '' && description !== '') {
      addGoal({
        id: uuidv1(),
        title,
        description,
        complete: false,
        completed_at: null
      })
      navigation.goBack()
    }
  }

  render() {
    const { title, description, validationSubmit } = this.state

    let titleValid = true
    let descriptionValid = true

    if (validationSubmit) {
      if (title === '') {
        titleValid = false
      }
      if (description === '') {
        descriptionValid = false
      }
    }

    return (
      <NewGoalWrapper>
        <GoalTitle>Add a new Goal</GoalTitle>
        <GoalInput
          valid={titleValid}
          onChangeText={title => this.setState({ title })}
          autoFocus
          placeholder="Title"
        />
        <GoalInput
          valid={descriptionValid}
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
