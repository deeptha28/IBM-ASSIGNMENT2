import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{
  EmployeeList: Employee[] = [
    new Employee("Inaya", "Das", "inaya@gmail.com","IT","India","Bangalore" ),
    new Employee("Aradhna", "V", "arad@gmail.com","CSE","India","Jaipur" ),
    new Employee("Sid", "Chopra", "sid@gmail.com","IT","India","Mumbai" )
    ]
    constructor() { }
 ngOnInit() {
 }


}
