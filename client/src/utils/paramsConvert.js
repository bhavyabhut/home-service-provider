export const getArrayParams = (urlString) => {
  let final = {};
  urlString
    .slice(1)
    .split('&')
    .forEach((data) => {
      final = { ...final, [data.split('=')[0]]: data.split('=')[1] };
    });
  return final;
};

export const setUrlString = (obj) => {
  let category = 'all';
  let city = '';
  let state = 'all';
  let name = '';
  if (obj.category !== undefined) {
    category = obj.category;
  }
  if (obj.state !== undefined) {
    state = obj.state;
  }
  if (obj.city !== undefined) {
    city = obj.city;
  }
  if (obj.name !== undefined) {
    name = obj.name;
  }
  return `?category=${category}&state=${state}&city=${city}&name=${name}`;
};
