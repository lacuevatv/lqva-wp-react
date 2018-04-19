import Layout from '../components/layout'
import ListaTrabajos from '../components/lista-trabajos'

export default class extends React.Component {
  
 render() {
   return <Layout title="LaCueva.tv">
      
      <div className="wrapper">
        <h1>Trabajos</h1>
        
        <ListaTrabajos />

      </div>
      
      <style jsx>{` 
        .wrapper {
          padding: 6em 1em;
        }
        h1 {
          font-weight:600;
          font-size: 200%;
          text-transform: uppercase;
        }
      `}</style>
   </Layout>
 }

}