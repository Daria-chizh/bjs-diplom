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

// Получение текущих курсов валюты
const ratesBoard = new RatesBoard();

const getStocksApiResponse = (res) => {
  if (res.success) {
    ratesBoard.clearTable();
    ratesBoard.fillTable(res.data);
  }
};

const getRates = () => {
  ApiConnector.getStocks(getStocksApiResponse);
};

getRates();

setInterval(getRates, 60 * 1000);

// Операции с деньгами
const moneyManager = new MoneyManager();

const addMoneyApiResponse = (res) => {
  if (res.success) {
    ProfileWidget.showProfile(res.data);
    moneyManager.setMessage(false, 'Баланс пополнен');
  } else {
    moneyManager.setMessage(true, res.data);
  }
};

const addMoneyCallback = (data) => {
  ApiConnector.addMoney(data, addMoneyApiResponse);
};

moneyManager.addMoneyCallback = addMoneyCallback;

// конвертирование валюты
const convertMoneyApiResponse = (res) => {
  if (res.success) {
    ProfileWidget.showProfile(res.data);
    moneyManager.setMessage(false, 'Валюта сконвентирована');
  } else {
    moneyManager.setMessage(true, res.data);
  }
};

const conversionMoneyCallback = (data) => {
  ApiConnector.convertMoney(data, convertMoneyApiResponse);
};

moneyManager.conversionMoneyCallback = conversionMoneyCallback;

// перевод валюты
const transferMoneyApiResponse = (res) => {
  if (res.success) {
    ProfileWidget.showProfile(res.data);
    moneyManager.setMessage(false, 'Валюта переведена');
  } else {
    moneyManager.setMessage(true, res.data);
  }
};

const sendMoneyCallback = (data) => {
  ApiConnector.transferMoney(data, transferMoneyApiResponse);
};

moneyManager.sendMoneyCallback = sendMoneyCallback;

// Работа с избранным
const favoritesWidget = new FavoritesWidget();

const getFavoritesApiResponse = (res) => {
  if (res.success) {
    favoritesWidget.clearTable();
    favoritesWidget.fillTable(res.data);
    moneyManager.updateUsersList(res.data);
  }
};

ApiConnector.getFavorites(getFavoritesApiResponse);

// добавления пользователя в список избранных
const addUserToFavoritesApiResponse = (res) => {
  if (res.success) {
    favoritesWidget.clearTable();
    favoritesWidget.fillTable(res.data);
    moneyManager.updateUsersList(res.data);
    favoritesWidget.setMessage(false, 'Пользователь успешно добавлен');
  } else {
    favoritesWidget.setMessage(true, res.data);
  }
};

const addUserCallback = (data) => {
  ApiConnector.addUserToFavorites(data, addUserToFavoritesApiResponse);
};

favoritesWidget.addUserCallback = addUserCallback;

// удаление пользователя из избранного
const removeUserCallbackApiResponse = (res) => {
  if (res.success) {
    favoritesWidget.clearTable();
    favoritesWidget.fillTable(res.data);
    moneyManager.updateUsersList(res.data);
    favoritesWidget.setMessage(false, 'Пользователь успешно удалён');
  } else {
    favoritesWidget.setMessage(true, res.data);
  }
};

const removeUserCallback = (data) => {
  ApiConnector.removeUserFromFavorites(data, removeUserCallbackApiResponse);
};

favoritesWidget.removeUserCallback = removeUserCallback;
