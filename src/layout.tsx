import App from './App';

export default function RootLayout() {
  return(
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="apple-touch-icon" href="public/logo/apple-touch-icon.png" />
        <link rel="icon" href="public/logo/favicon-32x32.png" type="image/png" />
        <link rel="icon" href="public/logo/favicon-64x64.png" type="image/png" />
        <link rel="manifest" href="public/logo/site.webmanifest" />

        <title>Lmao Tus?</title>
        <meta name="title" content='Lmao Tuslipid???' />
        <meta name="description" content="A random meme picker created by Xuan Khoa Tu Nguyen.
          Pick a meme a day for happier life ~" />
        <meta name='author' content='Xuan Khoa Tu Nguyen' />

        <link rel="stylesheet" href="public/style.css" />
      </head>
      <body>
        <div id="root">
          <App />
        </div>
      </body>
    </html>
  );
}
