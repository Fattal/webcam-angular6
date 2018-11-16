import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs';
import {Observable} from 'rxjs';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import { MatTabChangeEvent } from '@angular/material';
import {Webcam} from '../../models/webcam';
import { Store } from '@ngrx/store';
import { WebcamState } from '../../reducers/app.states';
import * as fromReducer from '../../reducers/webcam.reducer';
import * as fromActions from '../../actions/webcam.actions';

export interface SelfieCategory {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-webcam',
  templateUrl: './webcam.component.html',
  styleUrls: ['./webcam.component.css']
})
export class WebcamComponent implements OnInit {


  snapsorts$: Observable<Webcam[]>;
  message$: Observable<any>;
  snapsorts_length:number;

 
  // toggle webcam on/off
  public showWebcam = true;
  public allowCameraSwitch = true;
  public multipleWebcamsAvailable = false;
  public deviceId: string;
  public videoOptions: MediaTrackConstraints = {
    width: {ideal: 1024},
    height: {ideal: 576}
  };
  public errors: WebcamInitError[] = [];

  // latest snapshot
  public webcamImage: WebcamImage = null;

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
  private nextWebcam: Subject<boolean|string> = new Subject<boolean|string>();

  public ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      });
  }

  constructor( private store: Store<WebcamState>) {
    this.snapsorts$ = store.select(fromReducer.getWebcams);
    this.message$ = store.select(fromReducer.getMessage);
   }

  public triggerSnapshot(): void {
    this.trigger.next();
  }

  // public toggleWebcam(): void {
  //   this.showWebcam = !this.showWebcam;
  // }

  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }

  // public showNextWebcam(directionOrDeviceId: boolean|string): void {
  //   // true => move forward through devices
  //   // false => move backwards through devices
  //   // string => move to device with given deviceId
  //   this.nextWebcam.next(directionOrDeviceId);
  // }

  public handleImage(webcamImage: WebcamImage): void {
    console.info('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
    this.snapsorts$.subscribe(item=>{
      this.snapsorts_length+=1;
    });
  }
  // public cameraWasSwitched(deviceId: string): void {
  //   console.log('active device: ' + deviceId);
  //   this.deviceId = deviceId;
  // }

// public onLinkClick(event: MatTabChangeEvent){
//   console.log('event => ', event);
//   console.log('index => ', event.index);
//   console.log('tab => ', event.tab);
//   this.ngOnInit();
// }
createSnap(){
  let webcam:Webcam= {
    id: this.snapsorts_length+1,
    imageurl_as_base64:this.webcamImage.imageAsDataUrl
  };
  this.store.dispatch(new fromActions.CreateAction(webcam));
}
  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

}
