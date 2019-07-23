import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
 public notes =[];
 public sendData;
 public enable = true;
 public disable = false;
 constructor(private data : DataService,private router:Router,private route : ActivatedRoute) { }

  ngOnInit() {
    this.notes = this.data.getData();
  }
  
  editNotes(id)
  {
    this.router.navigate(['edit',id],{relativeTo:this.route});
  }
  
}