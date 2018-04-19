import Link from 'next/link'


export default class extends React.Component {
  render() {
    return <header>
        
        <div className="presentacionWrapper">
            <h1>LaCueva.tv</h1>
            <p>
            Agencia de desarrollo web ubicada en Buenos Aires. Comunicadores, diseñadores, programadores con espíritu emprendedor. Un equipo joven, siempre al tanto de las últimas tecnologías.
            </p>
        </div>
        
        <style jsx>{`
            header {
                padding-top: 4em;
            }
            .presentacionWrapper  {
                padding: 0 1em;
            }
            h1 {
                font-size: 200%;
                line-height: 120%;
                font-weight: 500; 
                margin-bottom: 0.5em;
            }
        `}
        </style>
    </header>
  }
}