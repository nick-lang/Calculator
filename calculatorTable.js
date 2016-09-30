var table = document.createElement('table');
table.id = 'table';
var thead = document.createElement('thead');
var th = document.createElement('th');
th.colSpan = "4";
th.id = 'result';

thead.appendChild(th);
table.appendChild(thead);

var tbody = document.createElement('tbody');

var tr = document.createElement('tr');
var td1 = document.createElement('td');
var td2 = document.createElement('td');
var td3 = document.createElement('td');
var td4 = document.createElement('td');
td1.textContent = 'C';
td1.id = 'clear';
tr.appendChild(td1);
td2.textContent = '+/-';
tr.appendChild(td2);
td3.textContent = '%';
tr.appendChild(td3);
td4.textContent = '/';
td4.id = 'divide';
tr.appendChild(td4);
tbody.appendChild(tr);

var tr = document.createElement('tr');
var td1 = document.createElement('td');
var td2 = document.createElement('td');
var td3 = document.createElement('td');
var td4 = document.createElement('td');
td1.textContent = '7';
td1.id = 'seven'
tr.appendChild(td1);
td2.textContent = '8';
td2.id = 'eight'
tr.appendChild(td2);
td3.textContent = '9';
td3.id = 'nine'
tr.appendChild(td3);
td4.textContent = 'X';
td4.id = 'multiply'
tr.appendChild(td4);
tbody.appendChild(tr);

var tr = document.createElement('tr');
var td1 = document.createElement('td');
var td2 = document.createElement('td');
var td3 = document.createElement('td');
var td4 = document.createElement('td');
td1.textContent = '4';
td1.id = 'four'
tr.appendChild(td1);
td2.textContent = '5';
td2.id = 'five'
tr.appendChild(td2);
td3.textContent = '6';
td3.id = 'six'
tr.appendChild(td3);
td4.textContent = '-';
td4.id = 'subtract'
tr.appendChild(td4);
tbody.appendChild(tr);

var tr = document.createElement('tr');
var td1 = document.createElement('td');
var td2 = document.createElement('td');
var td3 = document.createElement('td');
var td4 = document.createElement('td');
td1.textContent = '1';
td1.id = 'one'
tr.appendChild(td1);
td2.textContent = '2';
td2.id = 'two'
tr.appendChild(td2);
td3.textContent = '3';
td3.id = 'three'
tr.appendChild(td3);
td4.textContent = '+';
td4.id = 'add'
tr.appendChild(td4);
tbody.appendChild(tr);

var tr = document.createElement('tr');
var td1 = document.createElement('td');
var td2 = document.createElement('td');
var td3 = document.createElement('td');
td1.textContent = '0';
td1.id = 'zero'
td1.colSpan = '2'
tr.appendChild(td1);
td2.textContent = '.';
td2.id = 'decimal'
tr.appendChild(td2);
td3.textContent = '=';
td3.id = 'equals'
tr.appendChild(td3);
tbody.appendChild(tr);

table.appendChild(tbody);
document.body.appendChild(table);
