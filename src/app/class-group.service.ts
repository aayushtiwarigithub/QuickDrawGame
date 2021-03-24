import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassGroupService {

  constructor() { }
  selectedClassName="";
  classGroup: any[] = ["Sun", "Flower", "Umbrell","Pencil","Spoon",
                   "Tree","Spectacles","House","Bird","Hand"];

  addToClassGroup(className) {
    if(className!=="")
    this.classGroup.push(className);
  }

  getClasses() {
    return this.classGroup;
  }

  deleteClass(className) {
    const index = this.classGroup.indexOf(className);
    if (index > -1) {
    this.classGroup.splice(index, 1);}
  }

}
