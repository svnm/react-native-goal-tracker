// @flow

import React, { Component } from 'react'

import Button from '../components/buttons/Button'
import { EditGoalWrapper, GoalTitle, GoalInput } from '../styles/typography'

export class EditGoal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: props.goal.title,
      description: props.goal.description,
      validationSubmit: true
    }
  }

  handleEditClick = event => {
    const { editGoal, navigation, goal } = this.props
    const { title, description } = this.state

    this.setState({ validationSubmit: true })

    if (title !== '' && description !== '') {
      editGoal(
        Object.assign({}, goal, {
          title: title,
          description: description
        })
      )
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
      <EditGoalWrapper>
        <GoalTitle>Edit your Goal</GoalTitle>
        <GoalInput
          multiline={true}
          valid={titleValid}
          value={title}
          onChangeText={title => this.setState({ title })}
          autoFocus
          placeholder="Title"
        />
        <GoalInput
          multiline={true}
          valid={descriptionValid}
          value={description}
          onChangeText={description => this.setState({ description })}
          placeholder="Description"
        />
        <Button
          text="Save"
          onPress={() => {
            this.handleEditClick()
          }}
        />
      </EditGoalWrapper>
    )
  }
}
