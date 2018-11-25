import { Component, Input } from '@angular/core';

@Component({
  selector: 'child-comp',
  template: `
    <div>
      {{ parentCount }}
    </div>
  `
})

export class ChildComponent {
  @Input()
  parentCount: number;
}