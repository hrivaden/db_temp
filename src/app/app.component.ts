import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ScriptLoaderService } from './script-loader.service';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'databean';
  constructor(private router: Router, private scriptLoader: ScriptLoaderService) { }
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.scriptLoader.loadScript('assets/js/slideshow.js');
        this.scriptLoader.loadScript('assets/js/custom.js');
        window.scrollTo(0, 0); // Scroll to the top of the page
      }
    });
  }

}
