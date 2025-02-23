import { Component } from '@angular/core';
import { CodeDirective } from '../code.directive';
import { TuiButton, TuiIcon, TuiLink } from '@taiga-ui/core';
import { TuiCarousel } from '@taiga-ui/kit';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-components',
  imports: [CodeDirective, TuiButton, TuiCarousel],
  templateUrl: './components.component.html',
  styleUrl: './components.component.scss',
})
export class ComponentsComponent {}
