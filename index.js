const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html'); // Set the content type to HTML
  const msg = `
    <html>
      <head>
        <title>Hello Node</title>
      </head>
      <body>
        <h1>Hello Node!</h1>
        <p>Click the link to visit Google: <a href="https://www.google.co.in/" target="_blank">Go to Google</a></p>
      </body>
    </html>
  `;
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
