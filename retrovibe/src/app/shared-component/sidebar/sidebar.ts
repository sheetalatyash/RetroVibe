import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  menuItems = [
    { label: 'New Releases', icon: '⭐' },
    { label: 'Top Charts', icon: '📊' },
    { label: 'Top Playlists', icon: '🎵' },
    { label: 'Podcasts', icon: '🎙️' },
    { label: 'Top Artists', icon: '🎤' },
    { label: 'Radio', icon: '📻' },
  ];

  libraryItems = [
    { label: 'History', icon: '⏱️' },
    { label: 'Liked Songs', icon: '❤️' },
    { label: 'Albums', icon: '💿' },
    { label: 'Podcasts', icon: '🎙️' },
    { label: 'Artists', icon: '🎭' },
  ];

  selectedItem: string | null = null;

  selectItem(item: string) {
    this.selectedItem = item;
  }
}
