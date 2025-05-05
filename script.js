// Sample JSON data (replace this with your actual data)
const userData = [
{"National ID":"30608012600332","username":"يوسف محمد صفوت عبد الحميد","Usercode":"1310202400651","password":"30608012600332"}
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
