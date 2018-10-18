// @flow

import React, { Component } from 'react'
import { TextInput, View } from 'react-native'
import Button from '../components/Button'
import { TitleText } from '../styles/typography'

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
      <View style={{ flex: 1, width: '100%' }}>
        <TitleText>Add a new Goal</TitleText>
        <TextInput
          onChangeText={title => this.setState({ title })}
          style={{
            fontSize: 24,
            backgroundColor: 'white',
            width: '100%',
            padding: 10,
            marginBottom: 20
          }}
          autoFocus
          placeholder="Title"
        />
        <TextInput
          onChangeText={description => this.setState({ description })}
          style={{
            fontSize: 24,
            backgroundColor: 'white',
            width: '100%',
            padding: 10,
            marginBottom: 20
          }}
          placeholder="Description"
        />
        <Button
          text="Add goal"
          onPress={() => {
            this.handleAddClick()
          }}
        />
      </View>
    )
  }
}
