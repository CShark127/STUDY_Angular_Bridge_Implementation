import { Component, OnInit, ContentChild } from '@angular/core';
import { IWidget } from './widget';
import { WIDGET } from './widget.token';

@Component({
  selector: 'app-widget-wrapper',
  templateUrl: './widget-wrapper.component.html',
  styleUrls: ['./widget-wrapper.component.scss'],
})
export class WidgetWrapperComponent implements OnInit {
  @ContentChild(WIDGET, { static: true }) widget!: IWidget;
  public buttonTitle: string = '';

  constructor() {}

  ngOnInit(): void {
    this.buttonTitle = this.widget.buttonTitle;
  }

  refresh() {
    this.widget.refresh();
  }
}
