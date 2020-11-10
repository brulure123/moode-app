import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PandorabotApiService {

  private APP_ID: string = environment.PandoratBot.app_id;
  private BOTNAME: string = environment.PandoratBot.botname;
  private USERKEY: string = environment.PandoratBot.user_key;
  private HOST: string = environment.PandoratBot.host;
  private PROTOCOL: string = environment.PandoratBot.protocol;

  public sessionId: string;

  constructor(private http: HttpClient) {
  }

  talk(pattern: string): Observable<any>{
    try{
      let clientName: string;
      const c = Math.round(Math.random() * 1000001).toString();
      clientName = c;
      const url = this.PROTOCOL + '://' + this.HOST + '/talk/' + this.APP_ID + '/' + this.BOTNAME + '?user_key=' + this.USERKEY + '&client_name=' + clientName + '&sessionid=' + this.sessionId + '&input=' + encodeURIComponent(pattern) + '&extra=true';
      const params = {};
      const headers = {};

      const response = this.http.post(url, params, headers);
      
      return response;
    }catch (error){
      console.error(error.error);
    }
  }
}
