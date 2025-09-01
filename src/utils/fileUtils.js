// export function download(filename, text) {
//   const blob = new Blob([text], { type: "application/json;charset=utf-8" });
//   const url = URL.createObjectURL(blob);
//   const a = document.createElement("a");
//   a.href = url;
//   a.download = filename;
//   a.click();
//   URL.revokeObjectURL(url);
// }

// src/utils/fileUtils.js

/**
 * Save decoded JWT data as a JSON file
 */
export const saveAsFile = (data, filename = "decoded-jwt.json") => {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  URL.revokeObjectURL(link.href);
};

/**
 * Read a JWT string from a file (e.g., .txt or .jwt)
 */
export const readFromFile = (file, callback) => {
  const reader = new FileReader();
  reader.onload = (e) => {
    callback(e.target.result.trim()); // remove extra spaces/newlines
  };
  reader.readAsText(file);
};
