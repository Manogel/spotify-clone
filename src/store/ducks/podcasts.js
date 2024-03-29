import { createReducer, createActions} from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  loadRequest: null,
  loadSuccess: ['data'],
  loadFailure: null
})

export const PodcastsTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  data: []
})


export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_SUCCESS] : (state, {data}) => state.merge({data})
})
