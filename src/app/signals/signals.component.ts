import { Component, signal } from '@angular/core';
import { CodeDirective } from '../code.directive';
import { TuiButton } from '@taiga-ui/core';
import { TuiCarousel } from '@taiga-ui/kit';

@Component({
  selector: 'app-signals',
  imports: [CodeDirective, TuiButton, TuiCarousel],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss',
})
export class SignalsComponent {
  count = signal(0);

  onChangeSignal(count: number) {
    this.count.set(count);
  }
}
