// ========================= home work 1====================
// let obj={
//     num:0,
//     get marks(){
//        return this.num
//     },
//     set marks(num){
//         if(num<0){
//            throw console.error('0dan kicik eded daxil etdiniz');
//         }else{
//             return this.num=num
//         }
//     }

// }
// obj.marks=-2

// console.log(obj.marks);

// ======================== home work 2=======================
// let obj={
//     userid:null,
//     get getUser(){
//         return this.userid
//     },
//     set setUser(value){
//         if(this.userid===null){
//             this.userid=value
//         }else{
//             Object.freeze(this.userid)
//         }
//     }
// }

// obj.setUser='hello'
// obj.setUser='world'


// console.log(obj.getUser);
//============================== home work 3 =========================

// const obj = {
//     id: 1,
//     username: "John",
//     password: "secret",
//     email: "john@email.com",
//     };

// let jsonObj=JSON.stringify(obj,['id','username','email'])
// console.log(jsonObj);

// ============================== home work 4 =========================

// const obj={
//   count:0,
//   get counter(){
//    return ++this.count
//   }


// }

// console.log(obj.counter);
// console.log(obj.counter);
// console.log(obj.counter);

// ============================ home work 5 ==============================
// class employee{
//     constructor(name,id){
//         this.name=name;
//         this.id=id;
//         this.salary=null
//     }
//         get Salary(){
//             return this.salary
//         }
//         set setSalary(value){
//             return this.salary=value
//         }
//     }

//     let newObj=new employee('name',34)
//     newObj.setSalary=234
//     console.log(newObj);

//==================================== home work 6 ============================
let person = {
	name: "John",
	contact: {
		phone: "987-654-3210",
		email: "john123@xyz.com",
		address: {
			city: "Berlin",
			country: "Germany"
		}
	}
};

function nestedObj(obj,prefix=''){
    for(const key in obj){
      if(typeof obj[key]==='object' && obj[key] !==null){
        nestedObj(obj[key],prefix+key+'.')
      }else{
        console.log('key : '+prefix+key+' value : '+obj[key]);
      }
    }
}

nestedObj(person)