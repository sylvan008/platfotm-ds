const mocks = {
  'auth': { 'POST': { token: 'This-is-a-mocked-token' } },
  'user/me': {
    'GET': {
      email: 'mymail@mail.ru',
      username: 'sylvan008',
      phone: '12345678888',
      bio: 'about me',

      surname: 'my surname', // my surname
      name: 'my name', // my name
      patronymic: 'my patronymic', // my patronymic
      birthday: '1986', // 1986

      country: 'Russia', // Russia
      region: 'region St.Petersburg', // region St.Petersburg
      city: 'St.Petersburg', // St.Petersburg
      occupation: 'Data Soul' // Data Soul
    }
  },
  'user/join': { 'POST': {join: true} },
  'index': {'GET': {
      remains_count: 1,
      items: [
        {
          v: 2018.1,
          title: 'comp-1-title',
          cover_img: 'comp-1-img',
          description: 'comp-1-descript',
          date_begin: 'comp-1-dateBegin',
          date_end: 'comp-1-dateEnd',
          date_img: 'comp-1-dateImg',
          prize: 'comp-1-prize',
          prize_img: 'comp-1-prizeImg',
          labels: [
            { text: 'comp-1-labels-1', is_green: true },
            { text: 'comp-1-labels-2', is_green: false },
          ],
          links: [
            { text: 'comp-1-linkName-1', url: 'comp-1-url-1', img: 'comp-1-urlImg-1' },
            { text: 'comp-1-linkName-2', url: 'comp-1-url-2', img: 'comp-1-urlImg-2' },
          ]
        }
      ]
    }}
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
  }, 500)
});

export default apiCall;
