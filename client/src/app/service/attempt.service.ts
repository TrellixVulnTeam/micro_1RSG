import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AttemptPayload} from "../dto/attempt-payload";
import {Observable} from "rxjs";
import {AttemptResponse} from "../dto/attempt-response";

@Injectable({
  providedIn: 'root'
})
export class AttemptService {

  private url =  'http://localhost:8080/attempts';

  constructor(private http: HttpClient) {

  }

  getLast10AttemptsByAlias(alias: String): Observable<AttemptResponse[]>{

    return this.http.get<AttemptResponse[]>(this.url + '?alias=' + alias);
  }

  postAttempt(payload: AttemptPayload){

    return this.http.post(this.url, payload, {observe: 'response'});
  }
}
