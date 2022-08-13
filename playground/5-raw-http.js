const http = require("http");
const url =
  "http://api.weatherstack.com/current?access_key=b7081576e6ba5b480ee272baac19ff8b&query=23.456,77.458";

const request = http.request(url, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data += chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log("an error", error);
});

request.end();
