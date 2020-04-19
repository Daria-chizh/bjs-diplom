const userForm = new UserForm();

// Вход
const loginApiResponse = (res) => {
  if (res.success) {
    window.location.reload();
  } else {
    userForm.setLoginErrorMessage(res.data);
  }
};

const loginCallback = (data) => {
  ApiConnector.login(data, loginApiResponse);
};

userForm.loginFormCallback = loginCallback;

// Регистрация
const registerApiResponse = (res) => {
  if (res.success) {
    window.location.reload();
  } else {
    userForm.setRegisterErrorMessage(res.data);
  }
};

const registerCallback = (data) => {
  ApiConnector.register(data, registerApiResponse);
};

userForm.registerFormCallback = registerCallback;
