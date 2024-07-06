const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
const ReferralRoutes = require('./src/route/ReferralRoute.js');
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000;

app.use('/api', ReferralRoutes);


app.get("/", (req,res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});

app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})