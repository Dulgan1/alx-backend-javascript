export default function getFullResponseFromAPI(success) {
  return new Promise((res, rej) => {
    if (success) {
      res(() => {
        return {
	  [status]: 200,
	  [body]: 'Success',
	};
      });
    } else {
      rej(() => {
	return 'The fake API is not working currently';
      });
    }
  });
}
