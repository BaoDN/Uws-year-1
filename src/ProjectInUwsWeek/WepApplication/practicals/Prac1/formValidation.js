/**
 * Student ID: 18051230
 * Student Name: BAO DUY NGUYEN
 *  Tutor’s Name: Luke  Bozzetto
 */

function validateForm(form) {
  
    var valid = true;

    // check title
    if (isNoCheckboxSelected(form.title)) {
        valid = false;
        document.getElementById('title-label').style.color = 'red';
    } else {
        document.getElementById('title-label').style.color = 'black';
    }

    //check Sur Name
    if (form.surName.value.length == 0) {
        valid = false;       
        document.getElementById('surName-error').style.display = "inline-block";
        form.surName.style.border = "1px solid red";
    } else {
        document.getElementById('surName-error').style.display = "none";
        form.surName.style.border = "1px solid white";       
    }
    // check lenght <= 40 
    if (form.surName.value.length >= 40) {
        valid = false;
        document.getElementById('surName1-error').style.display = "inline-block";
        form.surName.style.border = "1px solid red";
    } else {
        document.getElementById('surName1-error').style.display = "none";
        form.surName.style.border = "1px solid white";
    }
    //check letter 
    var checkSurName = form.surName.value;
    if(checkSurName.search(/[^a-zA-Z]+/) === -1) {
        document.getElementById('surName2-error').style.display = "none";
        form.surName.style.border = "1px solid white";
    } else {
        valid = false;
        document.getElementById('surName2-error').style.display = "inline-block";
        form.surName.style.border = "1px solid red";
    }

    //check given Name
    if (form.givenName.value.length == 0) {
        valid = false;
        document.getElementById('givenName-error').style.display = "inline-block";
        form.givenName.style.border = "1px solid red";
    } else {
        document.getElementById('givenName-error').style.display = "none";
        form.givenName.style.border = "1px solid white";

    }
    // check lenght <= 40 
    if (form.givenName.value.length >= 40) {
        valid = false;
        document.getElementById('givenName1-error').style.display = "inline-block";
        form.givenName.style.border = "1px solid red";
    } else {
        document.getElementById('givenName1-error').style.display = "none";
        form.givenName.style.border = "1px solid white";
    }
    //check letter for givenNAME
    var checkgivenName = form.givenName.value;
    if (checkgivenName.search(/[^a-zA-Z]+/) === -1) {
        document.getElementById('givenName2-error').style.display = "none";
        form.givenName.style.border = "1px solid white";
    } else {
        valid = false;
        document.getElementById('givenName2-error').style.display = "inline-block";
        form.givenName.style.border = "1px solid red";
    }

    //check Date of Birth
    if (form.DOB.value.length == 0) {
        valid = false;
        document.getElementById('DOB-error').style.display = "inline-block";
        form.DOB.style.border = "1px solid red";
    } else {
        document.getElementById('DOB-error').style.display = "none";
        form.DOB.style.border = "1px solid white";
    }
   
    ////check format of the DOB ( DD/MM/YYYY)
    //var dateValue = form.DOB.value;
    //var temp = dateValue.split("/");
    //// check number for dob
    //if (dateValue.search(/[^0-9]+/) === -1) {
    //    document.getElementById('DOB1-error').style.display = "none";
    //    form.DOB.style.border = "1px solid #ccc";
    //} else {
    //    valid = false;
    //    document.getElementById('DOB1-error').style.display = "inline-block";
    //    form.DOB.style.border = "1px solid #ff0000";
    //}
    ////check format for dob
    //if (temp[0].length <= 2 && temp[1].length <= 2 && temp[3].length == 4) {
    //    document.getElementById('DOB2-error').style.display = "none";
    //    form.dateValue.style.border = "1px solid #ccc";
    //} else {
    //    valid = false;
    //    document.getElementById('DOB2-error').style.display = "inline-block";
    //    form.DOB.style.border = "1px solid #ff0000";
    //}

    // CHECK Country and State , if country is australlia , so they need enter the Sate
    var cou = form.country.value.toLowerCase();
  
    if (form.country.value.length == 0) {
        valid = false;
        document.getElementById('country-error').style.display = "inline-block";
        form.country.style.border = "1px solid red";

    } else if (cou != "australia") {
        document.getElementById('state-error').style.display = "none";
        form.state.style.border = "1px solid white";
    } else {
        if (form.state.value.length == 0) {
            valid = false;
            document.getElementById('state-error').style.display = "inline-block";
            form.state.style.border = "1px solid red";
        } else {
            document.getElementById('state-error').style.display = "none";
            form.state.style.border = "1px solid white";
        }
    }

    // check the addrress
    if (form.address.value.length == 0) {
        valid = false;
        document.getElementById('address-error').style.display = "inline-block";
        form.address.style.border = "1px solid red";
    } else {
        document.getElementById('address-error').style.display = "none";
        form.address.style.border = "1px solid white";
    }

    //check the postcode
    if (form.postCode.value.length == 0) {
        valid = false;
        document.getElementById('postCode-error').style.display = "inline-block";
        form.postCode.style.border = "1px solid red";
    } else {
        document.getElementById('postCode-error').style.display = "none";
        form.postCode.style.border = "1px solid white";
    }
    // check lenght = 4 For postcode
    if (form.postCode.value.length == 4) {
        document.getElementById('postCode1-error').style.display = "none";
        form.postCode.style.border = "1px solid white";
    } else {
        valid = false;
        document.getElementById('postCode1-error').style.display = "inline-block";
        form.postCode.style.border = "1px solid red";
    }
    //check number for postcode    
    var checkpostCode = form.postCode.value;
    if (checkpostCode.search(/[^0-9]+/) === -1) {
        document.getElementById('postCode2-error').style.display = "none";
        form.postCode.style.border = "1px solid white";
    } else {
        valid = false;
        document.getElementById('postCode2-error').style.display = "inline-block";
        form.postCode.style.border = "1px solid red";
    }

    // check phone for person details, they need add 1 phone at least.
    if (form.phoneAhPerson.value.length == 0 && form.phoneBhPerson.value.length == 0) {
        valid = false;
        document.getElementById('phonePerson-error').style.display = "inline-block";
        form.phoneAhPerson.style.border = "1px solid red";
        form.phoneBhPerson.style.border = "1px solid red";
    } else {
        document.getElementById('phonePerson-error').style.display = "none";
        form.phoneAhPerson.style.border = "1px solid white";
        form.phoneBhPerson.style.border = "1px solid white";
    }

    // check lenght = 10 For phoneAhPerson
    if (form.phoneAhPerson.value.length == 10) {
        document.getElementById('phoneAhPerson-error').style.display = "none";
        form.phoneAhPerson.style.border = "1px solid white";
    } else {
        valid = false;
        document.getElementById('phoneAhPerson-error').style.display = "inline-block";
        form.phoneAhPerson.style.border = "1px solid red";
    }
    //check number for phoneAhPerson    
    var checkphoneAhPerson = form.phoneAhPerson.value;
    if (checkphoneAhPerson.search(/[^0-9]+/) === -1) {
        document.getElementById('phoneAhPerson1-error').style.display = "none";
        form.phoneAhPerson.style.border = "1px solid white";
    } else {
        valid = false;
        document.getElementById('phoneAhPerson1-error').style.display = "inline-block";
        form.phoneAhPerson.style.border = "1px solid red";
    }

    // check lenght = 10 For phoneBhPerson
    if (form.phoneBhPerson.value.length == 10) {
        document.getElementById('phoneBhPerson-error').style.display = "none";
        form.phoneBhPerson.style.border = "1px solid white";
    } else {
        valid = false;
        document.getElementById('phoneBhPerson-error').style.display = "inline-block";
        form.phoneBhPerson.style.border = "1px solid red";
    }
    //check number for phoneAhPerson    
    var checkphoneBhPerson = form.phoneBhPerson.value;
    if (checkphoneBhPerson.search(/[^0-9]+/) === -1) {
        document.getElementById('phoneBhPerson1-error').style.display = "none";
        form.phoneBhPerson.style.border = "1px solid white";
    } else {
        valid = false;
        document.getElementById('phoneBhPerson1-error').style.display = "inline-block";
        form.phoneBhPerson.style.border = "1px solid red";
    }


    //check medicare no
    if (form.medicareNo.value.length == 0) {
        valid = false;
        document.getElementById('medicareNo-error').style.display = "inline-block";
        form.medicareNo.style.border = "1px solid red";
    } else {
        document.getElementById('medicareNo-error').style.display = "none";
        form.medicareNo.style.border = "1px solid white";
    }

    // check the checkbox of Private Health Insurance, if it is Yes, so they need fill all feild in the Health Insurance Details
    
    if (form.yesPHI.checked == true) {
        if (form.nameFund.value.length == 0 || form.membershipNo.value.length == 0
            || form.levelofInsurance.checked == false
            || form.excessApply.checked == false) {
            valid = false;
            document.getElementById('PHI-error').style.display = "inline-block";         
        } else 
            {
            document.getElementById('PHI-error').style.display = "none";
            //form.medicareNo.style.border = "1px solid #ccc";
        }
    } else if (form.yesPHI.checked == false)
    {
        document.getElementById('PHI-error').style.display = "none";
    }

    if (valid == false) {
        return false;
    }
    return true;

}
function isNoCheckboxSelected(checkboxGroup) {
    for (var i = 0; i < checkboxGroup.length; i++) {
        if (checkboxGroup[i].checked) {
            return false;
        }
    }
    return true;
}