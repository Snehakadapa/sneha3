document.addEventListener('DOMContentLoaded', () => {
    const fetchUsersButton = document.getElementById('fetch-users');
  
    if (fetchUsersButton) {
      fetchUsersButton.addEventListener('click', async () => {
        try {
          const response = await fetch('/users');
          const data = await response.json();
          const userList = document.getElementById('user-list');
          userList.innerHTML = ''; // Clear any existing content
  
          data.data.forEach(user => {
            const userDiv = document.createElement('div');
            userDiv.className = 'user';
  
            const userImage = document.createElement('img');
            userImage.src = user.avatar;
            userDiv.appendChild(userImage);
  
            const userInfo = document.createElement('div');
            userInfo.className = 'user-info';
            userInfo.innerHTML = `<h3>${user.first_name} ${user.last_name}</h3><p>${user.email}</p>`;
            userDiv.appendChild(userInfo);
  
            userList.appendChild(userDiv);
          });
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      });
    }
  });
  