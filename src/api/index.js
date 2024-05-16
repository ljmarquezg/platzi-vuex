export const getUser = async (userId) => {
  return (await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)).json();
}
