import { Component, OnInit } from '@angular/core';
import { Child } from '../model/child';
import { Target } from '../model/target';
import { CHILDS } from '../mock/mock-childs';
import { TARGETS } from '../mock/mock-targets';
import { BetterService } from '../service/better.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  // childs = CHILDS;
  targets = TARGETS;
  selectedTarget: Target;
  childs: Child[];

  constructor(private betterService: BetterService) { }

  ngOnInit() {
    this.getChilds();
  }

  onSelect(target: Target): void {
    this.selectedTarget = target;
  }

  getChilds(): void {
    this.betterService.getChilds()
      .subscribe(childs => this.childs = childs);
  }

}
