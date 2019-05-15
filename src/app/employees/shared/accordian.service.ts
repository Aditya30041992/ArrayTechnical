import { Injectable } from '@angular/core';
import { Accordian } from '../shared/accordian';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { SubGmail } from '../shared/accordian';

@Injectable({
  providedIn: 'root'
})
export class AccordianService {
  accordianlist: AngularFireList<any>;
  selectedaccordian: Accordian = new Accordian();
  gmailList: AngularFireList<any>;
  selectedSubGmail: SubGmail = new SubGmail();

  constructor(private firebase: AngularFireDatabase) { }

  getAccordianData() {
    this.accordianlist = this.firebase.list('accordians');
    return this.accordianlist;
  }

  insertAccordian(employee: Accordian) {
    this.accordianlist.push({
      left: employee.left,
      middle: employee.middle,
      right: employee.right
    });
  }

  getSubGmailData() {
    this.gmailList = this.firebase.list('SubGmails');
    return this.gmailList;
  }
  
  insertSubGmail(subValue: SubGmail) {
    this.gmailList.push({
      gmailId: subValue.gmailId
    });
  }

}
