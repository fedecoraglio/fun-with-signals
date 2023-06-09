import { Directive, HostListener, signal } from "@angular/core";

@Directive({
    selector: '[signalInput]',
    standalone: true
})
export class SignalInputDirective {

    value = signal('');

    @HostListener('input', ['$event']) onInput(event:any) {
        this.value.set(event.target.value);
    }
}
