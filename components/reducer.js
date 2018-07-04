// INITIAL STATE

const initialState = { data: [], pages: 0, activePage: 1, count: 0 }

// ACTION TYPES

const LOADED_DATA = 'LOADED_DATA'

// ACTION CREATORS

const loadedData = (data, page) => ({ type: LOADED_DATA, data, page })

// THUNK CREATORS
// Arguments available: (dispatch, getState, { axios, history})
export const loadData = page => {
  return async (dispatch, _, { axios }) => {
    const res = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    )
    const data = res.data
    dispatch(loadedData(data, page))
  }
}

// REDUCER

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADED_DATA:
      state = {
        ...state,
        data: action.data.results,
        pages: action.data.info.pages,
        activePage: action.page,
        count: action.data.info.count
      }
      return state
    default:
      return state
  }
}
