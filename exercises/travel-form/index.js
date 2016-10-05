function plane() {

    var fname = document.forms.travel.fname.value;
    var lname = document.forms.travel.lname.value;
    var age = document.forms.travel.age.value;
    var gender = document.forms.travel.gender.value;
    var travel = document.forms.travel.flightPoints.value;
    
    var allergy = document.forms.travel.allergy;
    var allergyList = ''
    for (var i = 0; i < allergy.length; i++) {
        if (allergy[i].checked) {
            allergyList += (allergy[i].value + " ");
            }
        }
    
    if (allergyList === "") {
            allergyList = "None"
    }
    
    alert("First name: " + fname + "\nLast name: " + lname + "\nAge: " + age + "\nGender: " +       gender + "\nLocation: " + travel + "\nRestrictions: " + allergyList);
    
}