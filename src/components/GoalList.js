// @flow

import React, { Component } from 'react'
import { View, FlatList } from 'react-native'

import { GoalCard } from './GoalCard'
import { GoalListWrapper } from '../styles/typography'

export class GoalList extends Component {
  render() {
    const { goals, reopenGoal, completeGoal } = this.props

    return (
      <GoalListWrapper>
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
      </GoalListWrapper>
    )
  }
}
