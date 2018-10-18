// @flow

import React from 'react'
import styled from 'styled-components/native'
import { format } from 'date-fns'

import { Complete } from './Complete'
import { Incomplete } from './Incomplete'
import {
  CardTitle,
  CardDescription,
  Date,
  CompleteWrapper
} from '../styles/typography'

export const GoalCard = ({ goal, reopenGoal, completeGoal }) => (
  <GoalWrapper>
    <CompleteWrapper>
      {goal.complete ? (
        <Complete onPress={() => reopenGoal(goal)} />
      ) : (
        <Incomplete onPress={() => completeGoal(goal)} />
      )}
    </CompleteWrapper>
    <Contents>
      {goal.completed_at && (
        <Date>{`Goal completed: ${format(
          goal.completed_at,
          'DD MMM, YYYY'
        )}`}</Date>
      )}
      <CardTitle>{goal.title}</CardTitle>
      <CardDescription>{goal.description}</CardDescription>
    </Contents>
  </GoalWrapper>
)

const GoalWrapper = styled.View`
  background: ${props => props.theme.WHITE};
  display: flex;
  flex-direction: row;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
`

const Contents = styled.View`
  display: flex;
`
