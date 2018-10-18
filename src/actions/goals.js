import { ADD_GOAL, REMOVE_GOAL, REOPEN_GOAL, COMPLETE_GOAL } from './types'

export const addGoal = goal => {
  return {
    type: ADD_GOAL,
    payload: { goal }
  }
}

export const removeGoal = goal => {
  return {
    type: REMOVE_GOAL,
    payload: { goal }
  }
}

export const reopenGoal = goal => {
  goal.complete = false
  goal.completed_at = null

  return {
    type: REOPEN_GOAL,
    payload: { goal }
  }
}

export const completeGoal = goal => {
  goal.complete = true
  goal.completed_at = new Date()

  return {
    type: COMPLETE_GOAL,
    payload: { goal }
  }
}
