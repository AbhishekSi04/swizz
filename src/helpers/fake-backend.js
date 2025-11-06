import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
const mock = new MockAdapter(axios);

export default function configureFakeBackend() {
  mock.onPost('/login').reply(function (config) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return new Promise(function (resolve, _reject) {
      setTimeout(function () {
        // get parameters from post request
        const params = JSON.parse(config.data);
        // find if any user matches login credentials
        const filteredUsers = fakeUsers.filter(user => {
          return user.email === params.email && user.password === params.password;
        });
        if (filteredUsers.length) {
          // if login details are valid return user details and fake jwt token
          const user = filteredUsers[0];
          resolve([200, user]);
        } else {
          // else return error
          resolve([401, {
            error: 'Username or password is incorrect'
          }]);
        }
      }, 1000);
    });
  });
}
