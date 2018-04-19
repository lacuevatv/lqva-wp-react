import Link from 'next/link'
import Thumnail from './trabajo-imagen-thumnail.js'
import fetch from 'isomorphic-fetch'
var api = 'http://lacueva.tv/wp-json/wp/v2/posts/'


export default class extends React.Component {
    constructor(props) {
    	super(props)
        this.state = { trabajos: [] }
    }

    componentDidMount() {
        fetch( api )
          .then((response) => {
            return response.json()
          })
          .then((trabajos) => {
            this.setState({ trabajos })
            console.log(trabajos.length)
          })
      }

    render() {
        if (this.state.trabajos.length > 0) {
            return <ul>
            {this.state.trabajos.map( (trabajo) => (
                <li key={trabajo.id}>
                    <Link as={`/w/${trabajo.id}`} href={`/post?id=${trabajo.id}`}>
                        <a>
                            <article>
                                
                                <Thumnail imagenID={trabajo.featured_media} />
                                
                                <div className="trabajo-content">
                                    <h3>{trabajo.title.rendered}</h3>
                                    <div dangerouslySetInnerHTML={ { __html: trabajo.excerpt.rendered } }></div>
                                </div>

                            </article>
                        </a>
                    </Link>
                </li>
            ) )}
            
            <style jsx>{`
                ul {
                    padding: 1em 0;
                }

                li {
                    margin: 1em 0;
                }

                a{
                    text-decoration: none;
                    color: inherit;
                }
                a:hover {
                    opacity: 0.6;
                }

                article {
                    display: flex;
                    flex-wrap: wrap;

                }

                .trabajo-content {
                    flex-grow: 1;
                    padding: 1em;
                }

                h3 {
                    margin-bottom: 0.6em;
                    font-size: 150%;
                    font-weight: 500;
                }

                @media (min-width: 992px) {
                    .trabajo-content {
                        width: 70%;
                    }
                }
            `}
            </style>
            </ul>
            
        } else {
            return <ul>
                <li>Cargando...</li>
                <style jsx>{`
                li {
                    padding: 1em;
                }
            `}
            </style>
            </ul>
        }   
    }
}