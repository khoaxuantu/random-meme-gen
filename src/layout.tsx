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
  author: "Xuan Khoa Tu Nguyen",
  image: "/logo/seo.png",
  url: "https://meme.xuankhoatu.com/"
}

export default function RootLayout(props: RootLayoutProps) {
  const metadata = { ...DEFAULT_METADATA, ...props.metadata };
  return(
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="apple-touch-icon" href="/logo/apple-touch-icon.png" />
        <link rel="icon" href="/logo/favicon-16x16.png" type="image/png" />
        <link rel="icon" href="/logo/favicon-32x32.png" type="image/png" />
        <link rel="manifest" href="/logo/site.webmanifest" />

        <title>{ metadata.title }</title>
        <meta name="title" content={ metadata.metaTitle } />
        <meta name="description" content={ metadata.description } />
        <meta name='author' content={ metadata.author } />

        <meta itemProp='name' content={ metadata.metaTitle } />
        <meta itemProp='description' content={ metadata.description } />
        <meta itemProp='image' content={ metadata.image } />
        <link rel="calnonical" href={ metadata.url } />

        <meta property='og:type' content='website' />
        <meta property='og:title' content={ metadata.metaTitle } />
        <meta property='og:image' content={ metadata.image } />
        <meta property='og:description' content={ metadata.description } />
        <meta property='og:site_name' content="Tus's Memes" />
        <meta property='og:url' content={ metadata.url } />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name='twitter:creator' content={ metadata.author } />
        <meta name='twitter:title' content={ metadata.metaTitle } />
        <meta name='twitter:description' content={ metadata.description } />
        <meta name='twitter:image' content={ metadata.image } />
        <meta name='twitter:url' content={ metadata.url } />

        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <Navbar />
        { props.children }
      </body>
    </html>
  );
}
