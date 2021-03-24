import { Component, Input, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { from, fromEvent } from 'rxjs';
import { switchMap, takeUntil, pairwise } from 'rxjs/operators'
import { HttpClient, HttpClientModule } from '@angular/common/http'

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})

export class CanvasComponent implements AfterViewInit {

  className="";
  private cx: CanvasRenderingContext2D;

  constructor( private http:HttpClient){
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
  
  selectClass(className:string){
    this.className=className;
  }

}
