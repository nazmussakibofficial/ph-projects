const loadUsers = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => displayUsers(data.results))
}

loadUsers();

const displayUsers = users => {
    const usersContainer = document.getElementById('users-container');
    for (const user of users) {
        const userDiv = document.createElement('div');
        userDiv.innerHTML = `
         <h3>User Name: ${user.name.first}</h3>
         <p>Email: ${user.email}</p>
         `
        usersContainer.appendChild(userDiv)
    }

} 