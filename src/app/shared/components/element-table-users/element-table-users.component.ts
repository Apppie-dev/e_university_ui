import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FacultyModel, UserModel} from "@app/models";
import {UiNotifierService} from "@app/services";

@Component({
  selector: 'element-table-users',
  templateUrl: './element-table-users.component.html',
  styleUrls: ['./element-table-users.component.css']
})
export class ElementTableUsersComponent {

  @Input() loading = true;
  @Input() error = false;

  @Input() data: UserModel[];
  @Input() link = true;
  @Input() incidentId: string;
  @Input() loadingAmount = 4;

  @Output() notifyReload: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private uiNotifierService: UiNotifierService,
  ) { }

  handleReload(): void {
    this.notifyReload.emit();
  }

  handleCellMenuToggle(event: Event, facultyIndex: number): void {
    const visibilityMenu = !this.data[facultyIndex].visibilityMenu;
    this.handleCellMenuClickOutside(event);
    this.data[facultyIndex].visibilityMenu = visibilityMenu;

    event.preventDefault();
    event.stopPropagation();
  }

  handleCellMenuClickOutside(event: Event): void {
    this.data = this.data.map((faculty: UserModel) => {
      faculty.visibilityMenu = false;
      return faculty;
    });

    event.preventDefault();
    event.stopPropagation();
  }

  handleDownload(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    this.uiNotifierService.showInfo('This Action is not implemented.');
  }
}
