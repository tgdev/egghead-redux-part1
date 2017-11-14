import { createStore } from 'redux';

import todoApp from './reducers/root.reducer';

const store = createStore(todoApp);

export default store;
