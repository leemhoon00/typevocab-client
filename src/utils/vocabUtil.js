export async function streamToBlob(stream) {
  const reader = stream.getReader();
  const chunks = [];
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    chunks.push(value);
  }
  return new Blob(chunks, { type: "audio/mpeg" });
}

export function arrayToQueryString(key, array) {
  return array.map((value) => `${key}=${encodeURIComponent(value)}`).join("&");
}
