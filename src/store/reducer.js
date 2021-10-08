//combineReducers将redux的reducers进行整合
import { combineReducers } from 'redux-immutable';

import { reducer as recommendReducer } from '../pages/discover/child-pages/recommend/store';
import { reducer as playerReducer } from '../pages/player/store';
import { reducer as toplistReducer } from '../pages/discover/child-pages/toplist/store';
import { reducer as songsReducer } from '../pages/discover/child-pages/songs/store';
import { reducer as themeHeaderReducer } from '@/components/app-header/store';
import { reducer as searchReducer } from '@/pages/search/store'
import { reducer as songDetailRducer } from '@/pages/song-detail/store'
import { reducer as loginReducer } from '@/components/theme-login/store'
import { reducer as testReducer } from '@/pages/test/store/index'


// 多个reducer合并
const cRducer = combineReducers({
  recommend: recommendReducer,
  player: playerReducer,
  toplist: toplistReducer,
  songList: songsReducer,
  themeHeader: themeHeaderReducer,
  search: searchReducer,
  songDetail: songDetailRducer,
  loginState: loginReducer,
  testReducer
});

export default cRducer;
