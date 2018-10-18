import uuidv1 from 'uuid/v1'

import {
  ADD_GOAL,
  EDIT_GOAL,
  REMOVE_GOAL,
  REOPEN_GOAL,
  COMPLETE_GOAL
} from '../actions/types'

const INITIAL_STATE = {
  goals: [
    {
      id: uuidv1(),
      title: 'Basketball training',
      description:
        'Train shooting for 1 hour, passing for 1 hour and defence 1 hours',
      complete: true,
      completed_at: Date.now()
    },
    {
      id: uuidv1(),
      title: 'Gym',
      description: 'Running, weights, plyometrics, squats and stretching',
      complete: false,
      completed_at: null
    },
    {
      id: uuidv1(),
      title: 'Tennis practice match',
      description: 'Play 3 sets practice match',
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
    case EDIT_GOAL:
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
