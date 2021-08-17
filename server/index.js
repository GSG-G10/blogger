const app = require('./app');

app.listen(app.get('port'), () => {
  // eslint-disable-next-line no-console
  console.log(`is running at http://localhost:${app.get('port')}`);
});
