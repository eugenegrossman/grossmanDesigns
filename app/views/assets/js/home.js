
//check for three valid imputs
//if both checks are met, send object
//close the box

function emailSender(){
 // console.log('xxx')
 var emailObject = {
   name: document.getElementById('name').value,
   email: document.getElementById('email').value,
   emailBody: document.getElementById('emailBody').value
 }
 console.log(emailObject);
 if(emailObject.name && emailObject.email && emailObject.emailBody){
   //send Email
   console.log('email Being sent!')
   // document.getElementById('myModal').style.display = 'none';

 }
}
