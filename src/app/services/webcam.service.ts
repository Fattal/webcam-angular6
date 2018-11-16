import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Headers, Http, RequestOptions} from "@angular/http";
import { Observable } from 'rxjs';
import { Webcam } from '../models/webcam';

@Injectable()
export class WebcamService {
    constructor(private http: HttpClient) { }

    url = "api/snapsorts";
    
    getAllSnapsorts(): Observable<Webcam[]> {
        return this.http.get<Webcam[]>(this.url);
    }
    createWebcam(webcam: Webcam): Observable<Webcam> {
        return this.http.post<Webcam>(this.url, webcam);
    }
}