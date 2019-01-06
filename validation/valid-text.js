// Custom function to check wheter a given string consists of valid input
const validText = str => {
  return typeof str === "string" && status.trim().length > 0;
}

module.exports = validText;