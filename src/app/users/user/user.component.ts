import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name:string, status:string}
  constructor(private router: Router,
    private route: ActivatedRoute, ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.route.params.subscribe(
      params =>{
        this.user.id = +params['id'];
      }
    )
  }
  onEdit() {
    this.router.navigate(['/user'], {relativeTo: this.route})
  }
}
