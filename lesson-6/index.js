
const fs = require("fs"); // Do not worry for .require now, we will look on it on next lesson.
const util = require("util");
let readFile = util.promisify(fs.readFile);

async function readFileAsync(filename) {
  // console.log("Reading file async 1.json");
  let promise = readFile(`./data/${filename}`, { encoding: "UTF8" });
  let content = await promise;
  // console.log("File content type", typeof promise);
  // console.log("File content is", content);
  return content;
}

async function print3Files() {
  try {
      console.log("Reading file async 1.json");
      let content = await readFileAsync("1.json");
      console.log("File 1.json returned", content);
      console.log("Reading file async nonexist.json");
      let content2 = await readFileAsync("nonexist.json");
      console.log("File 2.json returned", content2);
      console.log("Reading file async 3.json");
      let content3 = await readFileAsync("3.json");
      console.log("File 3.json returned", content3);
      console.log("Done executing async commands");
  } catch (err) {
      console.log("Oh no, we have error!");
      console.log(err);
  }
}
print3Files();