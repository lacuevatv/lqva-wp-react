import Link from 'next/link'
import Thumnail from './trabajo-imagen-thumnail.js'
import fetch from 'isomorphic-fetch'
var api = 'http://lacueva.tv/wp-json/wp/v2/posts/'

export default class extends React.Component {
    constructor(props) {
    	super(props)
        this.state = { trabajo: '' }
    }

    componentDidMount() {
        console.log('fetching')
        fetch( api +this.props.ID )
       
        .then((response) => {
            return response.json()
        })
        .then((trabajo) => {
            this.setState({ trabajo })
        })
    }

    render() {
        if (this.state.trabajo != '' ) {
        return <article>

            <h1> 
                {this.state.trabajo.title.rendered}
            </h1>
            
            <Thumnail imagenID={this.state.trabajo.featured_media} />
            
            <div className="trabajo-content" dangerouslySetInnerHTML={ { __html: this.state.trabajo.content.rendered } }></div>
            
            
            <style jsx>{`
                article {
                    display: flex;
                    flex-wrap: wrap;

                }

                .trabajo-content {
                    flex-grow: 1;
                    padding: 1em;
                }

                h1 {
                    font-size: 200%;
                    font-weight: 500;
                    line-height: 150%;
                    width: 100%;
                    text-transform: uppercase;
                    text-align: center;
                }

                @media (min-width: 992px) {
                    .trabajo-content {
                        width: 70%;
                    }

                    h1 {
                        margin-left: 30%;
                        padding: 0.4em;
                        text-align: left;
                    }
                }
            `}
            </style>
        </article>
        } else {
            return <article>
                <h1> 
                    Cargando
                </h1>
                <style jsx>{`
                h1 {
                        margin-left: 30%;
                        padding: 0.4em;
                        text-align: left;
                    }
            `}
            </style>
            </article>
        }
    }
}
