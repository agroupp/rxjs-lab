import { Component, OnInit } from '@angular/core';

import { timer, Observable, Subject, ReplaySubject, of, AsyncSubject, from, interval } from 'rxjs';
import { delay, share, take, takeUntil, tap, switchMap, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-sharing-demo',
  templateUrl: './sharing-demo.component.html',
  styleUrls: ['./sharing-demo.component.scss']
})
export class SharingDemoComponent implements OnInit {
  count1To5$ = interval(500).pipe(
    take(5),
    map(i => {
      this.mappingsCount++;
      console.log('Mapped value: ', i);
      return i + 1;
    })
  );

  manualSubscriptionTicker$?: Observable<number>;

  mappingsCount = 0;

  constructor() { }

  ngOnInit(): void {
  }


  manuallySubscribe() {
    this.count1To5$.subscribe(x => console.log('Manual subscription. X = ', x));
  }
}
