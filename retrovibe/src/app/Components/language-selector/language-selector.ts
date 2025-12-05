import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-language-selector',
  imports: [CommonModule],
  templateUrl: './language-selector.html',
  styleUrl: './language-selector.scss',
})
export class LanguageSelector {
  languages = [
    { code: 'hi', name: 'Hindi' },
    { code: 'en', name: 'English' },
    { code: 'pa', name: 'Punjabi' },
    { code: 'ta', name: 'Tamil' },
    { code: 'te', name: 'Telugu' },
    { code: 'mr', name: 'Marathi' },
    { code: 'gu', name: 'Gujarati' },
    { code: 'bn', name: 'Bengali' },
    { code: 'kn', name: 'Kannada' },
    { code: 'bh', name: 'Bhojpuri' },
    { code: 'ml', name: 'Malayalam' },
    { code: 'sa', name: 'Sanskrit' },
    { code: 'hy', name: 'Haryanvi' },
    { code: 'ra', name: 'Rajasthani' },
    { code: 'od', name: 'Odia' },
    { code: 'as', name: 'Assamese' },
  ];

  @Input() selectedLanguage = 'hi';
  @Output() languageChange = new EventEmitter<string>();

  selectLanguage(code: string) {
    this.selectedLanguage = code;
    this.languageChange.emit(code);
  }

  getSelectedLanguageName(): string {
    return this.languages.find((lang) => lang.code === this.selectedLanguage)?.name || 'Hindi';
  }
}
