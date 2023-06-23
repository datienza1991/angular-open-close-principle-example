import { Injectable } from '@angular/core';
import { GreetingService } from './greeting.service';
import { PhLanguageProvider } from './ph-language-provider.service';

@Injectable({
  providedIn: 'root',
})
export class PhGreetingService extends GreetingService {
  constructor(enLanguageProvider: PhLanguageProvider) {
    super(enLanguageProvider);
  }
}
