require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')

 console.log(process.env.API_TOKEN)

 const app = express()