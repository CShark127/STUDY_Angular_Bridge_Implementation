import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bridge-implementation';

  code = `import { Component, OnInit, ContentChild } from '@angular/core';
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
}`;

  links = ['First', 'Second', 'Third'];
  activeLink = this.links[0];
  background: ThemePalette = undefined;

  toggleBackground() {
    this.background = this.background ? undefined : 'primary';
  }

  addLink() {
    this.links.push(`Link ${this.links.length + 1}`);
  }
}
