import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  // user: { id: number, name: string };
  // constructor(private router: Router,
  //   private route: ActivatedRoute) { }

  ngOnInit() {
  //  this.route.params.subscribe(params =>{
  //    this.user.id = params['id'];
  //  })
  }
  onreload() {
   // this.router.navigate(['servers'], { relativeTo: this.route })
  }
}
