const Razorpay = require('razorpay');

apiKey="rzp_test_HRNVcdo89DmQE3"
apiSecret="z10U1uQKTi3YF4GttIfehd9n"

const razorpay = new Razorpay({
    key_id: apiKey,
    key_secret: apiSecret,
  });


  module.exports=razorpay;