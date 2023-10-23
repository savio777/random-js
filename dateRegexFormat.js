// https://www.youtube.com/watch?v=CO2c59XCtW0

const assert = require("assert");

const date = new Date("2023-10-23 00:00").toISOString(); // 2023-10-23T03:00:00.000Z

const regex = /^([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])/;

const [full, year, month, day] = regex.exec(date);

const actualDateBrVersion = `${day}/${month}/${year}`;
const expectDateBrVersion = "23/10/2023";

assert.equal(actualDateBrVersion, expectDateBrVersion);

console.log({ actualDateBrVersion });
