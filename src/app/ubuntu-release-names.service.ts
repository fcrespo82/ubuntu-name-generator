import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UbuntuReleaseNamesService {

  constructor(private http: HttpClient) {
  }

  /**
   * getNamesCVS
  */
  public getNamesCVS(): Observable<any> {
    return this.http.get('https://debian.pages.debian.net/distro-info-data/ubuntu.csv', {
      responseType: 'text'
    }).pipe(
      map((data: String) => {
        let lines = data.split('\n');
        lines.splice(0, 1);
        lines.pop();

        let nameArray = lines.map(item => {
          let fields = item.split(',');
          let version = fields[0].replace('LTS', '').trim();
          let codename = fields[1];
          let adjective = codename.split(' ')[0];
          let animal = codename.split(' ')[1];
          return { adjective, animal, version };
        });
        // nameArray.sort((a, b) => {
        //   return parseInt(b.version.replace('.', '')) - parseInt(a.version.replace('.', ''));
        // })
        nameArray.reverse();
        return nameArray;
      })
    );
  }

}
