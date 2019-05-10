import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../lib/segment';
import { TocService } from '../services/toc.service';
declare var $: any 

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  @Input() books: Book[];
  showSubmenu: boolean = false;
  showSubSubmenu: boolean = false;
  pages: boolean = false;

  constructor(public tocService: TocService) { }

  ngOnInit() {
    this.tocService.getToc();
    
  }

  ngAfterViewInit(): void {
    //$(".file-tree").filetree();
    console.log('ready');
 }

  toggle(obj: any, index: number) {
    obj.filter((menu, i) => i !== index).forEach(menu=> menu.isExpand = false);
    obj[index].isExpand = !obj[index].isExpand;
  }

}
