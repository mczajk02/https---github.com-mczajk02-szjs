
let div = document.querySelector('div');
let table = document.createElement("table");

let headerRow = document.createElement("tr");
let header = document.createElement("th");
  


headerRow.appendChild(header);

for (let i = 1; i <= 10; i++) {

  let header = document.createElement("th");
  
  header.textContent = i;

  headerRow.appendChild(header);
 
}

table.appendChild(headerRow);
for(let j = 1; j <= 10; j++) {
  
    let row = document.createElement("tr");
    let celOne = document.createElement("td");
    celOne.textContent = j;
    row.appendChild(celOne);
    for(let i = 1; i <= 10; i++) {
        let cell = document.createElement("td");
        cell.textContent = j * i;
        row.appendChild(cell);
    }
    table.appendChild(row);
}




div.appendChild(table);



const tabela = document.querySelector('table');

tabela.addEventListener('mouseover', (event) => {
  
  const td = event.target;
  const tr = td.parentNode;
  const colIndex = td.cellIndex;

  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].cells[colIndex].classList.add('highlight');
  }
  tr.classList.toggle('highlight');
});

tabela.addEventListener('mouseout', (event) => {
  
    const td = event.target;
    const tr = td.parentNode;
    const colIndex = td.cellIndex;
  
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].cells[colIndex].classList.remove('highlight');
    }
    tr.classList.toggle('highlight');
  });