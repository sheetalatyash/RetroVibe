import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Song {
  id: number;
  title: string;
  artist: string;
  duration: string;
}

@Component({
  selector: 'app-queue',
  imports: [CommonModule],
  templateUrl: './queue.html',
  styleUrl: './queue.scss',
})
export class Queue {
  songs: Song[] = [
    { id: 1, title: 'Zara Zara', artist: 'Bombay Jayashri', duration: '3:45' },
    { id: 2, title: 'Dhurandhar', artist: 'Shashwat Sachdev', duration: '4:12' },
    { id: 3, title: 'Saiyaara', artist: 'Various Artists', duration: '3:28' },
    { id: 4, title: 'Tere Ishk Mein', artist: 'A.R. Rahman', duration: '4:05' },
    { id: 5, title: 'Arz Kiya Hai', artist: 'Coke Studio', duration: '3:52' },
  ];

  currentSongId = 1;

  playFrom(songId: number) {
    this.currentSongId = songId;
  }

  removeSong(songId: number) {
    this.songs = this.songs.filter((song) => song.id !== songId);
  }
}
