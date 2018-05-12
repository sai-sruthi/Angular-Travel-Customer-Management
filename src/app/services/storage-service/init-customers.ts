export class Init{
    load(){
        if(localStorage.getItem('customers')==null || localStorage.getItem('customers')==undefined){
        console.log('No requests');
           var customers=[{
                id:1,
                name:"Name1",
                age:21,
                description:"Description 1",
                type:"Regular",
                mobileNo:"mobile1",
                distance:100,
                loyal:true,
                charges:20,
                employees:0
                            },{
                 id:2,
                name:"Name2",
                age:0,
                description:"Description 2",
                type:"Corporate",
                mobileNo:"mobile2",
                distance:200,
                loyal:false,
                charges:15,
                employees:9
                            },{
                                 id:3,
                name:"Name3",
                age:0,
                description:"Description 3",
                type:"Corporate",
                mobileNo:"mobile3",
                distance:1500,
                loyal:false,
                charges:25,
                employees:25
                            }
            ];
            localStorage.setItem('customers',JSON.stringify(customers));
            return;
        }
        else{
console.log("Found");
        }
    }
}