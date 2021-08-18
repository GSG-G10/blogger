const { getCategories } = require('../database/queries');

const showCategories = (req, res) => {
  getCategories()
    .then((data) => res.json(data.rows))
    .catch(() => res.status(500).json({ msg: '500 intenrnal server error' }));
};

module.exports = { showCategories };
