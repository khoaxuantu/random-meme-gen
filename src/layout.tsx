import Navbar from './components/Navbar';
import { Metadata } from './utils/Metadata';

interface RootLayoutProps {
  metadata?: Metadata,
  children: React.ReactNode
}

const DEFAULT_METADATA: Metadata = {
  title: "Lmao Tus?",
  metaTitle: "Lmao Tuslipid???",
  description: `A random meme picker created by Xuan Khoa Tu Nguyen.
  Pick a meme a day for a happier life ~`,
  author: "Xuan Khoa Tu Nguyen"
}

export default function RootLayout(props: RootLayoutProps) {
  const metadata = { ...DEFAULT_METADATA, ...props.metadata };
  return(
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="apple-touch-icon" href="public/logo/apple-touch-icon.png" />
        <link rel="icon" href="logo/favicon-16x16.png" type="image/png" />
        <link rel="icon" href="logo/favicon-32x32.png" type="image/png" />
        <link rel="manifest" href="logo/site.webmanifest" />

        <title>{ metadata.title }</title>
        <meta name="title" content={ metadata.metaTitle } />
        <meta name="description" content={ metadata.description } />
        <meta name='author' content={ metadata.author } />

        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
        <Navbar />
        { props.children }
      </body>
    </html>
  );
}
