document.addEventListener('DOMContentLoaded', () => {
    const deleteUserButton = document.getElementById('delete-user');
  
    if (deleteUserButton) {
      deleteUserButton.addEventListener('click', async () => {
        const userId = document.getElementById('delete-user-id').value;
        if (!userId) {
          alert('Please enter a user ID');
          return;
        }
  
        try {
          const response = await fetch(`/user/${userId}`, {
            method: 'DELETE',
          });
          const data = await response.json();
          const deleteUserInfo = document.getElementById('delete-user-info');
          deleteUserInfo.innerHTML = `<p>${data.message}</p>`;
        } catch (error) {
          console.error('Error deleting user:', error);
        }
      });
    }
  });
  