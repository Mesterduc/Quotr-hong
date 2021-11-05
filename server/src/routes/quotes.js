import express from "express";
import Quote from "../models/quote.js";

const quotesRoutes = express.Router();

quotesRoutes.get("/", async (req, res) => {
  const quotes = await Quote.find();
  res.json(quotes);
});

quotesRoutes.post("/", async (req, res) => {
  try {
    // var newQuote = new Quote({
    //   quote: req.body.quote,
    //   author: req.body.author
    // })
    // console.log(newQuote)
    const quote = await Quote.create(req.body);
    res.status(201);
    res.json(quote);
  } catch (error) {
    res.status(500);
    res.json({
      error: "Quote could not be created",
      details: error.toString(),
    });
  }
});

quotesRoutes.put("/", async (req, res) => {
  try {
    const quote = await Quote.findByIdAndUpdate( {_id: req.body.id}, { $inc: { likes: req.body.number }} );
    if (quote) {
      res.json(quote);
    } else {
      res.status(404);
      res.json({ error: "Quotes not found" });
    }
  } catch (error) {
    res.status(500);
    res.json({ error: "Something went wrong", details: error.toString() });
  }
});

quotesRoutes.get("/:id", async (req, res) => {
  try {
    const quote = await Quote.findById(req.params.id);
    if (quote) {
      res.json(quote);
    } else {
      res.status(404);
      res.json({ error: "Quotes not found" });
    }
  } catch (error) {
    res.status(500);
    res.json({ error: "Something went wrong", details: error.toString() });
  }
});

quotesRoutes.put("/:id", async (req, res) => {
  try {
    const quote = await Quote.findByIdAndUpdate({_id: req.body.id}, { $push: { comments: req.body.comment }} );
    res.status(201);
    res.json(quote);
  } catch (error) {
    res.status(500);
    res.json({
      error: "Quote could not be created",
      details: error.toString(),
    });
  }
  console.log(req.body)
});



export default quotesRoutes;
