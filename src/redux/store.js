import {configureStore} from '@reduxjs/toolkit';
import sampleReducer from './reducer/sampleReducer';
import recomendMovieReducer from './reducer/recomendMovie';

export default configureStore({
  reducer: {
    counter: sampleReducer,
    recomendMovie: recomendMovieReducer,
  },
  //   middleware: getDefaultMiddleware =>
  //     getDefaultMiddleware({
  //       immutableCheck: false,
  //       serializableCheck: false,
  //     }),
});
