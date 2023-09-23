const login=document.getElementById('login');
const signup=document.getElementById('signup');
const loginForm=document.getElementsByClassName('login-form')[0];
const signupForm=document.getElementsByClassName('signup-form')[0];
const closeForm=document.getElementsByClassName('close');
const loginid=document.getElementById('username').value;
const loginpass=document.getElementById('password').value;


//trigger login form
login.addEventListener('click',()=>{
    // if(document.body.style.filter=="blur(1.5px)"){
    //     document.body.style.filter="blur(0px)";
    // }
    // else{
    //     document.body.style.filter="blur(1.5px)"
        loginForm.style.display="block";
        const loginBtn=document.getElementById('loginBtn');
        loginBtn.addEventListener('click',()=>{
            console.log("clicked btn")
            successLogin();
        })
    //     loginForm.style.filter="blur(0px)";

    // }
})
//login condition by default --admin
function successLogin(){
    const errorMessage=document.getElementById('message')
    const getAdmin=document.getElementById('admin');
    const getlogout=document.getElementById('logout');
    const logoutBtn=document.getElementById('logoutBtn');
    if(loginid=='' || loginpass==''){
        login.style.display="none";
        signup.style.display="none";
        loginForm.style.display="none";
        getAdmin.style.display="block";
    }
    else{
        errorMessage.style.display="block";
    }
    getAdmin.addEventListener('click',()=>{
        getlogout.style.display="block";
        logoutBtn.style.display="block";
        logoutBtn.addEventListener('click',()=>{
            login.style.display="block";
            signup.style.display="block";
            getAdmin.style.display="none";
            getlogout.style.display="none";
        })
    
        
    })
}
//trigger signup form
signup.addEventListener('click',()=>{
    signupForm.style.display="block";
})

//closing forms
Array.from(closeForm).forEach(element=>{
    element.addEventListener('click',()=>{
        if(loginForm.style.display=="block"){
            loginForm.style.display="none";
        }
        else if(signupForm.style.display=="block"){
            signupForm.style.display="none";
        }
        
    })
})

const fnameVal=document.getElementById('fname');
const checkout=document.getElementById('checkout');
const order=document.getElementById('order');

checkout.addEventListener('click',()=>{
    order.style.display="block";
    order.innerHTML="order placed against tracking id 7634783286311 & name is: <span><h1><i>"+fnameVal.value+"</i></h1></span> ";

})