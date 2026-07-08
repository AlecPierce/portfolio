import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'analysis',
  imports: [],
  templateUrl: './analysis.component.html',
  styleUrl: './analysis.component.css',
  standalone: true,
})
export class AnalysisComponent implements OnChanges {
  @Input({ required: true })
  responseText: string = '';

  result: string[] = [];

  ngOnChanges(): void {
    this.result = [this.responseText];
  }
}
