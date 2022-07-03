import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UiNotifierService} from "@app/services";
import {RequestModel, RequestStatusModel} from "@app/shared/models/request.model";

@Component({
  selector: 'element-table-student-requests',
  templateUrl: './element-table-student-requests.component.html',
  styleUrls: ['./element-table-student-requests.component.css']
})
export class ElementTableStudentRequestsComponent {

  @Input() loading = true;
  @Input() error = false;

  @Input() data: RequestModel[];
  @Input() link = true;
  @Input() incidentId: string;
  @Input() loadingAmount = 4;

  @Output() notifyReload: EventEmitter<any> = new EventEmitter<any>();

  REQUEST_STATES = RequestStatusModel;

  constructor(
    private uiNotifierService: UiNotifierService,
  ) { }

  handleReload(): void {
    this.notifyReload.emit();
  }

  handleCellMenuToggle(event: Event, requestIndex: number): void {
    const visibilityMenu = !this.data[requestIndex].visibilityMenu;
    this.handleCellMenuClickOutside(event);
    this.data[requestIndex].visibilityMenu = visibilityMenu;

    event.preventDefault();
    event.stopPropagation();
  }

  handleCellMenuClickOutside(event: Event): void {
    this.data = this.data.map((request: RequestModel) => {
      request.visibilityMenu = false;
      return request;
    });

    event.preventDefault();
    event.stopPropagation();
  }
}
