$(document).ready(onReady);

var employees = [];
var monthlyCost = 0;
employeeCounter = 0;

function onReady() {    
// event listeners for buttons
    $('#submitButton').on('click', addEmployee);
    $('.container').on('click', '.deleteButton', deleteEmployee);
}

// constructor to create new employee
function Employee (firstName, lastName, idNumber, jobTitle, annualSalary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.idNumber = idNumber;
    this.jobTitle = jobTitle;
    this.annualSalary = annualSalary;             
    monthlyCost += parseInt(this.annualSalary/12);
    $('#monthlyCost').text(monthlyCost);
}

// when clicked, add new employee to array
function addEmployee() {
    $firstName = $('#firstName');
    $lastName = $('#lastName');
    $idNumber = $('#idNumber');
    $jobTitle = $('#jobTitle');
    $annualSalary = $('#annualSalary');
    
    //extra practice with an if statement saying if any value is blank, alert a message.
    if ($firstName.val() === '' || $lastName.val() === '' || $idNumber.val() === '' || $jobTitle.val() === '' || $annualSalary.val() === ''){
        alert('Please enter all fields.');
        return;
    }
    
    var employee = (new Employee ($firstName.val(), $lastName.val(), $idNumber.val(), $jobTitle.val(), $annualSalary.val()));
    employees.push(employee);
    // clear values
    $firstName.val(''); $lastName.val(''); $idNumber.val(''); $jobTitle.val(''); $annualSalary.val('');
    newEmployee();
}

function newEmployee() {
    var $article = $('<article><p>');
    $('.container').append($article);
    $article.append('Name: ' + employees[employeeCounter].firstName + ' ' + employees[employeeCounter].lastName);
    $article.append('<br>ID Number: ' + employees[employeeCounter].idNumber);
    $article.append('<br>Job Title: ' + employees[employeeCounter].jobTitle);
    $article.append('<br>Annual Salary: $' + employees[employeeCounter].annualSalary);
    $article.append('<br><button class="deleteButton">Delete</button></p>');
    employeeCounter++;
}

function deleteEmployee() {    
    $(this).parent().remove();
}

