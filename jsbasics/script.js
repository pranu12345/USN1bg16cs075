//decision making
/*var age=18;
if(age<13){
    console.log("minor");
}else if(age>=18){
    console.log("major");
}
age>=18?console.log("major"):console.log("minor");;
function pranamya(firstname,lastname){
    console.log(firstname+''+lastname);
}
pranamya('pranu','ab');

var names=['pranu','2','haa']
console.log(names[1]);

names.push("hello");
console.log(names);
names.unshift("raju");
console.log(names);
names.pop();
console.log(names);
*/

//challenge 2
bill1=124;
bill2=48;
bill3=268;


function tipc(bill){
   tipp=[];
   tott=[];
    if(bill<50){
    
        console.log("the tip is");
        tip1=bill*0.2;
        console.log(tip1);
        tot1=bill+tip1;
        console.log("the tot is");
        console.log(tot1);
    }else if(bill>50 && bill<200){
        tip2=bill*0.15;
        console.log("the tip is");console.log(tip2);
        tot2=bill+tip2;
        console.log("the tot is");
        console.log(tot2);
    }else if(bill>200){
        tip3=bill*0.1;
        console.log("the tip is");
        console.log(tip3);
        tot3=bill+tip3;
        console.log("the tot is");
        console.log(tot3);
    }
    
}

tipc(124);
tipc(48);
tipc(268);
tipp=[tip1,tip2,tip3];
console.log(tipp);
tott=[tot1,tot2,tot3];
console.log(tott);
/*
//objects
var mydetails={
    firstname:'pranu',
    lastname:'ab',
    dob:1998,
    family:['pranu','ab'],
    calcage:function(birthvar){
        return 2019-birthvar;
    }
};

console.log(mydetails.firstname);
var z='dob';
console.log(mydetails[z]);

mydetails.dob=1981;
console.log(mydetails);

var shiva=new Object();
shiva.firstname='deep';
console.log(shiva);

console.log('pranu is'+mydetails.calcage(1998)+'years old');*/