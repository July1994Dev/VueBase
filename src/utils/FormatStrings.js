const FormatDate = (date) => {
  let endResult = "";
  if (date) {
    let splitted = date.split("T");
    let result = splitted ? splitted[0] : splitted;
    let values = result.split("-");
    endResult = values[2]+"/"+values[1]+"/"+values[0];
  }
  return endResult;
};

export { FormatDate };