import { createReducer, createActions} from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  setPodcastRequest: ['podcast', 'episodeId'],
  setPodcastSuccess: ['podcast'],
  setPodcastFailure: null,
  setCurrent: ['episodeId'],
  play: null,
  pause: null,
  next: null,
  prev: null,
  reset: null
})

export const PlayerTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  podcast: null,
  current: null,
  playing:false
})


export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_PODCAST_SUCCESS] : (state, {podcast}) => state.merge({podcast, current: podcast.tracks[0].id}),
  [Types.SET_CURRENT] : (state, {episodeId}) => state.merge({current: episodeId}),
  [Types.PLAY] : (state) => state.merge({playing: true}),
  [Types.PAUSE] : (state) => state.merge({playing: false}),
  [Types.RESET] : (state) => state.merge({playing: false, current: null}),
})
