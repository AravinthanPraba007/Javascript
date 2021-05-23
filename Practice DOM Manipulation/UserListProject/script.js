// User class : Reprsent a user
class User {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }
}

// UI class : Handle UI task
class UI {
    static displayUsers() {
        const storedUsers = [
            {
                firstName: 'Aravinthan',
                lastName: 'P',
                age: 23,
                email : 'aravinthan@gmail.com'
            },
            {
                firstName: 'Arun',
                lastName: 'S',
                age: 32,
                email : 'arun@gmail.com'
            },
            {
                firstName: 'Ravi',
                lastName: 'M',
                age: 28,
                email : 'ravi@gmail.com'
            }
        ];

        const users = storedUsers;
        users.forEach((user) => UI.addUserToList(user));
    }

    static addUserToList(user) {
        const list = document.getElementById('customer-list');

        const row = document.createElement('tr');
        row.innerHTML =`
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.age}</td>
            <td>${user.email}</td>
            <td><a href="#" class="btn btn-danger delete">X</a></td>
        `;

        list.appendChild(row);
    }

    static clearFeilds() {
        document.getElementById('firstName').value = '';
        document.getElementById('lastName').value = '';
        document.getElementById('age').value = '';
        document.getElementById('email').value = '';
    }

    static deleteUser(element) {
        if(element.classList.contains('delete')) {
            element.parentElement.parentElement.remove();
        }
    }

    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.getElementById('container');
        const form = document.getElementById('customer-form');
        container.insertBefore(div, form);

        // Vanish after 3 second
        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }
}

// Event : Display Users
document.addEventListener('DOMContentLoaded', UI.displayUsers);

// Event : Add a User
document.getElementById('customer-form')
.addEventListener('submit', (e) => {
    e.preventDefault();
    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;

    // Instatiate a user
    const user = new User(firstName, lastName, age, email);
    
    // Add User to UI
    UI.addUserToList(user);

    // Clear Feilds
    UI.clearFeilds();

    // USer added Alert
    UI.showAlert(`User added Sucessfully`, "success");
})

// Event : Remove a USer
document.getElementById('customer-list')
.addEventListener('click', (e) => {
    UI.deleteUser(e.target);

    // User deleted Alert
    UI.showAlert(`User deleted`, "info");

})
