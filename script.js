function compute() {
    var principal = document.getElementById("principal");
    var rate = document.getElementById("rate");
    var years = document.getElementById("years");
    var interest = principal.value * years.value * rate.value / 100;
    var fyear = 2020 + years.value * 1;
    if (principal.value <= 0){
    	alert("Enter a positive number");
        principal.focus();
        return false;
    }
    return document.getElementById("result").innerHTML = "If you deposit \<mark\>" + principal.value + "\<\/mark\>,\<br\>" + "at an interest rate of \<mark\>" + rate.value + "%\<\/mark\>.\<br\>" + "You will receive an amount of \<mark\>" + interest + "\<\/mark\>,\<br\>" + "in the year \<mark\>" + fyear + "\<\/mark\>\<br\>\<br\>";
}
function display() {
    var rselected = document.getElementById("rate").value;
    return document.getElementById("srate").innerHTML = rselected;
}
