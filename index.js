let form=document.forms[0];
let name,password,userlist=[];
form.addEventListener("submit", e=>{
    e.preventDefault();
    name=form.elements.one.value;
    password=form.elements.two.value;
    if(name.length<4){
        alert("Name should have more than 3 characters");
    }
    else{
    userlist.push({name,password});
    console.log(userlist);
    alert("form submitted");
    }
})