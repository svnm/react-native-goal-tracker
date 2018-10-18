// @flow

import React from 'react'
import { format } from 'date-fns'
import Swipeout from 'react-native-swipeout'

import { CompleteButton } from './buttons/CompleteButton'
import { IncompleteButton } from './buttons/IncompleteButton'
import { EditButton } from './buttons/EditButton'

import {
  GoalCardWrapper,
  GoalCardInnerWrapper,
  GoalWrapper,
  CardTitle,
  CardDescription,
  Date,
  CompleteWrapper
} from '../styles/typography'

export const GoalCard = ({
  goal,
  reopenGoal,
  completeGoal,
  removeGoal,
  navigation
}) => (
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
            <CompleteButton onPress={() => reopenGoal(goal)} />
          ) : (
            <IncompleteButton onPress={() => completeGoal(goal)} />
          )}
        </CompleteWrapper>
        <CompleteWrapper>
          <EditButton
            onPress={() => navigation.navigate('Edit', { id: goal.id })}
          />
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
