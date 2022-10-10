import {Component, OnInit} from '@angular/core';
import {RequestStatusIDModel} from "@app/models";

@Component({
  selector: 'page-status-hostel-request',
  templateUrl: './page-status-hostel-request.component.html',
  styleUrls: ['./page-status-hostel-request.component.scss']
})
export class PageStatusHostelRequestComponent implements OnInit {

  REQUEST_STATUSES = RequestStatusIDModel;

  requestStatus = RequestStatusIDModel.Approved;

  showHostelInfo:boolean = false;

  ngOnInit(): void {

  }
}
