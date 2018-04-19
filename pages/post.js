import Layout from '../components/layout'
import fetch from 'isomorphic-unfetch'
 
export default class extends React.Component {
static async getInitialProps( context ) {
 
    const { id } = context.query
    console.log(`buscando`)
    const res = await fetch(`http://lacueva.tv/wp-json/wp/v2/posts/${id}`)
    const work = await res.json()
  
    console.log(`Fetched show: ${work.slug}`)

    return { work }
  }

 render() {
   return <Layout title="LaCueva.tv">
      
      <div className="wrapper">
        <h1>
            {this.props.work.title.rendered}
        </h1>
        
        <div dangerouslySetInnerHTML={ { __html: this.props.work.content.rendered } }></div>
        
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