import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IDogResponse } from 'src/app/models/dog-api-response';
import { ApiService } from 'src/app/services/api.service';
import { IWidget } from '../widget-wrapper/widget';
import { WIDGET } from '../widget-wrapper/widget.token';

@Component({
  selector: 'app-dog-image',
  templateUrl: './dog-image.component.html',
  styleUrls: ['./dog-image.component.scss'],
  providers: [
    {
      provide: WIDGET,
      useExisting: DogImageComponent,
    },
  ],
})
export class DogImageComponent implements OnInit, IWidget {
  public buttonTitle = 'Get New Dog';
  public dogResponse!: Observable<IDogResponse>;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.getCorgiImage();
  }

  getCorgiImage() {
    this.dogResponse = this.api.getRandomDog('corgi');
  }
}
