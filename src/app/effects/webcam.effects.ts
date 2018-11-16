import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import { of } from 'rxjs/observable/of';
import * as fromActions from '../actions/webcam.actions';
import { WebcamService } from '../services/webcam.service';

@Injectable()
export class WebcamEffects {

  constructor(
    private actions$: Actions,
    private webcamService: WebcamService
  ) {}      

  @Effect() 
  loadAllSnapsorts$: Observable<Action> = this.actions$
    .ofType(fromActions.SHOW_ALL)
    .switchMap(() => 
       this.webcamService.getAllSnapsorts()
       .map(data => new fromActions.ShowAllSuccessAction(data)) 
    );

    @Effect() 
    createWebcam$: Observable<Action> = this.actions$
      .ofType<fromActions.CreateAction>(fromActions.CREATE)
      .map(action => action.payload)
      .mergeMap(article => 
           this.webcamService.createWebcam(article)
           .map(res => new fromActions.CreateSuccessAction(res)) 
           .catch(error => of(new fromActions.CreateFailureAction(error)))
      );
}