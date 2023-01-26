//getting data
// creating an array
let students = [];

const addstudent = (ev)=>{
//creating an object
let student= {
id: Date.now(),
studentName: document.getElementById('name').value,
studentEmail: document.getElementById('email').value,
studentGender: document.getElementById('gender').value,
studentAge: document.getElementById('age').value,
studentImage: document.getElementById('image').value}
//-----------------------------------
students.push(student);
document.forms[0].reset();
}
document.getElementById('add').addEventListener('click', addstudent);
localStorage.setItem('students', JSON.stringify(students))
    
let Arrayelements = JSON.parse(localStorage.getItem('students'));
console.log(Arrayelements);




//creatingb the filter 
let myInput = document.getElementById('searche');
 myInput.onkeyup = function() {
   let MyResult = students.filter(student => student.studentName === myInput.value || student.studentAge === myInput.value || student.studentEmail === myInput.value || student.studentGender=== myInput.value)


   console.log(MyResult) 
}



let test= document.getElementById('searche').value;
let gg= document.getElementById('searche_content');
gg.innerHTML = `  <div class="card shadow">
<img src="./dipiter.jpg" alt="johns imagege" srcset="">
<p>${test}</p>
<h1 class="name">${test}</h1>
<button class="btn2" id="delete">delete</button>
</div>`;



const  myInput = document.getElementById('searche')
const searchinput = myInput.value;
 myInput.addEventListener("input", ()=>{
    console.log(test);
    function searchresult(fruit){
        return fruit.email === "rodriguetichi@gmail.com"
    }
     const answer = data.find(searchresult);
  })
  //--------------------------------------

  
const data = store.getStudent();
document.getElementById('searche').addEventListener('input', marcel);
function marcel(){
    
    if(searchInput === ''){
        console.log('its empty')
      
    }else{
        
        const answer = data.find(searchresult);
        console.log(answer)

      
    }

    function searchresult(fruit){
        manou = 'rodriguetichi@gmail.com'
        console.log(typeof(searchInput))
        return fruit.email === manou;
    }
     
}