let moment=require("moment");

let data=document.querySelector(".date");
data.innerHTML=`Today is :`+moment().format('MMMM Do YYYY, h:mm:ss a');