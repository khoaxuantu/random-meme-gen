import App from './pages/App';

interface RootLayoutProps {
  title?: string,
  children: React.ReactNode
}

export default function RootLayout(props: RootLayoutProps) {
  return(
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="apple-touch-icon" href="public/logo/apple-touch-icon.png" />
        <link rel="icon" href="logo/favicon-16x16.png" type="image/png" />
        <link rel="icon" href="logo/favicon-32x32.png" type="image/png" />
        <link rel="manifest" href="logo/site.webmanifest" />

        <title>{ props.title || "Page" }</title>
        <meta name="title" content='Lmao Tuslipid???' />
        <meta name="description" content="A random meme picker created by Xuan Khoa Tu Nguyen.
          Pick a meme a day for happier life ~" />
        <meta name='author' content='Xuan Khoa Tu Nguyen' />

        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
        <div id="root">
          { props.children }
        </div>
      </body>
    </html>
  );
}
