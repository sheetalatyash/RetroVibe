import { Component } from '@angular/core';
import * as tus from 'tus-js-client';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tus-upload',
  standalone: true,
  imports: [CommonModule, FormsModule], // Import necessary modules
  templateUrl: './tus-upload.html',
  styleUrls: ['./tus-upload.scss'],
})
export class TusUploadComponent {
  private upload: tus.Upload | null = null;
  file: File | null = null;
  uploadStatus: string = '';
  progress: number = 0;
  isUploading: boolean = false;
  isPaused: boolean = false;

  // Change this to your TUS server endpoint
  private readonly endpoint = 'http://localhost:3000/files/';

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.file = input.files[0];
      this.uploadStatus = `File selected: ${this.file.name}`;
      this.progress = 0;
    }
  }

  startUpload(): void {
    if (!this.file) {
      alert('Please select a file first');
      return;
    }

    this.isUploading = true;
    this.isPaused = false;
    this.uploadStatus = 'Starting upload...';

    this.upload = new tus.Upload(this.file, {
      endpoint: this.endpoint,
      retryDelays: [0, 1000, 3000, 5000],
      metadata: {
        filename: this.file.name,
        filetype: this.file.type,
      },
      onProgress: (bytesUploaded, bytesTotal) => {
        this.progress = parseFloat(((bytesUploaded / bytesTotal) * 100).toFixed(2));
        this.uploadStatus = `Uploading: ${this.progress}%`;
      },
      onError: (error) => {
        this.uploadStatus = 'Upload failed: ' + error;
        this.resetState();
      },
      onSuccess: () => {
        this.uploadStatus = 'Upload completed!';
        this.resetState();
      },
    });

    // Resume previous upload if exists
    this.upload.findPreviousUploads().then((previousUploads) => {
      if (previousUploads.length) {
        this.upload!.resumeFromPreviousUpload(previousUploads[0]);
      }
      this.upload!.start();
    });
  }

  pauseUpload(): void {
    if (this.upload) {
      this.upload.abort();
      this.isPaused = true;
      this.uploadStatus = 'Upload paused';
    }
  }

  resumeUpload(): void {
    if (this.upload) {
      this.upload.start();
      this.isPaused = false;
      this.uploadStatus = 'Upload resumed';
    }
  }

  private resetState(): void {
    this.isUploading = false;
    this.isPaused = false;
    this.upload = null;
    this.file = null;
  }
}
