const onFormatDate = date => {
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const month =
    date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const year = date.getFullYear();
  const formatDate = `${day}.${month}.${year}`;
  return formatDate;
  //   this.setState({ formatDate });
};

export default onFormatDate;
