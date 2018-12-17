const mocks = {
  'auth': { 'POST': { token: 'This-is-a-mocked-token' } },
  'user/me': {
    'GET': {

      title: 'sir',
      email: 'mymail@mail.ru',
      phone: '12345678888',
      bio: 'about me',

      surename: 'Phathers',
      name: 'my name',
      lastName: 'my second name',
      birthday: '1986',

      country: 'Russia',
      region: 'region St.Petersburg',
      city: 'St.Petersburg',
      occupation: 'Data Soul'
    }
  }
};

const apiCall = ({ url, method }) => new Promise((resolve, reject) => {
  setTimeout(() => {
    try {
      resolve({token: mocks[url][method || 'GET']});
      console.log(`Mocked '${url}' - ${method || 'GET'}`);
      console.log('response: ', mocks[url][method || 'GET']);
    } catch (err) {
      reject(new Error(err));
    }
  }, 1000)
});

export default apiCall;
