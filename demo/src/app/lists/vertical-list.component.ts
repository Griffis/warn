import { Component } from '@angular/core';
import { ListItem } from './list-item.component';
import { BaseList } from './base-list';

@Component({
  selector: 'vertical-list',
  template: `
    <button (click)="sortByName()">Sort By Name</button>
    <button (click)="sortByIndex()">Sort By Index</button>
    <button (click)="prependItems()">Prepend 10 Items</button>
    <button (click)="appendItems()">Append 10 Items</button>
    <button (click)="reduceListToEmpty()">Reduce to 0 Items</button>
    <button (click)="reduceList()">Reduce to 100 Items</button>
    <button (click)="setToFullList()">Revert to original Items</button>
    <button (click)="scroll.scrollToIndex(50)">Scroll to index 50</button>
    <button (click)="scroll.scrollToPosition(1500)">Scroll to position 1500</button>
    <button (click)="randomSize = !randomSize">Toggle Random Height</button>
    <button *ngIf="randomSize" (click)="ListItemComponent.ResetSeed();">Re-Randomize Item Sizes</button>
    <button *ngIf="randomSize" (click)="scroll.invalidateAllCachedMeasurements();">Invalidate cached measurements</button>

    <div class="status">
        Showing <span>{{scroll.viewPortInfo.startIndex}}</span>
        - <span>{{scroll.viewPortInfo.endIndex}}</span>
        of <span>{{filteredList?.length}}</span>
      <span>({{scroll.viewPortItems?.length}} nodes)</span>
      <span>[scrollStartPosition: {{scroll.viewPortInfo.scrollStartPosition}}px, scrollEndPosition: {{scroll.viewPortInfo.scrollEndPosition}}px, maxScrollPosition: {{scroll.viewPortInfo.maxScrollPosition}}px ]</span>
    </div>

    <virtual-scroller #scroll
      [enableUnequalChildrenSizes]="randomSize"
      [items]="filteredList">

      <list-item [randomHeight]="randomSize" *ngFor="const item of scroll.viewPortItems" [item]="item"> </list-item>

    </virtual-scroller>
  `
})
export class VerticalListComponent extends BaseList {
}
