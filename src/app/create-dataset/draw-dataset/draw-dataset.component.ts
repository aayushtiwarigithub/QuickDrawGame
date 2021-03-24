import { Component, Input, ElementRef, AfterViewInit, ViewChild, Output, EventEmitter, OnInit } from '@angular/core';
import { from, fromEvent } from 'rxjs';
import { switchMap, takeUntil, pairwise, filter } from 'rxjs/operators'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HelpDialogComponent } from '../help-dialog/help-dialog.component';
import { FilterPipe } from 'ngx-filter-pipe';
import { ClassListDialogComponent } from '../class-list-dialog/class-list-dialog.component';
import { ActivatedRoute } from '@angular/router';
import { ClassGroupService } from 'src/app/class-group.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-draw-dataset',
  templateUrl: './draw-dataset.component.html',
  styleUrls: ['./draw-dataset.component.css']
})
export class DrawDatasetComponent implements OnInit{

  className=this.classGroupService.selectedClassName;
  classNames = this.classGroupService.getClasses();
  showedClassName=this.className;

  classFilter: any = '';

  private cx: CanvasRenderingContext2D;

  classNameDialogRef: MatDialogRef<ClassListDialogComponent>;
  

  constructor(public dialog: MatDialog, private http:HttpClient, private filterPipe: FilterPipe,
    private route: ActivatedRoute, private classGroupService: ClassGroupService,
    private _location:Location) {}

  
  public ngOnInit(){
    if(this.className==="")
    {
      document.getElementById("submitId").style["display"]="none";
      document.getElementById("clearId").style["display"]="none";
      document.getElementById("classAlert").style["display"]="block";
    }
    if(this.className.length > 20)
    this.showedClassName=this.className.slice(0,20)+"..";
    if(this.className.length > 10)
    {
      document.getElementById("drawId").style["margin-left"]="20px";
      document.getElementById("drawId").style["font-size"]="30px";
    }
  }

  openHelpDialog(): void {
    const dialogRef = this.dialog.open(HelpDialogComponent, {
      width: '350px',
      height: '500px' });
  }
  
  addToClassGroup(className){
    this.classGroupService.addToClassGroup(className);
    window.alert('Your Class has been added!');
  }

  deleteClass(className){
    this.classGroupService.deleteClass(className);
    window.alert('The Class has been removed!');
  }



@ViewChild('canvas') public canvas: ElementRef;

@Input() public width = 384;
@Input() public height = 384;




public ngAfterViewInit() {
  const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
  this.cx = canvasEl.getContext('2d');

  canvasEl.width = this.width;
  canvasEl.height = this.height;

  this.cx.lineWidth = 2;
  this.cx.lineCap = 'round';
  this.cx.strokeStyle = '#000';

  this.captureEvents(canvasEl);
}

private captureEvents(canvasEl: HTMLCanvasElement) {
  fromEvent(canvasEl, 'mousedown')
    .pipe(
      switchMap((e) => {
        return fromEvent(canvasEl, 'mousemove')
          .pipe(
            takeUntil(fromEvent(canvasEl, 'mouseup')),
            takeUntil(fromEvent(canvasEl, 'mouseleave')),   
            pairwise()
          )
      })
    )
    .subscribe((res: [MouseEvent, MouseEvent]) => {
      const rect = canvasEl.getBoundingClientRect();

      const prevPos = {
        x: res[0].clientX - rect.left,
        y: res[0].clientY - rect.top
      };

      const currentPos = {
        x: res[1].clientX - rect.left,
        y: res[1].clientY - rect.top
      };

      this.drawOnCanvas(prevPos, currentPos);
    });
}

private drawOnCanvas(prevPos: { x: number, y: number }, currentPos: { x: number, y: number }) {
  if (!this.cx) { return; }

  this.cx.beginPath();

  if (prevPos) {
    this.cx.moveTo(prevPos.x, prevPos.y); // from
    this.cx.lineTo(currentPos.x, currentPos.y);
    this.cx.stroke();
  }
}

clearcanvas(){
  this.cx.clearRect(0,0, this.width, this.height);
}

submitcanvas(){
  var canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
  var date = Date.now();
  var filename = this.className + "_" + date + '.png';
  var image = canvasEl.toDataURL("image/png");
  this.http.post(
    'http://127.0.0.1:5000/upload_canvas',
    {filename, image, className: this.className},
    {responseType: 'text'}
  ).subscribe((res: any) => {
    console.log(res,this.className)
    this.cx.clearRect(0,0, this.width, this.height);
    this.className = "";
  })
  
}

backClicked(){
  this._location.back();
}

}
