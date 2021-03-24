import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClassGroupService } from 'src/app/class-group.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { delay } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-add-class-dialog',
  templateUrl: './add-class-dialog.component.html',
  styleUrls: ['./add-class-dialog.component.css']
})
export class AddClassDialogComponent implements OnInit {

  value: string ="";
  constructor(private classGroupService: ClassGroupService,
    public addClassDialogRef: MatDialogRef<AddClassDialogComponent>) { }

  ngOnInit(): void {
  }
  
  addToClassGroup(){
    if(this.value==="")
    document.getElementById("emptyId").style["display"]="block";
    else 
    {
      this.value=this.value.toLowerCase();
      this.value=this.value.charAt(0).toUpperCase()+this.value.slice(1);
      if(this.classGroupService.classGroup.includes(this.value))
      {
        this.value=this.value.charAt(0).toUpperCase()+this.value.slice(1);
        document.getElementById("existId").style["display"]="block";
      }
      else{
        this.classGroupService.addToClassGroup(this.value);
        document.getElementById("emptyId").style["display"]="none";
        document.getElementById("successId").style["display"]="block";
        setTimeout(()=>{ this.addClassDialogRef.close(); },1500);
        }
      
    }
    
  }
  removeEmptyAlert(){
    document.getElementById("emptyId").style["display"]="none";
  }
  removeExistAlert(){
    document.getElementById("existId").style["display"]="none";
  }


}
