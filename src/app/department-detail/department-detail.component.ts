import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h2>
      Department Detail
    </h2>
    <h3>You Selected department with id = {{ departmentId }}</h3>

    <p>
      <button (click)="showOverview()">Overview</button>
      <button (click)="showContact()">Contact</button>
    </p>
    <router-outlet></router-outlet>

    <button (click)="goPrevious()">Previous</button>
    <button (click)="goNext()">Next</button>
    <div>
      <button (click)="gotoDept()">Back</button>
    </div>
  `,
  styles: [],
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    //let id = parseInt(this.route.snapshot.paramMap.get('id'));
    //this.departmentId = id;
    //snapshot approach has a drawback, it opens webpage for id which we haven't mentioned also, this is overcome by paramMap Observable approach

    //paramMap Observable approach
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    });
  }
  showOverview() {
    this.router.navigate(['overview'], { relativeTo: this.route });
  }
  showContact() {
    this.router.navigate(['contact'], { relativeTo: this.route });
  }
  goPrevious() {
    let prevId = this.departmentId - 1;
    //this.router.navigate(['/departments', prevId]);
    this.router.navigate([{ id: prevId }], {
      relativeTo: this.route,
    });
  }
  goNext() {
    let nextId = this.departmentId + 1;
    //this.router.navigate(['/departments', nextId]);
    this.router.navigate([{ id: nextId }], {
      relativeTo: this.route,
    });
  }

  gotoDept() {
    //Using Optional Route Parameters : this will be displayed as ;id=selectedId
    let selectedId = this.departmentId ? this.departmentId : null;
    //this.router.navigate(['/departments', { id: selectedId }]);

    //Relative navigation
    this.router.navigate(['../', { id: selectedId }], {
      relativeTo: this.route,
    });
  }
}
