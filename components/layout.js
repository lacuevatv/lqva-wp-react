import Head from 'next/head'
import Nav from './nav'

export default class extends React.Component {
  render() {
    return <div>
      <Head>
        <title>{this.props.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no" />
        <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/static/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-title" content="LaCueva.tv" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link href="/static/assets/css/reset.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Raleway:300,500,600" rel="stylesheet" />
      </Head>
      <style global jsx>{`
        body {
          background: #eee;
          color: #333;
          font-family: 'Raleway', sans-serif;
          font-size: 1em;
          line-height: 1.2em;
          font-weight:300;
          }
          @media (min-width: 768px) {
            body {
              font-size: 1.2em;
              line-height: 1.4em;
            }  
          }
          @media (min-width: 992px) {
            body {
              font-size: 1em;
              line-height: 1.2em;
            }  
          }
      `}
      </style>
      
      <Nav />
      
      {this.props.children}

    </div>
  }
}
