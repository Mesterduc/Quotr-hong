import mongoose from 'mongoose'
import MongoClient from "mongodb";



async function connectDatabase() {
	const connectionString = process.env.MONGODB_URL

	if (!connectionString) {
		throw new Error('MONGODB_URL not set as environment variable. Please configure it in an .env file.')
	}

	

	const client = new MongoClient.MongoClient(connectionString, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})

	try {
		await client.connect()
		console.log('Connected correctly to server')

    
    const collection = client.db("Quote").collection("quotes");
    collection.drop();
    let db = await collection.countDocuments({});
    if(db == 0 ){
     let testData = [
        {quote: "For prayer is nothing else than being on terms of friendship with God.", author: "Saint Teresa of Avila", likes: 120, comments: ["God is great"]},
        {quote: "Do not let your hearts be troubled. Trust in God; trust also in me.", author: "Jesus Christ", likes: 25, comments: ["Seek God. Trust God. Praise God.", "Life is good because God is great."]},
        {quote: "Some of God's greatest gifts are unanswered prayers.", author: "Garth Brooks", likes: 69, comments: []},
        {quote: "Never trust anyone completely but God. Love people, but put your full trust only in God.", author: "Lawrence Welk", likes: 360, comments: ["The Word of God is limitless and infinite."]},
        {quote: "Life is God's novel. Let him write it.", author: "Isaac Bashevis Singer", likes: 666, comments: ["God gives us difficulties to bring out the best in us.", "God didn’t bring you this far to abandon you.", "Thank God for all the blessings that he has given you."]},
        {quote: "Mad i kantinen er for dyrt!", author: "Hong", likes: 10000, comments: ["True"]},
      ]
      collection.insertMany(testData)
      console.log("inserted data")
    }
    return mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
	} catch {
    console.log('failled to Connected to database')
  }
}

export default connectDatabase
