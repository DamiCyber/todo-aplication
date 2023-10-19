var allTodo = []

function submitTodo() {

var mytodo = document.getElementById('todo').value

if( mytodo == ""){
    error.innerHTML = `<p style="color:crimson;"> I am not yet filled<p>` 
}
else{
   allTodo.push(mytodo)
    error.innerHTML = ""
    todo.value = ""
   loop()
}
}
function loop(){
   disp.innerHTML=""
   for(i=0; i<allTodo.length; i++){
       disp.innerHTML += ` <p>${i+1}.&nbsp${allTodo[i]}</p>`
    }
}n 
function addfirst(){
   var mytodo = document.getElementById('todo').value

if( mytodo == ""){
 error.innerHTML = ` <p style="color:crimson;">I am not yet filled</p>` 
   }
  else{
   alert("Already Added")
   allTodo.unshift(mytodo)
   error.innerHTML = ""
   todo.value = ""
   loop()
      }
}
function deletefirst(){
       alert("Already deleted")
       allTodo.shift()
       loop()
}
function deletelast(){
   alert("Last already deleted")
   allTodo.pop();
   loop()
}
function editany(){
  var pad = Number(prompt("enter a number you want to edit"))
  var userEdit = prompt("what do you want to edit it to")
  allTodo[pad -1] = userEdit
//    allTodo.splice(pad) 
//    var pad = prompt("enter second number")
  loop()
}
function deleteany(){
   var userInput = Number(prompt("enter a number you want to delete"))
   allTodo.splice(userInput- 1, 1)
  loop()
}