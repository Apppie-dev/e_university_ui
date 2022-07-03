import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FacultyModel} from "@app/models";
import {UiNotifierService} from "@app/services";

@Component({
  selector: 'element-table-faculties',
  templateUrl: './element-table-faculties.component.html',
  styleUrls: ['./element-table-faculties.component.css']
})
export class ElementTableFacultiesComponent {

  @Input() loading = true;
  @Input() error = false;

  @Input() data: FacultyModel[];
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
    this.data = this.data.map((faculty: FacultyModel) => {
      faculty.visibilityMenu = false;
      return faculty;
    });

    event.preventDefault();
    event.stopPropagation();
  }
}
