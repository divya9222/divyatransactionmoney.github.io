
const btn=document.getElementById('send');
btn.addEventListener('click',()=>{
   const show=document.getElementById('show');
   if(show.style.display==='none')
   {
      show.style.display='block';
   }
   
   else{
      show.style.display='none';
   }
})


let myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText);
function sendMoney(){
   var enterName = document.getElementById("enterName").value;
var enterAmount = parseInt(document.getElementById("enterAmount").value);
   if (enterAmount > 8000) {
      alert("Insufficient Balance.")
   } else {
      var findUserBankAccount = enterName + "BankBalance";
      var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
      var myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText) - enterAmount
      document.getElementById("myAccountBalance").innerText = myAccountBalance
      document.getElementById(findUserBankAccount).innerHTML = finalAmount;
      alert(`Successful Transaction !!  
      Rs.${enterAmount} is sent to ${enterName}@email.com.`)

   }
}