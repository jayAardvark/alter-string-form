function alterString(str) {
  str = str.replace(/[^A-Za-z0-9]/g," ");
  let strArr = str.split(/(?=[A-Z])|\W/);
  return strArr.join("-").toLowerCase();
}

alterString('Alter This String To Desired Form');
