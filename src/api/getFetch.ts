type obj = {};

async function getFetch(url: string) {
  if (!url) throw new Error("wrong url in request");
  const response = await fetch(url); //???
  if (!response.ok) {
    throw new Error(`Response status in fetch is: ${response.status}`);
  } else {
    const result: obj[] | [] = await response.json();
    return result;
  }
}
export default getFetch;
