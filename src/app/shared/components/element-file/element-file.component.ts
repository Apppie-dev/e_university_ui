import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {FileModel} from "@app/models";

@Component({
  selector: 'element-file',
  templateUrl: './element-file.component.html',
  styleUrls: ['./element-file.component.scss']
})
export class ElementFileComponent {
  @Input() file!: FileModel;

  @Output() notifyView: EventEmitter<any> = new EventEmitter;
  @Output() notifyDownload: EventEmitter<any> = new EventEmitter;

  @HostListener('mouseleave')
  onMouseLeave() {
    this.file.visibilityMenu = false;
  }

  actionNotifyDownload(): void {
    console.log('Download')
    this.notifyDownload.emit();
  }

  actionNotifyView(): void {
    console.log('View')
    this.notifyView.emit();
  }

  handleCellMenuToggle(event: Event): void {
    const visibilityMenu =  !this.file.visibilityMenu
    this.handleCellMenuClickOutside(event);
    this.file.visibilityMenu = visibilityMenu;

    event.preventDefault();
    event.stopPropagation();
  }

  handleCellMenuClickOutside(event: Event): void {
    this.file.visibilityMenu = false;

    event.preventDefault();
    event.stopPropagation();
  }
}
