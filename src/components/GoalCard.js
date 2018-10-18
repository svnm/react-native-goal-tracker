// @flow

import React from 'react'
import { format } from 'date-fns'
import Swipeout from 'react-native-swipeout'

import { Complete } from './Complete'
import { Incomplete } from './Incomplete'
import {
  GoalCardWrapper,
  GoalCardInnerWrapper,
  GoalWrapper,
  CardTitle,
  CardDescription,
  Date,
  CompleteWrapper
} from '../styles/typography'

export const GoalCard = ({ goal, reopenGoal, completeGoal, removeGoal }) => (
  <GoalCardWrapper>
    <Swipeout
      right={[
        {
          text: 'Remove',
          backgroundColor: '#ff4136',
          onPress: () => removeGoal(goal)
        }
      ]}
      autoClose={true}
      backgroundColor="transparent"
    >
    <GoalCardInnerWrapper>
      <CompleteWrapper>
        {goal.complete ? (
          <Complete onPress={() => reopenGoal(goal)} />
        ) : (
          <Incomplete onPress={() => completeGoal(goal)} />
        )}
      </CompleteWrapper>
      <GoalWrapper>
        {goal.completed_at && (
          <Date>{`Goal completed: ${format(
            goal.completed_at,
            'DD MMM, YYYY'
          )}`}</Date>
        )}
        <CardTitle>{goal.title}</CardTitle>
        <CardDescription>{goal.description}</CardDescription>
      </GoalWrapper>
      </GoalCardInnerWrapper>
    </Swipeout>
  </GoalCardWrapper>
)
