import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-trial-point',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './TrialPoint.component.html',
  styleUrl: './TrialPoint.component.scss',

})
export class TrialPointComponent { }
