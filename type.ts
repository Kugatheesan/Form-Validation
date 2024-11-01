

const form = document.getElementById('kugan') as HTMLFormElement;
const passwordInput = document.getElementById('password') as HTMLInputElement;
const passwordCheckInput = document.getElementById('passwordCheck') as HTMLInputElement;
const usernameInput = document.getElementById('username') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;


function maaa(event) {
    event.preventDefault();

    const password = passwordInput.value.trim();
    const passwordCheck = passwordCheckInput.value.trim();
    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (password !== passwordCheck) {
        alert('Passwords do not match!');
    } 
    
    else if (!usernameRegex.test(username)) {
        alert('Username can only contain letters and numbers.');
    }
    
     
    else if (!passwordRegex.test(password)) {
        alert('Password must be at least 8 characters long and contain at least one letter and one number.');
    } 
    else {
        alert('Account created successfully!');
    }

    
    if (password === "") {
        alert("Please enter a password.");
    } 
    else if (passwordCheck === "") {
        alert("Please confirm your password.");
    }
};


form.addEventListener('submit', maaa);
