 const studentName= document.getElementById('name').value;
 const studentEmail= document.getElementById('email').value;
 const studentGender= document.getElementById('gender').value;
 const studentAge=document.getElementById('age').value;
 const studentImage= document.getElementById('image').value;



 class student {
    constructor(name, email, gender, image){
      
        this.name=name;
        this.email=email; 
        this.gender=gender;
        this.image=image;
        this.id= Date.now();


    }
 }


 class store{
    static getStudent() {
     let students;
     if(localStorage.getItem('students') === null) {
         students = [];
     }else{
         students= JSON.parse(localStorage.getItem('students'));
     }
     return students;
 
     }
    static addStudent(student){
     const students = store.getStudent();
     students.push(student);
     localStorage.setItem('students', JSON.stringify(students))
 
     }

     static deleteStudent(){
        const students = store.getStudent();
        students.forEach((student, index)=>{
            if(student.name === studentName){
                students.splce(index, 1);
            }
         });
         localStorage.setItem('students', JSON.stringify(students));

       
     }

 }
 class UI {

    static displayStudent(){
        const students = store.getStudent();
        students.forEach((student)=>UI.addStudentToList(student));
    }
    

    static addStudentToList(student){
        const card = document.querySelector('#card');
        const newCard = document.createElement('div');
        newCard.innerHTML = `  <div class="card shadow">
            <img src="./dipiter.jpg" alt="johns imagege" srcset="">
            <p>${student.email}</p>
            <h1 class="name">${student.name}</h1>
            <button class="btn2" id="delete">delete</button>
        </div>`;
        card.appendChild(newCard);
    }
    




    static deleteStudent(el) {
        if(el.classList.contains('btn2')){
            el.parentElement.parentElement.remove();

        }
    }
    static showalert(message, className){
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('.left_section');
        container.insertBefore(div, form);

        setTimeout(()=>document.querySelector('.alert').remove(), 1500);

    }
 }

 //display students
 document.addEventListener('DOMContentLoaded', UI.displayStudent);


 // geting form data 
 document.querySelector('#add').addEventListener('click', (e)=> {
    const studentName= document.getElementById('name').value;
    const studentEmail= document.getElementById('email').value;
    const studentGender= document.getElementById('gender').value;
    const studentAge=document.getElementById('age').value;
    const studentImage= document.getElementById('image').value;
    if(studentName === '' || studentEmail === ''){
        //alert('enter all feilds')
        UI.showalert('enter all feilds', 'danger')

    }else{
        const newStudent = new student(studentName, studentEmail, studentGender, studentImage);
        UI.addStudentToList(newStudent);
        store.addStudent(newStudent);
        document.forms[0].reset();
        //alert('book added')
        //UI.showalert('book added', 'succes')
    }
   
 });

 //deleting card
 //we will be using event propagation
 document.querySelector('#card').addEventListener('click', (e)=>{
    UI.deleteStudent(e.target);
    store.deleteStudent(e.target.parentElement.previousElementSibling.textContent);
    //alert('book deleted succesfully');
 });


//searching capability
const searchOutput = document.getElementById("searche_content");
const searchInput = document.getElementById("searche").value;
const outputHtml = matches =>{
    if(matches.length > 0){
        const html = matches
        .map(
            match => `<div class="card shadow">
            <img src="./dipiter.jpg" alt="johns imagege" srcset="">
            <p>${match.email}</p>
            <h1 class="name">${match.name}</h1>
            <button class="btn2" id="delete">delete</button>
        </div>`
        )
        .join('');
        searchOutput.innerHTML = html;
    }
}
document.getElementById('searche').addEventListener('input', searchStudents);
function searchStudents() {
    data = store.getStudent();
    let matches;
    const searchInput = document.getElementById("searche").value;
    if(searchInput === ''){
  matches = [];
  searchOutput.innerHTML = '';
    }else{
         matches = data.filter(student =>{
            const regex = new RegExp(`${searchInput}`,'gi');
            return student.name.match(regex) || student.email.match(regex);
        }
        );
       outputHtml(matches);
    }
 
};







       
   
    
    
    
   


