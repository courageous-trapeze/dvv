imageUtils = require('./imageUtils.js');

var init = function(dataArray){
  console.log('DATA ARRAY:')
  console.log(dataArray);

  var dvv = require('./dvv.js');

  // //Test : invert a matrix using math.js's math.inv function imported on client side
  // //partitionLength is set to 1 by default
  dvv.config({
   staticPath: '/../client',
   timeout: 25000,
   // data: createMatrixArrays(200, 5),
   data: dataArray,
   func: 'math.inv',
   clock: true
  });

  dvv.start();

};

imageUtils.createDataArrayFromImageFile('server/rgb.png', init);