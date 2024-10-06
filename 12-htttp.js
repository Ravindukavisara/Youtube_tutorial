const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Welcome to the homepage!');
    res.end();  // End response after all writes
  } else if (req.url === '/about') {
    res.write('About page');
    res.end();  // End response here
  } else {
    res.write('Page not found');
     res.end();  // Ensure res.end() is called once
  }
});

server.listen(5000, () => {
  console.log('Server is listening on port 5000');
});
