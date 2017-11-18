var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
//import {User} from '../models/user';
var UserService = (function () {
    function UserService(angf) {
        var _this = this;
        this.angf = angf;
        this.UserContacts = angf.list('/Users');
        this.UserContacts.subscribe(function (data) {
            _this.list = data;
        });
    }
    UserService.prototype.updateUser = function (res, i) {
        if (res != "") {
            console.log(res);
            this.UserContacts.update(res, { cnt: i });
        }
    };
    UserService.prototype.getUser = function (user) {
    };
    UserService.prototype.updateUserCnt = function (user) {
        var userExists = false;
        var res = "";
        var i = 0;
        //this.todos=[];
        try {
            this.list.forEach(function (item) {
                console.log(item.phone + " ::" + user.phone);
                if (parseInt(item.phone) == parseInt(user.phone)) {
                    userExists = true;
                    i = item.cnt + 1;
                    res = item.$key;
                }
            });
        }
        catch (e) {
            console.log(e);
        }
        finally {
            console.log(res);
            if (res != "")
                this.angf.object('/Users/' + res).update({ cnt: i });
            if (!userExists) {
                console.log(user);
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
    };
    UserService.prototype.containsObject = function (obj, list) {
        var i;
        for (i = 0; i < list.length; i++) {
            if (list[i].phone == obj.phone) {
                console.log(list[i].$key);
                return list[i].$key;
            }
        }
        return "";
    };
    UserService.prototype.getUsers = function () {
        return this.UserContacts;
    };
    UserService.prototype.addUser = function (user) {
        this.UserContacts.push(user);
    };
    UserService.prototype.removeBike = function (index) {
        this.UserContacts.remove(index);
        console.log(this.UserContacts);
    };
    return UserService;
}());
UserService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [AngularFireDatabase])
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map