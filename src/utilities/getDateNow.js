const getDateNow = () => {
  const moun = () => {
    let number = '' + new Date().getMonth() + 1;
    if (number.length === 0) number += '0';
    return number;
  };
  const number = new Date().getDate();
  const year = new Date().getFullYear();
  const dateNow = `${moun()}.${number}.${year}`;
  return dateNow;
};

export default getDateNow;
