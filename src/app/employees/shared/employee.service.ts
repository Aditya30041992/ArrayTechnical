import { Injectable } from '@angular/core';
import { Employee } from '../shared/employee';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  employeelist: AngularFireList<any>;
  selectedEmployees: Employee = new Employee();

  constructor(private firebase: AngularFireDatabase) { }

  getData() {
    this.employeelist = this.firebase.list('employees');
    return this.employeelist;
  }

  insertEmployee(employee: Employee) {
    this.employeelist.push({
      name: employee.name,
      position: employee.position,
      office: employee.office,
      salary: employee.salary
    });
  }

  updateEmployee(employee: Employee) {
    this.employeelist.update(employee.$key,
      {
        name: employee.name,
        position: employee.position,
        office: employee.office,
        salary: employee.salary

      });
  }

  deleteEmployee($key: string) {
    this.employeelist.remove($key);
  }

}
