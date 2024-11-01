const fs = require('fs'); 


function fileExists(filename) {
  if (fs.existsSync(filename)) {
    return true
  }
  return false
}
  // returns true or false

function validNumber(value) { // value can be string or numeric// returns a boolean 
  return typeof value === 'number' && !isNaN(value);
}

function dataDimensions(dataframe) {
  // returns a list [rows (int), cols (int)]
}

function calculateMean(dataset) {
  // returns a float or false
  
}

function findTotal(dataset) {
  // returns float or false
  
} 


function convertToFloat(dataframe, col){ //dataframe, integer
  // returns an integer, which is the number that were  converted to floats.
  
}


function flatten(dataframe) {
  // returns a dataset (a flattened dataframe)
  
}


function loadCSV(csvFile, ignorerows, ignorecols) {  // string, dataset, dataset
  // returns a list comprising of [dataframe, rows (integer), cols (integer)]

}


function calculateMedian(dataset) {
  // return float or false 
  
}


function createSlice(dataframe, colindex, colpattern, exportcols = []) { // dataframe, integer, string/numeric, dataset
  // returns a dataframe
  
}









module.exports = {
  fileExists, validNumber, dataDimensions, calculateMean, findTotal, convertToFloat, flatten, 
  loadCSV, calculateMedian, createSlice,
} 