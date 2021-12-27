const btnGetInTouch=document.querySelector('.btn-get')
const formcontainer=document.querySelector('.get-in-touch-cotact-form')
const btncancel=document.querySelector('.cancel')
const form=document.querySelector('form')
const txtusername=document.querySelector('.username')
const txtemail=document.querySelector('.useremail')
const txtmsg=document.querySelector('.usermsg')

btnGetInTouch.addEventListener('click',()=>{

    formcontainer.classList.remove('d-none')
    

})
var openGetInTouch=()=>{
    
    formcontainer.classList.remove('d-none')
    txtusername.focus();
                
}
btncancel.addEventListener('click', (e)=>{
    e.preventDefault()
    form.reset()
    formcontainer.classList.add('d-none')
   
})

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(txtusername.value.trim()===""){
        alert("Please Fill All GetInTouch Input Fields")
        return;
    }
    if(txtemail.value.trim()===""){
        alert("Please Fill All GetInTouch Input Fields")
        return;
    }
    emailsend();
    form.reset();    
    formcontainer.classList.add('d-none')
    setTimeout(function(){ alert("Your Email Sent Successfully. You Will Get Email Confirmation."); }, 2000);
})


const  emailsend=()=>{
    Email.send({
        
        SecureToken : "caba590a-d790-4496-ba6d-591b7b4e3d90",
        To : txtemail.value.trim(),
        From : "abdurrehmaan0@gmail.com",
        Subject : "GET IN TOUCH (IOMES)",
        Body : `Hello <b> ${txtusername.value.trim()}</b>: <br> Thank you for contacting us.<br>We have recieved your email.<br>We will reply you very soon.<br><br> <b>Best Regards:</b><br><span>IOMES Group</span>`
    }).then(
    
    ).catch(err=>{
        console.log(err)
    })
    Email.send({
        SecureToken : "caba590a-d790-4496-ba6d-591b7b4e3d90",
        To : 'abdurrehmaan0@gmail.com',
        From : "abdurrehmaan0@gmail.com",
        Subject : `GET IN TOUCH (IOMES)`,
        Body : `<b>${txtusername.value}</b> is trying to connect you through Get In Touch from this <b>Email: ${txtemail.value.trim()}</b> <br><br> ${txtmsg.value.trim()}  `
    }).then(
        
    ).catch(err=>{
        console.log(err)
    })
}

          var lessevents=document.querySelector('.less')
          var moreevents=document.querySelector('.more')
          var btnLess=document.querySelector('.btnLess')
          var btnMore=document.querySelector('.btnMore')

          var showMore=(ele)=>{
            ele.classList.add('d-none')
            btnLess.classList.remove('d-none')
            lessevents.classList.add('d-none')
            moreevents.classList.remove('d-none');
            
            
          }
          var showLess=(ele)=>{
            ele.classList.add('d-none');
            btnMore.classList.remove('d-none');
            lessevents.classList.remove('d-none');
            moreevents.classList.add('d-none');

          }

     