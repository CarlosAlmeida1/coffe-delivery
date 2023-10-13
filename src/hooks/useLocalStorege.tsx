export function useLocalStorage() {
  function saveToLocalStorage(data: number | string, key: string) {
    if (!data) {
      const dataJSON = JSON.stringify(data);

      localStorage.setItem(key, dataJSON);
    }
  }

  function loadLocalStorage(key: string) {
    const dataJSON = localStorage.getItem(key);

    if (!dataJSON) return;

    const data = JSON.parse(dataJSON);

    return data;
  }

  return { saveToLocalStorage, loadLocalStorage };
}
