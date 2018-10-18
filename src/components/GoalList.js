// @flow

import React, { Component } from 'react'
import { View, FlatList } from 'react-native'

import { GoalCard } from './GoalCard'
import { GoalListWrapper } from '../styles/typography'

export class GoalList extends Component {
  render() {
    const {
      goals,
      reopenGoal,
      completeGoal,
      removeGoal,
      navigation
    } = this.props

    return (
      <GoalListWrapper>
        <FlatList
          data={goals}
          keyExtractor={goal => goal.id}
          renderItem={({ item: goal }) => {
            return (
              <GoalCard
                goal={goal}
                reopenGoal={reopenGoal}
                completeGoal={completeGoal}
                removeGoal={removeGoal}
                navigation={navigation}
              />
            )
          }}
        />
      </GoalListWrapper>
    )
  }
}
