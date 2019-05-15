import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './shared/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
//  providers : [EmployeeService]
})
export class EmployeesComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
  }

}
// import { Component, OnInit } from '@angular/core';
// import {Oops} from '../../models/Oops';
// import { Validators, FormControl } from '@angular/forms';
// import { SortarrayService } from '../employees/shared/sortarray.service';
// @Component({
//   selector: 'app-oops',
//   templateUrl: './oops.component.html',
//   styleUrls: ['./oops.component.css']
// })
// export class OopsComponent implements OnInit {


//   oneAtATime: boolean = true;
//   email: string;
//   list: any[];
//   strings: any[];
//   multiArray:any[];
//   tempArray = [];
//   control;
//   refinedItems=[];
//   sortingElem: [];
  


//   constructor(private sortarrayService:SortarrayService){

//   }

//   ngOnInit() {
//     this.control = new FormControl('', [Validators.required,]);

//     this.intializeArray();
  
//   }

//   intializeArray(){
//     this.list = [
//       {
//         id: 1,
//         title: 'Gmail',
//         checked:false,
//         order:1,
//         url: ''
//       },
//       {
//         id:2,
//         title: 'Facebook',
//         checked:false,
//         order:2,
//         url: ''

//       },
//       {
//         id:3,
//         title: 'LinkedIn',
//         checked:false,
//         order:3,
//         url: ''

//       },
//       {
//         id:4,
//         title: 'Github',
//         checked:false,
//         order:4,
//         url: ''

//       },
//       {
//         id:5,
//         title: 'Orkut',
//         checked:false,
//         order:5,
//         url: ''

//       },
//     ]
//   }

// addItems(obj){  
//   const index = this.tempArray.findIndex(matchObj => {
//     return matchObj['id'] === obj.id;
//   });
//   console.log('index', index)
//  obj.checked ? this.tempArray.push(obj) : this.tempArray.splice(index, 1);
//   const sortedArr = this.sortarrayService.sortedArr(this.tempArray);
//   console.log('sorted arry i m here', sortedArr);
//   this.sortingElem = sortedArr;
// }

// get result(){
//   const sortedArr = this.sortarrayService.sortedArr(this.sortarrayService.accordians);
// return sortedArr;
// }



//   onSend(value) {
//     this.strings.push(value + "-" + this.email);
//     console.log(this.strings);
//     this.email = "";
//   }
// }
