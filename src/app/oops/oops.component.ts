import { Component, OnInit } from '@angular/core';
import {Oops} from '../../models/Oops';
import { Validators, FormControl } from '@angular/forms';
import { SortarrayService } from '../employees/shared/sortarray.service';
@Component({
  selector: 'app-oops',
  templateUrl: './oops.component.html',
  styleUrls: ['./oops.component.css']
})
export class OopsComponent implements OnInit {


  oneAtATime: boolean = true;
  email: string;
  list: any[];
  strings: any[];
  multiArray:any[];
  tempArray:any[];
  control;
  refinedItems=[];
  


  constructor(private sortarrayService:SortarrayService){

  }

  ngOnInit() {
    this.control = new FormControl('', [Validators.required,]);

    this.intializeArray();
  
  }

  intializeArray(){
    this.list = [
      {
        id: 1,
        title: 'Gmail',
        checked:false,
        order:1
      },
      {
        id:2,
        title: 'Facebook',
        checked:false,
        order:2

      },
      {
        id:3,
        title: 'LinkedIn',
        checked:false,
        order:3

      },
      {
        id:4,
        title: 'Github',
        checked:false,
        order:4

      },
      {
        id:5,
        title: 'Orkut',
        checked:false,
        order:5

      },
    ],
    this.strings = [],
    this.multiArray=[
      {
        id: 1,
        title: 'Gmail',
        checked: false,
        order:1
      },
      {
        id:2,
        title: 'Facebook',
        checked: false,
        order:2

      },
      {
        id:3,
        title: 'LinkedIn',
        checked: false,
        order:3

      },
      {
        id:4,
        title: 'Github',
        checked: false,
        order:4

      },
      {
        id:5,
        title: 'Orkut',
        checked: false,
        order:5

      },
    ]
  }

addItems(obj){
  debugger;
  console.log('obj',obj)
  //this.sortarrayService.accordians.push(obj);
  const filteredArray=this.list.filter((item) => {
    return item.id === obj.id
  })[0];
  console.log('filtered', filteredArray)
  
  
  if (obj.checked) {
  this.sortarrayService.accordians.push(filteredArray);
}
else{
//this.sortarrayService.accordians.pop()
for (var i =0; i < this.sortarrayService.accordians.length; i++)
   if (this.sortarrayService.accordians[i].checked === false) {
    this.sortarrayService.accordians.splice(i,1);
      break;
   }
}
  // const tempArray=[];

  // if (obj.checked) {
  //    tempArray.push(filteredArray);
  // }
  // else{
  //   this.tempArray.pop();
  // }
  // const sortedArr = this.sortarrayService.sortedArr(tempArray);
  // console.log('sorted arry i m here', sortedArr);

  //this.result();
  //console.log(tempArray);
  //const sortedArr = this.sortarrayService.sortedArr(this.sortarrayService.accordians);
  //console.log('sorted arry i m here', sortedArr);
  console.log(filteredArray)
  console.log(this.list);
}

get result(){
  const sortedArr = this.sortarrayService.sortedArr(this.sortarrayService.accordians);
return sortedArr;
}




//this.resultArray = this.sortarrayService.sorted(dfa);
get sorting() {
  return this.list.filter(item => item.checked);
  // this.sortarrayService.sorted.filter((element, index) => {
  //   return index === 0 || element.number !== this.sortarrayService.accordians[index-1].number;
  // });
  // return this.sortarrayService.accordians;
}


  onSend(value) {
    this.strings.push(value + "-" + this.email);
    console.log(this.strings);
    this.email = "";
  }

   
  // ngOnInit() {
  //   const person1= new Oops('aditya','shirsat',30-4-1992)
  //   console.log(person1);
  //   const person2= new Oops('sushant','rajhans',15-6-1995)
  //   console.log(person2);
  //   console.log(person2.firstName);
  //   console.log(person2.dob);
  // }



}


// if (obj.checked) {
//   this.sortarrayService.accordians.push(filteredArray);
// }
// else{
//  this.sortarrayService.accordians.pop();
// }

// get result(){
//   const sortedArr = this.sortarrayService.sortedArr(this.sortarrayService.accordians);
// return sortedArr;
// }