import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>
      Department List
    </h3>
    <ul class="items">
      <li
        (click)="onSelect(department)"
        [class.selected]="isSelected(department)"
        *ngFor="let department of departments"
      >
        <span class="badge">{{ department.id }}</span> {{ department.name }}
      </li>
    </ul>
  `,
  styles: [],
})
export class DepartmentListComponent implements OnInit {
  departments = [
    { id: 1, name: 'Angular' },
    { id: 2, name: 'Node' },
    { id: 3, name: 'MongoDB' },
    { id: 4, name: 'Ruby' },
    { id: 5, name: 'React' },
  ];
  public selectedId;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    //paramMap Observable approach
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }

  onSelect(department) {
    //this.router.navigate(['/departments', department.id]);
    //This uses absolute path, which is not good, if we changeurl in routing, we have to change here as well, which is time consuming, hence we use Relative Navigation

    //Relative navigation
    this.router.navigate([department.id], { relativeTo: this.route });
  }

  isSelected(department) {
    return department.id === this.selectedId;
  }
}
