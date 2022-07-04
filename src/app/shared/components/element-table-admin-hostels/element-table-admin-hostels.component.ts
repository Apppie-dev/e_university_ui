import {Component, EventEmitter, Input, Output} from '@angular/core';
import {HostelModel} from "@app/models";

@Component({
  selector: 'element-table-admin-hostels',
  templateUrl: './element-table-admin-hostels.component.html',
  styleUrls: ['./element-table-admin-hostels.component.scss']
})
export class ElementTableAdminHostelsComponent {

  @Input() loading = true;
  @Input() error = false;

  @Input() data: HostelModel[];
  @Input() link = true;
  @Input() incidentId: string;
  @Input() loadingAmount = 4;

  @Output() notifyReload: EventEmitter<any> = new EventEmitter<any>();

  constructor(
  ) { }

  handleReload(): void {
    this.notifyReload.emit();
  }
}
