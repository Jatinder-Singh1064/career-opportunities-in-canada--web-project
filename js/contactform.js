/***********************************************************************/
/********************* Contact Us Form Validations *********************/
/***********************************************************************/
$(document).ready(function() {
    $('#btSubmit').click(function() {  
        var hasError = false;
        const fname=$("#txtFirstname").val();
        var emailaddressVal = $("#txtEmail").val();
        const comment=$("#commentarea").val();
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        
        if((fname==='') || ($.trim(fname) == ''))
        {
            $("#spanName").text("First Name is required.");
            hasError = true;
             return false; 
        }
        else {
            $("#spanName").text("*");
            hasError = false;
        }        
        
        if((emailaddressVal === '') || ($.trim(emailaddressVal) == '')) {
             $("#spanEmail").text("Email is required.");
            hasError = true;
             return false; 
        }
        else if(!emailReg.test(emailaddressVal)) {
            $("#spanEmail").text("Enter a valid email address.");
            hasError = true;
             return false; 
        }
         else {
            $("#spanEmail").text("*");
            hasError = false;
        }
        
        if((comment=="") || ($.trim(comment) == ''))
        {
            $("#spanComment").text("Please tell us your feedback.");
            hasError = true;
             return false; 
        }
        else{
            $("#spanComment").text("*");
            hasError = false;
        }
        
        if(hasError == true) { 
            /*alert("error");*/
            return false; 
        }
        else{
            alert("Thanks for contacting us.");
             $("#cnForm").submit();
        }
    });
});
