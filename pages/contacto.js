import Layout from '../components/layout'
 
export default class extends React.Component {
 //static async getInitialProps() { /* Get the Latest Stories */ }
 
 render() {
   return <Layout title="LaCueva.tv">
      
      <div className="wrapper">
        <h1>Contacto</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut minim veniam.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      
      <style jsx>{` 
        .wrapper {
          padding: 4em 1em;
        }
        h1 {
          font-weight:600;
        }
      `}</style>
   </Layout>
 }
}