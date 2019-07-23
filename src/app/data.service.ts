import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
 public notes = [];
 public id = 0;
 public deleteId;
  constructor() { }
  addNotes(datas,id1,isDone)
  {
    this.id += id1;
    id1 = this.id;
   this.notes.push({id1,datas,isDone})
  }
  changeData(id1,datas,isDone)
  {
    this.deleteId = id1;
    this.deleteId -=1;
    this.notes.splice(this.deleteId,1,{id1,datas,isDone});
  }
  getData()
  {
    return this.notes;
  }
  getNote(id){
      return this.notes[id];
  }
  
  
}
