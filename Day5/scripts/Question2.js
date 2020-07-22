

class User
{
    constructor(name,age,email,coins)
    {
        // this refers to owner of the object ie user
        this.name=name;
        this.age=age;
        this.email=email;
        this.courses=[];
        this.coins=coins;
    }
        login()
        {
            console.log(`${this.name} is logged in`);
        }

        logout()
        {
            console.log(`${this.name} is logged out`);
        }
    
}

class Moderator extends User
{
    addCoins(){
        this.coins++;
        console.log(`${this.name} has ${this.coins} luCoins`);
        return this;
    }
    
    removeCoins(){
        this.coins--;
        console.log(`${this.name} has ${this.coins} luCoins`);
        return this;
    }
} 

class Admin extends Moderator
{
   addCourse(user,course)
   {
    user.courses.push(course);
   }

   deleteCourse(user,course)
   {
    user.courses.pop(course);
   }
}


let userOne=new User('Rohit',25,'Rohitnair@gmail.com',0);
let userTwo=new User('Ishant',23,'ishatnaik@mitaoe.edu',0);

let mod=new Moderator('Berlin',24,'b@gmail.com',0);
let admin=new Admin('Nairobi',27,'nai@gmail.com');

userOne.login();

admin.addCourse(userOne,'JavaScript');
admin.addCourse(userOne,'Python');

console.log(userOne);
console.log(userOne.courses);
admin.deleteCourse(userOne,'Python');
console.log(userOne.courses);

console.log(mod.addCoins());
mod.addCoins();
console.log(mod);

userOne.logout();