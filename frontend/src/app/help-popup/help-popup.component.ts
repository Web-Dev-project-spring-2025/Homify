import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-help-popup',
  templateUrl: './help-popup.component.html',
  styleUrls: ['./help-popup.component.css']
})
export class HelpPopupComponent {
  constructor(private dialogRef: MatDialogRef<HelpPopupComponent>) {}

  closePopup() {
    this.dialogRef.close();
  }
}
