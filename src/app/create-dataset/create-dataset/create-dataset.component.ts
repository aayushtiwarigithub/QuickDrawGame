import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { HelpDialogComponent } from '../help-dialog/help-dialog.component';
import { ClassListDialogComponent } from '../class-list-dialog/class-list-dialog.component';
import { ClassGroupService } from 'src/app/class-group.service';
import { Location } from '@angular/common';
import { AddClassDialogComponent } from '../add-class-dialog/add-class-dialog.component';


@Component({
  selector: 'app-create-dataset',
  templateUrl: './create-dataset.component.html',
  styleUrls: ['./create-dataset.component.css']
})

export class CreateDatasetComponent  {

  className="";
  classNames = this.classGroupService.getClasses();

  classFilter: any = '';


  classNameDialogRef: MatDialogRef<ClassListDialogComponent>;
  

  constructor(public dialog: MatDialog,
    private classGroupService: ClassGroupService,
    private _location:Location) {}

  openHelpDialog(): void {
    const dialogRef = this.dialog.open(HelpDialogComponent, {
      width: '350px',
      height: '500px' });
  }

  openClassListDialog(): void{
    this.classNameDialogRef = this.dialog.open(ClassListDialogComponent, {
      width: '450px',
      height: '600px', 
    });
  }
  openAddClassDialog(): void {
    const dialogRef = this.dialog.open(AddClassDialogComponent, {
      width: '350px',
      height: '450px',});
  }

  deleteClass(className){
    this.classGroupService.deleteClass(className);
    window.alert('The Class has been removed!');
  }


selectClass(className:string){
  this.classGroupService.selectedClassName=className;
}

searchActivated(){
  document.getElementById("freeSpaceId").style["display"] = "block";
  document.getElementById("stepsId").style["display"] = "none";
  document.getElementById("btnId").style["display"] = "block";
}

backClicked(){
  this._location.back();
}

searchDeactivated(){
  document.getElementById("freeSpaceId").style["display"] = "none";
  document.getElementById("stepsId").style["display"] = "block";
  document.getElementById("btnId").style["display"] = "none";
}

}
