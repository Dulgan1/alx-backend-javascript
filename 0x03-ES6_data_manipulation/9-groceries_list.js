export default function groceriesList() {
  const list = new Map();
  list.set('Apples', 10);
  list.set('Tomatoes', 10);
  list('Pasta', 1);
  list('Rice', 1);
  list('Banana', 5);
  return list;
}
