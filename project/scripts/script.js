

document.addEventListener("DOMContentLoaded", function() {
    const currentyear = new Date().getFullYear();
    
    const lastModified = document.lastModified;
    
    const currentYearElement = document.getElementById("currentyear");
    if (currentYearElement) {
        currentYearElement.textContent = currentyear;
    }
  
    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last modification on: ${lastModified}`;
    }

    function validateForm() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        if (username === '' || password === '') {
            alert('Please fill in both fields');
            return false;
        }
        saveUserData(username, password);
        return true;
    }
    
    function saveUserData(username, password) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        alert('Sign-up successful!');
    }

    document.getElementById('signup-form').addEventListener('submit', function(event) {
        event.preventDefault(); 
        validateForm();
    });

    if (username.length < 3) {
        alert('Username must be at least 3 characters long');
    }

    let users = [];

    function addUser(username, password) {
        let user = { username: username, password: password };
        users.push(user);
        console.log(users); 
    }

    addUser('Jeremy', 'password123');

    const username = 'Jeremy';
    alert(`Welcome, ${username}! You have successfully signed up.`);

    function saveUserData(username, password) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    }

    function retrieveUserData() {
        const username = localStorage.getItem('username');
        const password = localStorage.getItem('password');
        console.log(`Username: ${username}, Password: ${password}`);
    }
    
    document.querySelector(".search-bar").addEventListener("input", function(event) {
        let query = event.target.value.toLowerCase();
        let items = document.querySelectorAll(".news-content");
        items.forEach(item => {
            let text = item.textContent.toLowerCase();
            item.style.display = text.includes(query) ? "block" : "none";
        });
    });

});



