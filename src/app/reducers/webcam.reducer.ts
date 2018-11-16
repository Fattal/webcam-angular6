import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromActions from '../actions/webcam.actions';
import { WebcamState } from './app.states';

export const initialState: WebcamState = { snapsorts: [], message: ''};

export function reducer(state = initialState, action: fromActions.ALL_REDUCER_ACTIONS): WebcamState {
  switch(action.type) {
    case fromActions.SHOW_ALL_SUCCESS: {
      return {snapsorts: action.payload, message: 'Success'};
    }
    case fromActions.CREATE_SUCCESS: {
      return { snapsorts: [...state.snapsorts,action.payload], message: 'Snapsort Created.'};
    } 
    case fromActions.CREATE_FAILURE: {
      return { snapsorts: [], message: action.payload};
    }
    default: {
      return state;
    }
  }	
}

export const getWebcamState = createFeatureSelector<WebcamState>('webcamState');

export const getWebcams = createSelector(
  getWebcamState, 
    (state: WebcamState) => state.snapsorts 
);

export const getMessage = createSelector(
  getWebcamState, 
  (state: WebcamState) => state.message
);