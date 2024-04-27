const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');



const app = express();
app.use(express.json());
app.use(cors());

const pool = mysql.createPool({
  host: 'takemehome.cbwwuyga61sj.us-east-2.rds.amazonaws.com',
  user: 'admin',
  password: '8wvutmhdb8',
  database: 'takemehome',
});

app.get('/data', (req, res) => {
  pool.query('SELECT * FROM your_table', (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.json(results);
    }
  });
});

// Delete endpoint for deleting a listing from the backend as this is where they're stored.
app.delete('/listings/:id', async (req, res) => {

  const id = req.params.id;

  try {
    // establish a connection
    const connection = await pool.getConnection();

    // Get the listing ID.
    await connection.execute('DELETE FROM listings WHERE id = ?', [id]);

    connection.release();

    // Report an update.
    res.status(200).send('Listing deleted successfully');

  } catch (error) {

    // Catch any errors.
    console.error('Error deleting listing:', error);

    res.status(500).send('Internal Server Error');
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});