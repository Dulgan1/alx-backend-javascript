export function getResponseFromAPI() {
  return new Promise((res, rej) => {
    if (res) {
      res();
    } else {
      rej();
    }
  });
}
