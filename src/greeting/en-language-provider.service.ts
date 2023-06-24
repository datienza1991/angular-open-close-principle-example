import { Injectable } from '@angular/core';
import { LanguageProvider } from './language-provider';

@Injectable({
  providedIn: 'root',
})
export class EnLanguageProvider implements LanguageProvider {
  greet(): string {
    return 'Hello from';
  }
}
