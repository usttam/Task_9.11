
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

document.querySelector('#btnGenerator').addEventListener('click',()=>{
    const initPerson = personGenerator.getPerson();    
    document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
    document.querySelector('#surnameOutput').innerText = initPerson.lastName;
    document.querySelector('#genderOutput').innerText = initPerson.gender;
    document.querySelector('#birthYearOutput').innerText = initPerson.birthDate;
    document.querySelector('#familyNameOutput').innerText = initPerson.familyName;
    document.querySelector('#professionOutput').innerText = initPerson.jobProffesion;
})

document.querySelector('#btnClear').addEventListener('click',()=>{
    document.querySelector('#firstNameOutput').innerText = '[Имя]';
    document.querySelector('#surnameOutput').innerText = '[Фамилия]';
    document.querySelector('#genderOutput').innerText = '[Пол]';
    document.querySelector('#birthYearOutput').innerText = '[Дата рождения]';
    document.querySelector('#familyNameOutput').innerText = '[Отчество]';
    document.querySelector('#professionOutput').innerText = '[Профессия]';

    /*document.querySelector('#firstNameOutput').innerText = '';
    document.querySelector('#surnameOutput').innerText = '';
    document.querySelector('#genderOutput').innerText = '';
    document.querySelector('#birthYearOutput').innerText = '';
    document.querySelector('#familyNameOutput').innerText = '';
    document.querySelector('#professionOutput').innerText = '';*/

})