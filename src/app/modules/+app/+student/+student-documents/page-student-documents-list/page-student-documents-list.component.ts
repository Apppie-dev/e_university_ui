import { Component, OnInit } from '@angular/core';
import {FileModel} from "@app/models";

@Component({
  selector: 'page-student-documents-list',
  templateUrl: './page-student-documents-list.component.html',
  styleUrls: ['./page-student-documents-list.component.scss']
})
export class PageStudentDocumentsListComponent implements OnInit {

  file: FileModel = new FileModel();

  constructor() { }

  ngOnInit(): void {
  }

}
