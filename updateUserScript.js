document.addEventListener('DOMContentLoaded', () => {
    const updateUserForm = document.getElementById('update-user-form');
  
    if (updateUserForm) {
      updateUserForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const id = document.getElementById('update-user-id').value;
        const name = document.getElementById('update-user-name').value;
        const job = document.getElementById('update-user-job').value;
  
        try {
          const response = await fetch(`/user/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, job }),
          });
          const data = await response.json();
          const updatedUserInfo = document.getElementById('updated-user-info');
          updatedUserInfo.innerHTML = `
            <div class="user">
              <h3>${data.name}</h3>
              <p>Job: ${data.job}</p>
              <p>Updated At: ${data.updatedAt}</p>
            </div>
          `;
        } catch (error) {
          console.error('Error updating user:', error);
        }
      });
    }
  });
  