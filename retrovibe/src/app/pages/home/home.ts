import { Component } from '@angular/core';
import { Sidebar } from '../../shared-component/sidebar/sidebar';
import { RouterOutlet } from '@angular/router';
import { Queue } from '../../Components/queue/queue';
import { Header } from '../../shared-component/header/header';
@Component({
  selector: 'app-home',
  imports: [RouterOutlet, Header, Sidebar, Queue],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
