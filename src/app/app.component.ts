import { Component } from '@angular/core';
import { combineLatest, forkJoin, interval, of, ReplaySubject, timer, firstValueFrom, lastValueFrom, EMPTY } from 'rxjs';
import { concatMap, filter, groupBy, map, mergeMap, take, timeout, delay } from 'rxjs/operators';

import { mappingLogger } from './utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  numbers$ = of(1, 2, null, 3, 4, undefined, 5, 0, 6);

  count1To5$ = interval(1000).pipe(
    take(5),
    map(i => i + 1)
  );

  count6To9$ = interval(1000).pipe(
    take(4),
    map(i => i + 6)
  );

  ticker2s$ = timer(3000, 2000);
  httpCall1$ = of(41).pipe(delay(2000));
  httpCall2$ = of(42);

  constructor() {
  }
}
