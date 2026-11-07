const pool = require('../config/db');

// === ABOUT ===
const getAboutInfo = async (req, res) => {
  try {
    const [aboutInfo] = await pool.query('SELECT * FROM about LIMIT 1');
    res.json(aboutInfo[0]);
  } catch (error) {
    console.error('Error fetching about info:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const updateAboutInfo = async (req, res) => {
  const { title, description, mission, vision } = req.body;
  try {
    const [result] = await pool.query(
        'UPDATE about SET title = ?, description = ?, mission = ?, vision = ? WHERE id = 1',
        [title, description, mission, vision]
    );
    res.json({ message: 'About info updated successfully' });
  } catch (error) {
    console.error('Error updating about info:', error);
    res.status(500).json({ error: 'Internal server error' });
  } 
};

const createAboutInfo = async (req, res) => {
  const { title, description, mission, vision } = req.body;
  try {
    const [result] = await pool.query(
        'INSERT INTO about (title, description, mission, vision) VALUES (?, ?, ?, ?)',
        [title, description, mission, vision]
    );
    res.json({ message: 'About info created successfully' });
  }
    catch (error) {
    console.error('Error creating about info:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const deleteAboutInfo = async (req, res) => {
  try {
    const [result] = await pool.query('DELETE FROM about WHERE id = 1');
    res.json({ message: 'About info deleted successfully' });
  }
    catch (error) {
    console.error('Error deleting about info:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { getAboutInfo, updateAboutInfo, createAboutInfo, deleteAboutInfo };

