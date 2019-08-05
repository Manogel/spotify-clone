import { combineReducers } from 'redux';
import { reducer as podcasts } from './podcasts'
import { reducer as player } from './player'


const reducers = combineReducers({
  // Remova essa linha depois de adicionar seus ducks
  podcasts,
  player
});

export default reducers;
