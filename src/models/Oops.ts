export class  Oops {
    firstName:string;
    lastName:string;
    dob:Date;

    constructor(firstname,lastname,dob){
        this.firstName = firstname;
        this.lastName = lastname;
        this.dob = new Date(dob);
    }
    // constructor(private firstName:string,private lastName:string,private dob:Date){
    // }
    getBirthYear(){
        return this.dob.getFullYear();
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`; 
    }


}
// Oops.prototype.getBirthYear = function() { return this.dob.getFullYear();   }
// Oops.prototype.getFullName = function() { return `${this.firstName} ${this.lastName}`   }