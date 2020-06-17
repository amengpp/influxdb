// Libraries
import {produce} from 'immer'

// Actions
import {Action} from 'src/data/actions/thunks'

interface QueryResultsState {
  files: string[] | null
  timeInterval: string
}

export interface DataState {
  queryResultsByQueryID: {[queryID: string]: QueryResultsState}
}

export const initialState: DataState = {
  queryResultsByQueryID: {},
}

export const dataReducer = (
  state: DataState = initialState,
  action: Action
): DataState => {
  switch (action.type) {
    case 'SET_QUERY_RESULTS_BY_QUERY': {
      return produce(state, draftState => {
        const {queryID, files} = action
        if (queryID && files.length) {
          draftState.queryResultsByQueryID[queryID] = {
            files,
            timeInterval: 'now',
          }
        }
      })
    }
  }

  return state
}
