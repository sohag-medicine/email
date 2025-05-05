// Sample JSON data (replace this with your actual data)
const userData = [
{"National ID":"30511281400311","username":"ابانوب سامى حنه ادريس","Usercode":"Abanoub.Sami2025@med.sohag.edu.eg","password":"Z(772757606015uh"}
    ];
function retrieveInfo() {
    const id = document.getElementById('nationalID').value;
    const resultBody = document.getElementById('resultBody');
    
    // Clear previous results
    resultBody.innerHTML = '';

    const user = userData.find(user => user["National ID"] === id);

    if (user) {
        // Create a new row and populate it with user data
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.username}</td>
            <td>${user.Usercode}</td>
            <td>${user.password}</td>
        `;
        resultBody.appendChild(row);
    } else {
        // Show message if no user is found
        const row = document.createElement('tr');
        row.innerHTML = '<td colspan="3">رقم البطاقة غير صحيح</td>';
        resultBody.appendChild(row);
    }
}
