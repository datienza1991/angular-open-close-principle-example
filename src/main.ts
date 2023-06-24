import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { EnGreetingService } from './greeting/en-greeting.service';
import { EnLanguageProvider } from './greeting/en-language-provider.service';
import { PhLanguageProvider } from './greeting/ph-language-provider.service';
import { PhGreetingService } from './greeting/ph-greeting.service';

@Component({
  selector: 'my-app',
  standalone: true,
  providers: [
    EnGreetingService,
    EnLanguageProvider,
    PhLanguageProvider,
    PhGreetingService,
  ],
  imports: [CommonModule],
  template: `
    <h1>{{greeting}} {{name}}!</h1>
    <h1>{{phGreeting}} {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
  `,
})
export class App {
  constructor(
    private enGreetingService: EnGreetingService,
    private phGreetingService: PhGreetingService
  ) {}
  name = 'Angular';
  greeting = this.enGreetingService.execute();
  phGreeting = this.phGreetingService.execute();
}

bootstrapApplication(App);
