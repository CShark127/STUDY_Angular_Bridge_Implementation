import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from 'src/app/services/api.service';
import { IWidget } from '../widget-wrapper/widget';
import { WIDGET } from '../widget-wrapper/widget.token';

@Component({
  selector: 'app-ron-swanson',
  templateUrl: './ron-swanson.component.html',
  styleUrls: ['./ron-swanson.component.scss'],
  providers: [
    {
      provide: WIDGET,
      useExisting: RonSwansonComponent,
    },
  ],
})
export class RonSwansonComponent implements OnInit, IWidget {
  public buttonTitle = 'New Quote';
  public currentQuote!: Observable<string>;
  public isLoading = false;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.isLoading = true;
    setTimeout(() => this.getNewQuote(), 1000);
  }

  getNewQuote() {
    this.currentQuote = this.api.getRonSwansonQoute();
    this.isLoading = false;
  }
}
