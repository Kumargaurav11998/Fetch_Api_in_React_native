export const AuthService = {
  Login,
};
async function Login(postData) {
  console.log(postData);
  var URL = 'https://reqres.in/api/login';
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(postData),
  };

  return fetch(URL, requestOptions)
    .then(handleResponse)
    .then(response => {
      return response;
    })
    .catch(err => {
      console.log(err, '__+_+_');
    });
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);

    if (!response.ok) {
      const error = (data && data.message) || response.statusText;

      return Promise.reject(error);
    }

    return data;
  });
}
