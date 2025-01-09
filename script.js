
        // Import required modules
        const express = require('express');
        const bodyParser = require('body-parser');
        const mongoose = require('mongoose');

        // Connect to MongoDB
        mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => console.log('MongoDB Connected...'))
            .catch(err => console.log(err));

        // Initialize Express app
        const app = express();

        // Middleware to parse JSON request bodies
        app.use(bodyParser.json());

        // Define API routes
        const userRouter = require('./routes/users');
        app.use('/api/users', userRouter);

        // Start the server
        const port = process.env.PORT || 5000;
        app.listen(port, () => console.log(`Server running on port ${port}`));