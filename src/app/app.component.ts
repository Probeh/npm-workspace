import { Component } from '@angular/core';
import { NgxStorageService } from '@probeh/ngx-localstorage';
import { RetroGame } from './games.model';

@Component({
  selector: `app-root`,
  templateUrl: `./app.component.html`,
  styleUrls: [ `./app.component.scss` ]
})
export class AppComponent {
  title = `default`;

  constructor(private storage: NgxStorageService) {
    this.updateStorage(storage);
  }

  private updateStorage(storage: NgxStorageService) {
    const dash: string = `================`;
    const text = `${' '.repeat(dash.length)} Updated Storage Output ${' '.repeat(dash.length)}`;
    const line: string = `=`.repeat(text.length);
    const blnk: string = ` `.repeat(text.length);

    storage.updateStorage<RetroGame>("Games", RetroGame.random())
      .then((result: RetroGame[]) => {
        console.groupCollapsed(`%c${line}\n${text}\n${line}`,
          `color:pink; font-weight: bold; background-color: #6610f2;
          font-size: 12px; text-align:center; width: 100%; height: 200%;`);
        console.table(result);
        console.groupEnd();
      });
  }
}