async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        displayTable(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayTable(data) {
    const table = document.createElement('table');
    table.border = '1';
    const headerRow = table.insertRow();
    
    
    ['ID', 'Name', 'Email', 'Phone'].forEach(text => {
        const th = document.createElement('th');
        th.textContent = text;
        headerRow.appendChild(th);
    });
    
 
    data.forEach(user => {
        const row = table.insertRow();
        row.insertCell().textContent = user.id;
        row.insertCell().textContent = user.name;
        row.insertCell().textContent = user.email;
        row.insertCell().textContent = user.phone;
    });
    
    document.body.appendChild(table);
}

fetchData();
