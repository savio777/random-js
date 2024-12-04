const listRemoveDuplcatedValues = (list = [], key = "") => {
  //caso dê problema, utilizar let
  const newArray = [];

  const uniqueObject = {};

  for (const indexUniqueObject in list) {
    const objTitle = list[indexUniqueObject][key];

    uniqueObject[objTitle] = list[indexUniqueObject];
  }

  for (const indexNewArray in uniqueObject) {
    newArray.push(uniqueObject[indexNewArray]);
  }

  return newArray;
};

// ex:
// listRemoveDuplcatedValues([...list1,...list2],'id')
