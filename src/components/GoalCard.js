// @flow

import React from 'react'
import { format } from 'date-fns'

import { Complete } from './Complete'
import { Incomplete } from './Incomplete'
import {
  GoalCardWrapper,
  GoalWrapper,
  CardTitle,
  CardDescription,
  Date,
  CompleteWrapper
} from '../styles/typography'

export const GoalCard = ({ goal, reopenGoal, completeGoal }) => (
  <GoalCardWrapper>
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
  </GoalCardWrapper>
)
