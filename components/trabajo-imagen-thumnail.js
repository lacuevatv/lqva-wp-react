import React from 'react'
import fetch from 'isomorphic-fetch'
var api = 'http://lacueva.tv/wp-json/wp/v2/media/';

export default class extends React.Component {
    constructor(props) {
    	super(props)
        this.state = { Imagen: '' }
    }

    componentWillMount() {
        fetch( api + this.props.imagenID )
            .then((response) => {
                return response.json()
            })
            .then((imagen) => {
                this.setState({ Imagen: imagen })
                console.log(imagen.source_url)
            })
        }

    render() {
        if (this.state.Imagen != '' ) {
        return (
            <figure>
                <img src={this.state.Imagen.source_url} alt={this.state.Imagen.title.rendered} />
                <style jsx>{`
                    figure {
                        width: 30%;
                        flex-grow: 1;
                        padding: 1em;
                        margin:0 auto;
                    }
                    img {
                        display:block;
                        width: 100%;
                        margin:0 auto;
                    }

                    @media (min-width: 992px) {
                        figure {
                            flex-grow: 0;
                        }
                    }
                `}
                </style>
            </figure>
        )
    } else {
        return null
    }
    }
}