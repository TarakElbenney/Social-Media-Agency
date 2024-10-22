// src/app/main/main.component.ts
import { Component, OnInit } from '@angular/core';
import { PageDataService } from '../page-data.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  pages: any[] = [];
  fplPages: any[] = [];
  manutdPages: any[] = [];
  otherPages: any[] = [];
  newsPages: any[] = []; // Array for news theme pages

  constructor(private pageDataService: PageDataService) {}

  ngOnInit(): void {
    this.pageDataService.getPages().subscribe((data) => {
      this.pages = data;
      
      this.fplPages = this.pages.filter(page => page.theme === 'fpl');
      this.manutdPages = this.pages.filter(page => page.theme === 'manutd');
      this.otherPages = this.pages.filter(page => page.theme === 'others');
      this.newsPages = this.pages.filter(page => page.theme === 'news'); // Filter for news themed pages
    });
  }
}
