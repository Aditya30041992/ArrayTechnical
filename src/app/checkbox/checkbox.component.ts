import { Component, OnInit } from '@angular/core';
import { SortarrayService } from '../employees/shared/sortarray.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  oneAtATime: boolean = true;
  email: string;
  list: any[];
  strings: any[];
  multiArray:any[];
  tempArray:any[];
  control;
  


  constructor(private sortarrayService:SortarrayService){

  }

  ngOnInit() {
    this.control = new FormControl('', [Validators.required,]);

    this.intializeArray();
    this.ArrayMethods();
    this.ArrayConcepts();
  
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
  console.log('obj',obj)
  //this.sortarrayService.accordians.push(obj);
  const filteredArray=this.list.filter((item) => {
    return item.id === obj.id
  })[0];
  console.log('filtere', filteredArray)

  obj.checked ? this.tempArray.push(filteredArray): this.tempArray.pop();
  const sortedArr = this.sortarrayService.sortedArr(this.tempArray);
  console.log('sorted arry i m here', sortedArr);
  console.log(filteredArray)
  console.log(this.list);
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

  ArrayMethods(){

  //filter
  const filtereditems= this.multiArray.filter((item) => {
    return item.id <= 3;
  })
  console.log(this.multiArray);
  console.log(filtereditems);

  //map
  const itemsNames = this.multiArray.map((item) => {
    return item.title;
  })
  console.log(this.multiArray);  
  console.log(itemsNames);

  //find
  const foundItems = this.multiArray.find((item) => {
    return item.order === 1.3;
  })
  console.log(this.multiArray);  
  console.log(foundItems);

  //forEach
  this.multiArray.forEach((item) =>{
    console.log(item.checked);
    console.log(item.id);
    console.log(item.order);
    console.log(item.title);
  })

  //some
  const hasInexpensiveItems = this.multiArray.some((item) => {
    return item.order <= 3;
    //return item.order <= 0;
  })
  console.log(hasInexpensiveItems);

  //every
  const haseveryItem = this.multiArray.every((item) => {
    return item.order <= 2;
  })
  console.log(haseveryItem);

  //reduce
  const total = this.multiArray.reduce((currentTotal,item) =>{
    return item.order+ currentTotal
  },0);

  console.log(total);
  
  //inclucdes
  const items= [1,2,3,4,5];
  //const includesTwo = items.includes(2);
  const includesTwo = items.includes(7);
  console.log(includesTwo);
  
  //end of javascripts 8 methods

  }

  ArrayConcepts(){
    console.log("new Array POC"); 
  //new start

  const companies = [
    {name:'company one', category:'finance',start:1950,end:1980},
    {name:'company two', category:'retail',start:2001,end:2007},
    {name:'company three', category:'auto',start:1955,end:2000},
    {name:'company four', category:'technology',start:1960,end:1970},
    {name:'company five', category:'finance',start:1970,end:1995},
    {name:'company six', category:'retail',start:1980,end:2004},
    {name:'company seven', category:'auto',start:1990,end:2007},
    {name:'company eight', category:'technology',start:2000,end:2016},
    {name:'company nine', category:'finance',start:2010,end:2012},
    {name:'company ten', category:'technology',start:2015,end:2018}
  ]

  const ages=[33,22,65,44,87,72,51,11,46,36,64,59,38,42,12,7]

  //for
  for(let i=0; i < companies.length; i++){
    console.log(companies[i]);
  }

  //forEach

  companies.forEach((company,index,companies) => {
    console.log(company,index,companies);
  })

  //filter ages older than 21

  const canDrink = [];
  for(let i=0; i < ages.length; i++){
    ages[i]>=21 ? canDrink.push((ages[i])) : canDrink.pop();
  }
console.log(canDrink);

const canDrinktrue = ages.filter((age) => age >= 21)
console.log(canDrinktrue);

  //filter retails companies 

const retailCompanies = companies.filter((company) => company.category === 'retail')
console.log(retailCompanies);  

//filter 80s compannies

const startCompanies = companies.filter((compnany) => compnany.start >=1980 && compnany.end <=2019 )
//const startCompanies = companies.filter((compnany) => compnany.start >=1980 && compnany.start <=2000 )

console.log(startCompanies);

//Get companies that lasted more than 10 years

const lastedTenYears = companies.filter((company) => company.end - company.start > 10 );
//const lastedTenYears = companies.filter(company => (company.end - company.start > 10 ));

console.log(lastedTenYears);



//map 

// create array of companies name

const comanyiesName = companies.map((company) => {
  return company.name;
})
console.log(comanyiesName);


const companyByreturnID = companies.map((company) =>{
  return 1;
})
console.log(companyByreturnID);

const companyByYears = companies.map((company) =>{
  return `${company.name} [${company.start} - ${company.end}]` ;
})
console.log(companyByYears);


const agesSquare = ages.map(age => Math.sqrt(age));
console.log(agesSquare);

const agesTimesTwo = ages.map(age => age*2);
console.log(agesTimesTwo);

const ageMap  = ages
.map(age => Math.sqrt(age))
.map(age => age * 2);
console.log(ageMap);

//sort companies

const sortingCompanies = companies.sort((c1,c2) => 
  (c1.start > c2.start ? 1 :  -1)
  //{
  // if(c1.start > c2.start){
  //   return 1;
  // }
  // else{
  //   return -1;
  // }
  //}
);
console.log(sortingCompanies);


// sort ages

const sortagesAcending = ages.sort((a1,a2) => (a1-a2))
console.log(sortagesAcending);

const sortagesDecending = ages.sort((a1,a2) => (a2-a1))
ages.pop();
console.log(sortagesDecending);

//sum of ages by reduce 

let ageSum = 0;
for(let i = 0; i < ages.length; i++){
  ageSum += ages[i];
}
console.log(ageSum);

const sumOfAges = ages.reduce((total,items) => {
  return items + total;
},0)
console.log(sumOfAges);

const efficientSumOfAges = ages.reduce((total,items) =>  (items + total),0)
console.log(efficientSumOfAges);


// Get total years for all companies

const totalYears = companies.reduce(function(total, company){
   return  total + (company.end - company.start);
}, 0);
console.log(totalYears);

const efficientTotalYears = companies.reduce((total,company) => (company.end - company.start)+total,0)
console.log(efficientTotalYears);


//combined methods
const tempArray=[33,22,65,44,87,72,51,11,46,36,64,59,38,42,12,7]

const combined =tempArray
.map(age => age *2 )
.filter(age => age>=40) //eliminate number 12,7,11 *2
.sort((a1,b1) => a1-b1)
.reduce((total,item) => item+total,0);

console.log(combined);
}




}


