import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortarrayService {
  accordians=[];


  constructor() { }

 
  // get sorted(){
  //   debugger;
  //   this.accordians.sort((a, b) => {
  //     if(a.id === b.id){
  //           // If two elements have same number, then the one who has larger rating.average wins
  //           return a.order - b.order;
  //         }
  //         else{
  //           return a.order - b.order;
  //         }
  //   });
  //   console.log(this.accordians);
  //   return this.accordians;

  // }
   sortedArr(accor){
     debugger;
     accor.sort((a, b) => {
      if(a.id === b.id){
            // If two elements have same number, then the one who has larger rating.average wins
            return a.order - b.order;
          }
          else{
            return a.order - b.order;
          }
    });
    console.log(accor);
    return accor;
  }
}
 


