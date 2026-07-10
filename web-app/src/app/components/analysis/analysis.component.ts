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

  private new_regex: RegExp =
    /(?:\[\[([\w\s]+)\]\](?:[\W\s]*)(\w.*))(?:&&([\w\s]+)&&(?:[\W\s]*)(\w.*))/g;

  ngOnChanges(): void {
    this.parseResponse();
  }

  private findMatches() {
    const matches = this.responseText.matchAll(this.new_regex);
    return matches;
  }

  parseResponse() {
    this.responseText = this.responseText.replaceAll(/\n/g, '');
    this.responseText = this.responseText.replaceAll(/\s{2,}/g, ' ');
    this.responseText = this.responseText.replaceAll(/- If you'd like.*/g, '');
    this.responseText = this.responseText.replaceAll(/I can.*/g, '');
    this.responseText = this.responseText.replaceAll(/- If you.*/g, '');
    const matches = this.findMatches();
    for (let match of matches) {
      if (this.responseText.length > 0 && match[0]?.length > 0) {
        if (match[4].includes('-')) {
          this.result.push(match[1]);
          this.result.push(match[2]);
          this.result.push(match[3]);

          // if match 4 contains "-" splice it and return those into the result instead
          this.spliceExplanation(match[4], /(?:(?:[.:]\s*)|\s+)-\s+/g).forEach(
            (splice) => {
              this.result.push(splice);
            },
          );
        } else {
          this.result.push(match[1]);
          this.result.push(match[2]);
          this.result.push(match[3]);
          this.result.push(match[4]);
        }
      }
    }
    return this.result;
  }

  checkForDelimiter(stringToCheck: string, delimiter: string): boolean {
    // check for different delimiters here and set the character to splice on to a class var to use
    return true;
  }

  spliceExplanation(string: string = '', delimiter: RegExp): Array<string> {
    return string.split(delimiter);
  }

  getSplicedExplanation(): Array<string> {
    return this.result.filter((item) => this.result.indexOf(item) > 2);
  }
}
