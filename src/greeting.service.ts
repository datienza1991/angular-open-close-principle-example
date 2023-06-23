import { LanguageProvider } from './language-provider';

export class GreetingService {
  languageProvider: LanguageProvider;

  constructor(languageProvider: LanguageProvider) {
    this.languageProvider = languageProvider;
  }

  execute() {
    return `${this.languageProvider.greet()}`;
  }
}
