var mongoose=require('mongoose');
mongoose.connect('mongodb://mira:123456q@ds235053.mlab.com:35053/shopcard');
console.log("mongodb connect...")
module.exports=mongoose;