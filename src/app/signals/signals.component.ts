import { Component, computed, signal } from '@angular/core';
import { CodeDirective } from '../code.directive';
import { TuiButton } from '@taiga-ui/core';
import { TuiCarousel } from '@taiga-ui/kit';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-signals',
  imports: [CodeDirective, TuiButton, TuiCarousel, NgIf],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss',
})
export class SignalsComponent {
  count = signal(1);
  doubleCount = computed(() => this.count() * 2);

  switched = false;

  onChangeSignal(count: number) {
    this.count.set(count);
  }

  onSwitch() {
    this.switched = !this.switched;
  }
}
