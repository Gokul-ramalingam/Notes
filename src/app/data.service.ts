import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
 public notes = [];
 public id = 0;
 public deleteId;
  constructor() { }
  addNotes(datas,id1)
  {
    this.id += id1;
    id1 = this.id;
   this.notes.push({id1,datas})
  }
  changeData(id1,datas)
  {
    this.deleteId = id1;
    this.deleteId -=1;
    this.notes.splice(this.deleteId,1,{id1,datas});
    console.log(id1,this.notes)
  }
  getData()
  {
    return this.notes;
  }
  getNote(id){
      return this.notes[id];
  }
  
}
