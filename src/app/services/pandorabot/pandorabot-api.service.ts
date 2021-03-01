import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PandorabotApiService {

  private APP_ID: string = environment.PandoratBot.app_id;
  private BOTNAME: string = environment.PandoratBot.botname;
  private USERKEY: string = environment.PandoratBot.user_key;
  private HOST: string = environment.PandoratBot.host;
  private PROTOCOL: string = environment.PandoratBot.protocol;

  constructor() {
  }

  talk(pattern: string, sessionId: string, callback: (arg0: any) => void){
      let clientName: string;
      const c = Math.round(Math.random() * 1000001).toString();
      clientName = c;
      const url = this.PROTOCOL + '://' + this.HOST + '/talk/' + this.APP_ID + '/' + this.BOTNAME + '?user_key=' + this.USERKEY + '&client_name=' + clientName + '&sessionid=' + sessionId + '&input=' + encodeURIComponent(pattern) + '&extra=true';

      const xhr = new XMLHttpRequest();
      xhr.open('POST', url, true);
      xhr.send();
      xhr.onreadystatechange = () => {
          if (xhr.readyState === 4 && xhr.status === 200) {
              const p = JSON.parse(xhr.responseText);
              callback(p);
          }
      };
  }
}
