import { Action } from '@ngrx/store';
import {Webcam} from '../models/webcam';

export const SHOW_ALL = '[WEBCAM] Show All';
export const SHOW_ALL_SUCCESS = '[WEBCAM] Show All Success';
export const CREATE = '[WEBCAM] Create';
export const CREATE_SUCCESS = '[WEBCAM] Create Success';
export const CREATE_FAILURE = '[WEBCAM] Create Failure';


export class ShowAllAction implements Action {
    readonly type = SHOW_ALL;
}
export class ShowAllSuccessAction implements Action {
    readonly type = SHOW_ALL_SUCCESS;
    constructor(public payload: Webcam[]) {}
}
export class CreateAction implements Action {
    readonly type = CREATE;
    constructor(public payload: Webcam) {}
  }
  export class CreateSuccessAction implements Action {
    readonly type = CREATE_SUCCESS;
    constructor(public payload: Webcam) {}
  }
  export class CreateFailureAction implements Action {
    readonly type = CREATE_FAILURE;
    constructor(public payload: any) {}
  }


export type ALL_REDUCER_ACTIONS = ShowAllSuccessAction|CreateSuccessAction
|CreateFailureAction;  