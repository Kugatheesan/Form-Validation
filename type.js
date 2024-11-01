// var form = document.getElementById('kugan');
// var passwordInput = document.getElementById('password');
// var passwordCheckInput = document.getElementById('passwordCheck');
// var usernameInput = document.getElementById('username');
// var emailInput = document.getElementById('email');
// function maaa(event) {
//     event.preventDefault();
//     var password = passwordInput.value.trim();
//     var passwordCheck = passwordCheckInput.value.trim();
//     var username = usernameInput.value.trim();
//     var email = emailInput.value.trim();
//     var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
//     var usernameRegex = /^[a-zA-Z0-9]+$/;
//     var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (password !== passwordCheck) {
//         alert('Passwords do not match!');
//     }
//     else if (!usernameRegex.test(username)) {
//         alert('Username can only contain letters and numbers.');
//     }
//     else if (!passwordRegex.test(password)) {
//         alert('Password must be at least 8 characters long and contain at least one letter and one number.');
//     }
//     else {
//         alert('Account created successfully!');
//     }
//     if (password === "") {
//         alert("Please enter a password.");
//     }
//     else if (passwordCheck === "") {
//         alert("Please confirm your password.");
//     }
// }
// ;
// form.addEventListener('submit', maaa);


const form = document.getElementById('kugan') as HTMLFormElement;
const passwordInput = document.getElementById('password') as HTMLInputElement;
const passwordCheckInput = document.getElementById('passwordCheck') as HTMLInputElement;
const usernameInput = document.getElementById('username') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;

function maaa(event: Event) {
    event.preventDefault();

    const password = passwordInput.value.trim();
    const passwordCheck = passwordCheckInput.value.trim();
    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const usernameRegex = /^[a-zA-Z0-9]{3,}$/; // At least 3 characters
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate password
    if (password === "") {
        alert("Please enter a password.");
    } else if (passwordCheck === "") {
        alert("Please confirm your password.");
    } else if (password !== passwordCheck) {
        alert('Passwords do not match!');
    } else if (!passwordRegex.test(password)) {
        alert('Password must be at least 8 characters long and contain at least one letter and one number.');
    } 
    // Validate username
    else if (!usernameRegex.test(username)) {
        alert('Username can only contain letters and numbers and must be at least 3 characters long.');
    } 
    // Validate email
    else if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
    } 
    else {
        alert('Account created successfully!');
    }
}

form.addEventListener('submit', maaa);
