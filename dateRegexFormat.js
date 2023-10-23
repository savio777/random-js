// https://www.youtube.com/watch?v=CO2c59XCtW0

const assert = require("assert");

const date = new Date("2023-10-23 00:00"); // 2023-10-23T03:00:00.000Z
const expectDateBrVersion = "23/10/2023";

{
  const regex = /^([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])/;

  const [full, year, month, day] = regex.exec(date.toISOString());

  const actual = `${day}/${month}/${year}`;

  assert.equal(actual, expectDateBrVersion);

  console.log({ regex: actual });
}

{
  const actual = date.toLocaleDateString("pt-br", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    // month:'long',
  });

  assert.equal(actual, expectDateBrVersion);

  console.log({ date: actual });
}

{
  const actual = new Intl.DateTimeFormat("pt-br", {
    // month: "long"
  }).format(date);

  assert.equal(actual, expectDateBrVersion);

  console.log({ Intl: actual });
}
