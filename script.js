


//ASYNCHRONOUS JS.
//Asynchronous patterns:

//Call-back; a function passed as an argu  ment to another function

function myDisplayer(some) {
  return some;
}

function myFormatter(solution) {
  return `The result is ${solution}`;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  return myCallback(sum); 
}

const result = myCalculator(5, 5, myDisplayer);
const result2 = myCalculator(5, 5, myFormatter);
console.log(result);
console.log(result2);



function performTask(taskName,callback){
  console.log(`Starting task: ${taskName}`);

  console.log("Loading.....")

  setTimeout(()=>{
    console.log(`Finished task: ${taskName}`)
    callback()
  },2000)
}


function taskCompleted(){
  console.log(`Task is completed`);
}

performTask(`Download File`, taskCompleted)




//  Stimulating fetching a data from an API

const api = [
  {
    name: "Mubarak",
    language: "Birum"
  },

  {
    name: "Chapo",
    language: "Okun"
  },

  {
    name: "OG",
    language: "Yoruba"
  },

  {
    name: "Anate",
    language: "Ebira"
  }
]

function fetchData(callback){
  console.log("Loading...")


  setTimeout(()=>{
    console.log("data fetched Successfully")
    const data = api.find(person => person.name === "Anate");
  },3000)
}

function personLanguage(data){
  console.log(data.language)
}

fetchData(personLanguage);


//PROMISE : A modern way to handle asynchronous operations. Representing the eventual completion or failure of an asynchronous operation and its resulting value

function fectchStudents(){
  return new Promise ((resolve,reject)=>{

    //simulate the data fetching
    setTimeout(()=>{
      const success = true;
      if(success){
        const data1 = api.find(person=> person.name === "OG");
        resolve(data1)
      }else{
        reject(new Error("Failed to get the Data"))
      }
    },5000)
  })
}


//Using the FetchStudents function with promise

fectchStudents().then((data1)=>console.log(data1.language)
).catch((error)=>{
  console.error("Name does not Exist",error)
})