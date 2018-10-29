import {LOCAL_STORAGE_LOAD, UPDATE_STATE_LOCAL_STORAGE, LOCAL_STORAGE_SAVE, LOCAL_STORAGE_CLEAN} from '../actions';

export default() => ({dispatch, getState}) => next => (action) => {
  const state = getState();
  switch (action.type) {
    case LOCAL_STORAGE_LOAD:
      dispatch({type: UPDATE_STATE_LOCAL_STORAGE, localStorage: loadLocalStorage()});
      return state;
    case LOCAL_STORAGE_SAVE:
      dispatch({
        type: UPDATE_STATE_LOCAL_STORAGE,
        localStorage: saveState(action.key, action.data)
      });
      return state;
    case LOCAL_STORAGE_CLEAN:
      cleanState();
      window.location.reload();
  }
  return next(action);
};

const loadLocalStorage = () => {
  try {
    const dataStore = [];
    for (const key in localStorage) {
      dataStore[key] = JSON.parse(localStorage.getItem(key));
    }
    if (dataStore == null) {
      return undefined;
    }
    return dataStore;
  } catch (err) {
    return undefined;
  }
};

const saveState = (key, data) => {
  try {
    const serializedState = JSON.stringify(data);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    // ingnore
  }
  return loadLocalStorage();
};

const cleanState = () => {
  try {
    localStorage.clear();
  } catch (err) {
    // ingnore
  }
};
