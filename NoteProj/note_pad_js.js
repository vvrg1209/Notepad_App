//global variable
var email=localStorage.getItem('email')
var nam=localStorage.getItem('name')
str=email+nam
var u=JSON.parse(localStorage.getItem(str))?JSON.parse(localStorage.getItem(str)):[]
u.forEach((n,i,l) => {
    var row=table.insertRow();
    row.insertCell(0).innerHTML=l[i].title;
    row.insertCell(1).innerHTML=l[i].desc;
    row.insertCell(2).innerHTML=`<button onclick="edit(this)">Edit</button>
    <button onclick="remove(this)">Delete</button>`}
);

function Submit(){
   var dataentered = retrieveData(); 
   readingDataFromLocalStorage(dataentered);
   if (dataentered==false){
    msg.innerHTML="please enter the valid data"
   }
   else{
 window.location.reload()
}
document.getElementById("form").reset();
}

//create//Retreving data from form
function retrieveData() {
    var title =document.getElementById("title").value;
    var desc=document.getElementById("desc").value;
    var arr=[title,desc]
    if(arr.includes("")){
        return false
    }
    else{
    return arr;}
}

//Data in localstorage
function readingDataFromLocalStorage(dataentered){
var title =dataentered[0]
var desc=dataentered[1]
var email=localStorage.getItem('email')
var nam=localStorage.getItem('name')
str=email+nam
user_records=new Array()
var user_records=JSON.parse(localStorage.getItem(str))?JSON.parse(localStorage.getItem(str)):[]
if(user_records.some((v)=>{return v.title==title})){
    alert("duplicate title")
}
else{
    user_records.push({'title':title,'desc':desc})
    localStorage.setItem(str,JSON.stringify(user_records))
}}

//edit
function edit(xy){
    row=xy.parentElement.parentElement;
    document.getElementById("title").value=row.cells[0].innerHTML
    document.getElementById("desc").value=row.cells[1].innerHTML
    g=row.rowIndex
    u.splice(g-1,1);
    localStorage.setItem(str, JSON.stringify(u));
    document.getElementById("table").deleteRow(row.rowIndex)
}

function remove(xy){
    var ans=confirm("Are you sure you want to delete this record?")
    if (ans==true){
    row=xy.parentElement.parentElement
    g=row.rowIndex
    u.splice(g-1,1);
    localStorage.setItem(str, JSON.stringify(u));
    window.location.reload()
}}

function logout(){
window.location.href="note_pad_login.html"
}