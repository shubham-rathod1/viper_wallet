function loadData(key) {
  try {
    // if (loadData(key) !== "null") {
      let data = localStorage.getItem(key);
      data = JSON.parse(data);
      return data;
    // }
  } catch (err) {
    return undefined;
  }
}

function saveData(key, data) {
  console.log('from local', data);
  localStorage.setItem(key, JSON.stringify(data));
}

export { loadData, saveData };
