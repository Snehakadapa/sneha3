document.addEventListener('DOMContentLoaded', () => {
    const createUserForm = document.getElementById('create-user-form');
  
    if (createUserForm) {
      createUserForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('user-name').value;
        const job = document.getElementById('user-job').value;
  
        try {
          const response = await fetch('/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, job }),
          });
          const data = await response.json();
          const createdUserInfo = document.getElementById('created-user-info');
          createdUserInfo.innerHTML = `
            <div class="user">
              <h3>${data.name}</h3>
              <p>Job: ${data.job}</p>
              <p>ID: ${data.id}</p>
              <p>Created At: ${data.createdAt}</p>
            </div>
          `;
        } catch (error) {
          console.error('Error creating user:', error);
        }
      });
    }
  });
  