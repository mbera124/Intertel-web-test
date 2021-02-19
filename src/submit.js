import 'lit-element'; 
function myFunction() {
     var jina=document.getElementById("namem").value;
        var mail=document.getElementById("mail").value;
        var contact=document.getElementById("phonenum").value;
//    var phone = $("#phonenum").val;
//    alert("Phone number" + " "+ "hhh" );
         result = jina + "," + mail + "," + contact;
        alert(result);
        return result;
// console.log(this.prop);
    }