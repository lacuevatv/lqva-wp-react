import Layout from '../components/layout'
import TrabajoIndividual from '../components/trabajo-individual'
 
export default class extends React.Component {
  
 render() {
   
   return <Layout title="LaCueva.tv">
      <div className="wrapper">
        
        <TrabajoIndividual ID={this.props.url.query.id} />
      
      </div>
      <style jsx>{` 
        .wrapper {
          padding: 6em 1em;
        }
        h1 {
          font-weight:600;
        }
      `}</style>
   </Layout>
 }
}