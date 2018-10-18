// @flow

import React, { Component } from 'react'
import { View, FlatList } from 'react-native'

import { GoalCard } from './GoalCard'

export class GoalList extends Component {
  render() {
    const { goals, reopenGoal, completeGoal } = this.props

    return (
      <View style={{ flex: 1, width: '100%' }}>
        <FlatList
          data={goals}
          keyExtractor={(item, index) => index}
          renderItem={({ item: goal, index }) => {
            return (
              <GoalCard
                id={index}
                goal={goal}
                reopenGoal={reopenGoal}
                completeGoal={completeGoal}
              />
            )
          }}
        />
      </View>
    )
  }
}
