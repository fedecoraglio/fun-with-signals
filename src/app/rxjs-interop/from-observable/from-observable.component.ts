import { AsyncPipe } from "@angular/common";
import { Component, OnDestroy } from "@angular/core";
import { delay, from, interval, Subject, take, tap } from "rxjs";
import { fromObservable } from "./fromObservable";
@Component({
  standalone: true,
  selector: "from-observable",
  template: `
    <h1>Observable</h1>
    {{ values | async }}
    <h1>Signal</h1>
    {{ signalValue() }}
  `,
  imports: [AsyncPipe],
})
export class FromObservableComponent implements OnDestroy {
  private destroy$ = new Subject<void>();
  values = interval(1000).pipe(take(10));

  signalValue = fromObservable(interval(1000).pipe(take(10)), 0, this.destroy$);

  ngOnDestroy() {
    this.destroy$.next();
  }
}
