import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { AccordianService } from '../employees/shared/accordian.service';

@Component({
  selector: 'app-accordians',
  templateUrl: './accordians.component.html',
  styleUrls: ['./accordians.component.css']
})
export class AccordiansComponent implements OnInit {

  socialForm: FormGroup;
  socialPreferences = [
    { id: 1, genre: 'Gmail' },
    { id: 2, genre: 'Facebook' },
    { id: 3, genre: 'LinkedIn' },
  ];

  groups = [];
  strings = [];

  gmail: false;
  linkedIn: false;
  facebook: false;
  socialMedia: any;
  name: string;
  oneAtATime: boolean = true;
  firstName:string;
  lastName:string;
  dob:any;

  constructor(private fb: FormBuilder, private accordianService: AccordianService) {
    // Create a FormControl for each available music preference, initialize them as unchecked, and put them in an array
    const formControls = this.socialPreferences.map(control => new FormControl(false));

    // Simply add the list of FormControls to the FormGroup as a FormArray, add the selectAllControl separetely
    this.socialForm = this.fb.group({
      socialPreferences: new FormArray(formControls),
    });
  }

  ngOnInit() {
  }

  onFilterChange(msg: any, index, value) {
    this.socialMedia = this.socialForm.controls['socialPreferences'].value;
    this.gmail = this.socialMedia[0];
    this.facebook = this.socialMedia[1];
    this.linkedIn = this.socialMedia[2];

    if (this.gmail && index == 0) {
      this.groups.splice(index, 0, {
        title: 'Gmail',
        content: `1`
      })
      this.facebook = undefined;
      this.linkedIn = undefined;
    }

    if (this.gmail == false && index == 0) {
      for (var i = 0; i < this.socialPreferences.length; i++) {
        if (this.socialPreferences[i]["genre"] == value)
          this.groups.splice(index, 1);
      }
    }

    if (this.facebook && index == 1) {
      this.groups.splice(index, 0, {
        title: 'Facebook',
        content: '2'
      })
      this.linkedIn = undefined;
    }

    if (this.facebook == false && index == 1) {
      for (var i = 0; i < this.socialPreferences.length; i++) {
        if (this.socialPreferences[i]["genre"] == value)
          this.groups.splice(index, 1);
      }
    }

    if (this.linkedIn && index == 2) {
      this.groups.splice(index, 2, {
        title: 'LinkedIn',
        content: '3'
      })
    }

    if (this.linkedIn == false && index == 2) {
      for (var i = 0; i < this.socialPreferences.length; i++) {
        if (this.socialPreferences[i]["genre"] == value)
          this.groups.splice(-1);
      }
    }

  }

  onSend(value) {
    this.strings.push(value + "-" + this.name);
    console.log(this.strings);
    this.name = "";
  }



  // console.log(this.socialMedia);
  // console.log(this.gmail);
  // console.log(this.facebook);
  // console.log(this.linkedIn);
















  // myForm: FormGroup;
  // mySubForm: FormGroup;
  // gmail: false;
  // linkedIn: false;
  // facebook: false;
  // constructor(private formBuilder: FormBuilder, private accordianService: AccordianService) {

  // }

  // onFilterChange() {
  //   this.gmail = this.myForm.get('left').value;
  //   this.facebook = this.myForm.get('middle').value;
  //   this.linkedIn = this.myForm.get('right').value;
  //   console.log(this.gmail);
  //   console.log(this.facebook);
  //   console.log(this.linkedIn);

  // }

  // ngOnInit() {
  //   this.InitializeForm();
  //   this.accordianService.getAccordianData();
  //   console.log(this.accordianService.getAccordianData())

  // }

  // InitializeForm() {
  //   this.myForm = this.formBuilder.group({
  //     $key: null,
  //     left: false,
  //     middle: false,
  //     right: false
  //   });

  //   this.mySubForm = this.formBuilder.group({
  //     $key: null,
  //     gmailId: 'string'
  //   });

  // }

  // log(event: boolean) {
  //   console.log(`Gamil Accordion has been ${event ? 'opened' : 'closed'}`);
  // }

  // facebookLog(event: boolean) {
  //   console.log(`Facebook Accordion has been ${event ? 'opened' : 'closed'}`)
  // }

  // linkedInLog(event: boolean) {
  //   console.log(`LinkedIn Accordion has been ${event ? 'opened' : 'closed'}`)
  // }

  // onSubmit(post: FormGroup) {
  //   console.log(post);
  //   if (post.value.$key == null) {
  //     this.accordianService.insertAccordian(post.value);
  //   }
  // }

  // onSend(subPost: FormGroup) {
  //   console.log(subPost);
  //   if(subPost.value.$key == null) {
  //     this.accordianService.insertSubGmail(subPost.value)
  //   }
  // }
}
