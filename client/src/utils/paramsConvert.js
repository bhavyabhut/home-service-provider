export const getArrayParams = (urlString) => {
  let final = {};
  urlString
    .slice(1)
    .split("&")
    .forEach((data) => {
      final = { ...final, [data.split("=")[0]]: data.split("=")[1] };
    });
  return final;
};

export const setUrlString = (obj) => {
  return `?category=${obj.category}&state=${obj.state}&city=${obj.city}&name=${obj.name}`;
};
