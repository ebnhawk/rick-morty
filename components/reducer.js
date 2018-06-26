// INITIAL STATE

const initialState = {}

// ACTION TYPES

const EXAMPLE_ACTION = 'EXAMPLE_ACTION'

// ACTION CREATORS

const didAction = someData => ({ type: EXAMPLE_ACTION, someData })

// THUNK CREATORS

export const doAction = () => {
  return async (dispatch, getState, { axios, history }) => {
    const res = await axios.get('API_URL')
    const someData = res.data
    dispatch(didAction(someData))
  }
}

// REDUCER

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
