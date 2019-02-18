import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss']
})
export class ModalConfirmComponent implements OnInit {
  constructor(
    private thisDialogRef: MatDialogRef<ModalConfirmComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    // console.log(this.data);

  }
  onClickOk() {
    this.thisDialogRef.close('confirm');
  }

  onClickCancel() {
    this.thisDialogRef.close('cancel');
  }

}
