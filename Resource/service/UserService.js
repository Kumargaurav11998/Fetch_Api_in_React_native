export const UserService = {
  GerUserList,
};
async function GerUserList(postData) {
  console.log(postData);
  var URL = 'https://reqres.in/api/users?page=2';
  const requestOptions = {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
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
