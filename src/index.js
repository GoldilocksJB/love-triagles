/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let counter = 0;
  for (let i = 0; i < preferences.length; i++) {
    let loveOfElement1 = preferences[i];
    if (loveOfElement1 === 0) {
      continue;
    }

    let loveOfElement2 = preferences [loveOfElement1 - 1];
    if (loveOfElement1 === loveOfElement2)  { 
      continue;
    }

    let loveOfElement3 = preferences [loveOfElement2 - 1];
    if (loveOfElement3 === loveOfElement2) {
      continue;
    } 

    if (loveOfElement2 && loveOfElement3 && (loveOfElement3 - 1 === i))
    {
      preferences[i] = 0;
      preferences[loveOfElement1 - 1] = 0;
      preferences[loveOfElement2 - 1] = 0;
      counter++;
    }
  }
  return counter;
};