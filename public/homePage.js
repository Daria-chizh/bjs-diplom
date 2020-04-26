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

// Получение информации о пользователе

const currentApiResponse = (res) => {
  if (res.success) {
    ProfileWidget.showProfile(res.data);
  }
};

ApiConnector.current(currentApiResponse);
