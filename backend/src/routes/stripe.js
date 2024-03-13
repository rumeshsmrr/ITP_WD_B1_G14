const router = require("express").Router();
const stripe = require("stripe")(
  process.env.STRIPEKEY
);

// router.post("/payment", (req, res) => {
//   const { amount, tokenId } = req.body;
//   stripe.charges.create(
//     {
//       payment_method_data: {
//         type: "card",
//         "card[token]": tokenId,
//       },
//       amount: amount,
//       currency: "LKR",
//     },
//     (stripeErr, stripeRes) => {
//       if (stripeErr) {
//         res.status(500).json(stripeErr);
//       } else {
//         res.status(200).json(stripeRes);
//       }
//     }
//   );
// });
router.post("/payment", async (req, res) => {
  try {
    const { amount, tokenId } = req.body;

    const payment = await stripe.paymentIntents.create({
      amount: amount,
      currency: "lkr",
      payment_method_data: {
        type: "card",
        "card[token]": tokenId,
      },
      confirm: true,
    });

    console.log(payment);

    res.json({
      message: "Payment successful",
      success: true,
      payment,
    });
  } catch (error) {
    console.log(error);
    res.json({
      message: "Payment failed",
      success: false,
    });
  }
});

// router.post("/payment", (req, res) => {
//   const { amount, tokenId } = req.body;
//   type = req.body.type;
//   stripe.paymentIntents.create({
//     amount: amount,
//     currency: "lkr",
//     // payment_method_data: [(type = card), (card[token] = tokenId)],NPM
//     payment_method_data: {
//       type: "card",
//       "card[token]": tokenId,
//     },
//     confirm: true,
//   }),
//     (stripeErr, stripeRes) => {
//       if (stripeErr) {
//         // res.status(500).json(stripeErr);
//       } else {
//         res.status(200).json(stripeRes);
//         // console.log(stripeRes);
//       }
//     };
// });

// router.post("/payment", async (req, res) => {
//   try {
//     const { amount, tokenId } = req.body;
//     const paymentIntent = await stripe.paymentIntents.create(
//       {
//         amount: amount,
//         currency: "lkr",
//         automatic_payment_methods: { enabled: true },
//       },
//       {
//         stripeAccount: "{{CONNECTED_STRIPE_ACCOUNT_ID}}",
//       }
//     );
//     res.status(200).json(paymentIntent);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
