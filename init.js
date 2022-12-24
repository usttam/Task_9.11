
window.onload = function()
{
    const initPerson = personGenerator.getPerson();    
    document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
    document.querySelector('#surnameOutput').innerText = initPerson.lastName;
    document.querySelector('#genderOutput').innerText = initPerson.gender;
    document.querySelector('#birthYearOutput').innerText = initPerson.birthDate;
    document.querySelector('#familyNameOutput').innerText = initPerson.familyName;
    document.querySelector('#professionOutput').innerText = initPerson.jobProffesion;
};

