import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from 'src/app/services/api.service';
import { IWidget } from '../widget-wrapper/widget';
import { WIDGET } from '../widget-wrapper/widget.token';

@Component({
  selector: 'app-ron-swanson',
  templateUrl: './ron-swanson.component.html',
  styleUrls: ['./ron-swanson.component.scss'],
  providers: [{
    provide: WIDGET,
    useExisting: RonSwansonComponent
  }]
})
export class RonSwansonComponent implements OnInit, IWidget {
  public currentQuote!: Observable<string>;
  public isLoading = false

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.refresh()
  }

  refresh() {
    this.currentQuote = this.api.getRonSwansonQoute()
  }

}
