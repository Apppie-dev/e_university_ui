import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'element-hostel-request-comment',
  templateUrl: './element-hostel-request-comment.component.html',
  styleUrls: ['./element-hostel-request-comment.component.scss']
})
export class ElementHostelRequestCommentComponent implements OnInit {

  formComment: FormGroup;
  formCommentError = false;
  formCommentLoading = false;

  constructor(
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this._initForm();
  }

  actionSave(): void {

    if (this.formComment.invalid) {
      return;
    }

    this.formCommentError = false;
    this.formCommentLoading = true;

    const body = {
      comment: this.formComment.value.comment
    }

    console.log(body)
  }

  private _initForm(): void {
    this.formComment = this.formBuilder.group({
      comment: ['', [
        Validators.required,
      ]]
    });
  }
}

