// import { useEffect, useState } from "react";
import { Router} from "@reach/router";
import QuotesMain from "../View/QuoteList/QuotesList.js"
import Quote from "../View/Quote/Quote.js"

function router() {
  
    return (
      <>
      <Router>
				<QuotesMain path='/'></QuotesMain>
				<Quote path='/:id' ></Quote>
			</Router>
      </>
    );
  }
  
  export default router;

