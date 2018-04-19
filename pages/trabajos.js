import Layout from '../components/layout'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

var api = 'http://lacueva.tv/wp-json/wp/v2/posts/'

export default class extends React.Component {
  static async getInitialProps() {
    console.log(`buscando`)
    const res = await fetch(api)
    const works = await res.json()

    console.log(`Count: ${works.length}`)
    
    return { works }
  }
 
 render() {
   return <Layout title="LaCueva.tv">
      
      <div className="wrapper">
        <h1>Trabajos</h1>
        
        <ul>
          {this.props.works.map( (work) => (
            <li key={work.id}>
              <Link as={`/w/${work.id}`} href={`/post?id=${work.id}`}>
                <a>{work.title.rendered}</a>
              </Link>
            </li>
          ) )}
        </ul>

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