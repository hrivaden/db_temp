import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl:'./Team.component.html',
  styleUrl: './Team.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamComponent { }
