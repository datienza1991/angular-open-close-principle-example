import { Injectable } from '@angular/core';
import { GreetingService } from './greeting.service';
import { EnLanguageProvider } from './en-language-provider.service';

@Injectable({
  providedIn: 'root',
})
export class EnGreetingService extends GreetingService {
  constructor(enLanguageProvider: EnLanguageProvider) {
    super(enLanguageProvider);
  }
}
