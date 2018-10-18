import uuidv1 from 'uuid/v1'

import {
  ADD_GOAL,
  REMOVE_GOAL,
  REOPEN_GOAL,
  COMPLETE_GOAL
} from '../actions/types'

const INITIAL_STATE = {
  goals: [
    {
      id: uuidv1(),
      title: 'My first goal to complete in a few seconds',
      description: 'This goal is important. It will be completed as soon as possible',
      complete: false,
      completed_at: null
    }
  ]
}

const Goals = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_GOAL:
      return {
        ...state,
        goals: [action.payload.goal].concat(state.goals)
      }
    case REMOVE_GOAL:
      return {
        ...state,
        goals: state.goals.filter(g => g !== action.payload.goal)
      }
    case REOPEN_GOAL:
    case COMPLETE_GOAL:
      const { goals } = state
      const index = goals.findIndex(({ id }) => id === action.payload.goal.id)

      if (index > -1) {
        goals[index] = action.payload.goal
      }

      return {
        ...state,
        goals: [...goals]
      }
    default:
      return state
  }
}
export default Goals
