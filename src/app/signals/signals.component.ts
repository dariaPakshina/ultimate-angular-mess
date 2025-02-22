import { Component, computed, signal } from '@angular/core';
import { CodeDirective } from '../code.directive';
import { TuiButton, TuiIcon } from '@taiga-ui/core';
import { TuiCarousel } from '@taiga-ui/kit';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-signals',
  imports: [CodeDirective, TuiButton, TuiCarousel, NgIf, TuiIcon],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss',
})
export class SignalsComponent {
  count = signal(1);
  doubleCount = computed(() => this.count() * 2);
  showCount = signal(false);
  conditionalCount = computed(() => {
    if (this.showCount()) {
      return this.count();
    } else {
      return 'Nothing to see here!';
    }
  });
  switched = false;

  onChangeSignal(count: number) {
    this.count.set(count);
  }

  onSwitch() {
    this.switched = !this.switched;
  }

  onShowCount(truthiness: boolean) {
    this.showCount.set(truthiness);
  }
}
