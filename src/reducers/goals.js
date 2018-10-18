import {
  ADD_GOAL,
  REMOVE_GOAL,
  REOPEN_GOAL,
  COMPLETE_GOAL
} from '../actions/types'

const INITIAL_STATE = {
  goals: [
    {
      title: 'My first goal',
      description: 'This goal will be completed very soon',
      complete: false,
      completed_at: null
    }
  ]
}

const Goals = (state = INITIAL_STATE, action) => {
  const { goals } = state
  let index

  switch (action.type) {
    case ADD_GOAL:
      return {
        ...state,
        goals: [action.payload.goal].concat(state.goals)
      }
    case REMOVE_GOAL:
      return Object.assign({}, state, {
        goals: [
          ...state.goals,
          state.goals.filter(g => g !== action.payload.goal)
        ]
      })
    case REOPEN_GOAL:
    case COMPLETE_GOAL:
      index = goals.findIndex(({ id }) => id === action.payload.goal.id)
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
