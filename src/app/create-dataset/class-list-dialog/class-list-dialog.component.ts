import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClassGroupService } from 'src/app/class-group.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-class-list-dialog',
  templateUrl: './class-list-dialog.component.html',
  styleUrls: ['./class-list-dialog.component.css']
})
export class ClassListDialogComponent implements OnInit {

  classNames=this.classGroupService.classGroup;
  classFilter: any = '';

  constructor(private route: ActivatedRoute,
    private classGroupService: ClassGroupService,
    private dialogRef: MatDialogRef<ClassListDialogComponent>) { }

  ngOnInit(): void {
  }

  selectClass(className:string)
  {
    this.classGroupService.selectedClassName=className;
    this.dialogRef.close();
  }

}
