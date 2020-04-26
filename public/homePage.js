const logoutButton = new LogoutButton();

// Выход
const logoutApiResponse = (res) => {
  if (res.success) {
    window.location.reload();
  }
};

const logoutCallback = () => {
  ApiConnector.logout(logoutApiResponse);
};

logoutButton.action = logoutCallback;
