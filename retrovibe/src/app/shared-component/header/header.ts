import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LanguageSelector } from '../../Components/language-selector/language-selector';

@Component({
  selector: 'app-header',
  imports: [FormsModule, LanguageSelector, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  isLoggedIn = false;
  userName = '';
  loginUsername = '';
  // small language state to show below the Music Languages label
  selectedLanguage = 'hi';
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

  login() {
    if (this.loginUsername.trim()) {
      this.userName = this.loginUsername;
      this.isLoggedIn = true;
      this.loginUsername = '';
    }
  }

  logout() {
    this.isLoggedIn = false;
    this.userName = '';
  }

  onLanguageChange(code: string) {
    this.selectedLanguage = code;
  }

  getSelectedLanguageName(): string {
    return this.languages.find((l) => l.code === this.selectedLanguage)?.name || '';
  }
}
