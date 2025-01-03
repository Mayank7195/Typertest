users=[]

const registerButton=document.querySelector('#Register');
const username=document.querySelector('#username');
const password=document.querySelector('#password');
const loginButton=document.querySelector('#Login');
function signup(){
   users.push({username:username.value,password:password.value});
   alert('Sign up successfull. Now you can click on login.');
}
function login(){
   const currentuser=users.find(user => user.username === username.value && user.password === password.value);
    if(currentuser){
    alert('login successfull');
    loadApp();
    }else{
        alert('Invalid credential')
    }
    
}
function loadApp(){
    document.querySelector('#Open').innerHTML=`
    <button><a href="1st.html">Next</a></button>
    <style>
    a{
        color:black;
        text-decoration:none;
    }
    </style>`
    
}
registerButton.addEventListener('click',signup);
loginButton.addEventListener('click',login);
//background-color: rgb(0, 124, 173);
// background-color:rgb(0, 200, 255);
//border-color:rgb(0, 200, 255);