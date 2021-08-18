const { join } = require('path');

const showError404Page = (req, res, next) => {
  res.status(404).sendFile(join(__dirname, '..', '..', 'public', 'error404.html'));
};

const showError500Page = (err, req, res, next) => {
  res.status(500).sendFile(join(__dirname, '..', '..', 'public', 'error500.html'));
};

module.exports = { showError404Page, showError500Page };
