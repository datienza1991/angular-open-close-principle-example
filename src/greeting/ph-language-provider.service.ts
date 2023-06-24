import { Injectable } from '@angular/core';
import { LanguageProvider } from './language-provider';

@Injectable({
  providedIn: 'root',
})
export class PhLanguageProvider implements LanguageProvider {
  greet(): string {
    return 'Kumusta mula sa';
  }
}
