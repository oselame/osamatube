import { combineReducers } from 'redux';

import buscaReducer from './buscaReducer';
import reproduzVideoReducer from './reproduzVideoReducer';

const rootReducer = combineReducers({
    buscaReducer,
    reproduzVideoReducer
});

export default rootReducer;


