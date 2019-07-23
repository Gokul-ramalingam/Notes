import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
public notesId;
public notes = [];
public enable = true;
public disable = false;
  constructor(private data:DataService,private route:ActivatedRoute,private router : Router) { }
  ngOnInit() {
   this.route.paramMap.subscribe((params : ParamMap)=>
    {
    let id = parseInt(params.get('id'))
    this.notesId = id;
    });
    this.notes = this.data.getData();
  }
  public value = this.notes[this.notesId]; 

  back()
  {
    this.router.navigate(['../../'],{relativeTo : this.route})
  }

}
