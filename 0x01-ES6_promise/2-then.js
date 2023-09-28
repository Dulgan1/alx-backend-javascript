export default function handleResponseFromAPI(promise) {
  promise.then(() => {
    return {
      status: 200,
      body: 'Succes',
    };
  }).then((res) => {
    console.log('Got a response from the API');
    return res;
  }).catch((error) => {
    Error(error);
  });
}
