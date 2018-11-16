import {Webcam} from './../models/webcam';

export interface AppState {
	webcamState: WebcamState;
}


export interface WebcamState {
	snapsorts: Webcam[];
	message: any;
}