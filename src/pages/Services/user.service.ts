import { Injectable } from '@angular/core';
import  {FirebaseListObservable,AngularFireDatabase} from 'angularfire2/database';
//import {User} from '../models/user';

@Injectable()
export class UserService {

	UserContacts: FirebaseListObservable<any>;
    list :any[];
	constructor(public angf:AngularFireDatabase ) {

	   this.UserContacts= angf.list('/Users');
         this.UserContacts.subscribe((data) => {
            
            this.list= data;
        })
		
	}

    updateUser(res,user){
        if(res!=""){
            //console.log(res);
            //this.UserContacts.update(res,{cnt : i }); //{bikeId : user.bikeId , email : user.email , name : user.name, phone : user.phone,modal: user.modal }
             this.angf.object('/Users/' +res).update(user);
        }
    }
    getUser(user){
         
         
    }
   updateUserCnt(user) {
       var userExists =false;
       var res ="";
       var i=0;
       //this.todos=[];
       try{
            this.list.forEach(item=> { //first map
                  //console.log(item.phone + " ::"+ user.phone);
                  if( parseInt(item.phone) == parseInt(user.phone)){
                        userExists = true;
                        i = item.cnt+1;
                        res=item.$key;
                    }
          });
        }catch(e){
            console.log(e);
        }finally{
            //console.log(res);
            if(res !="")
            this.angf.object('/Users/' +res).update({cnt: i});
           if(!userExists){
               // console.log(user);
                this.UserContacts.push(user);
            }
        }
       /* this.angf.object('/Users/').subscribe( users => {
            console.log(users.length());
          for (var it = users.length - 1; i >= 0; i--) {  
             console.log(users.length);
             console.log(users[it]);
             
            if (users[it].phone) {
              userExists = true;
              console.log(users[it].$key);
              var i :number = users[it].cnt +1;
              console.log(i);
              console.log('This username is taken. Try another one');
              this.angf.object('/Users/' + users[it].$key).update({cnt : i })
            }
        };
        });*/
       /* this.UserContacts.forEach(item => {
            console.log(item.$key);
         if (item.phone == user.phone){
                console.log(item.$key);
                var cnt= item.cnt;
                this.UserContacts.update(item.$key, { cnt: ++cnt });
                res=1;
            }
        });*/
     }
    containsObject(obj, list) :string{
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i].phone == obj.phone){
            //console.log(list[i].$key);
            return list[i].$key;
        }
    }
    return "";
    }
    getUsers(){
        return this.UserContacts;
    }
    addUser( user) {
       
        this.UserContacts.push(user);
    }

    removeBike(index) {
            this.UserContacts.remove(index);
            //console.log( this.UserContacts);
    }
 }