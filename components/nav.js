import Link from 'next/link'

const BrandName = (
    <div className="brand-name">
        <Link href="/">
            <a>LaCueva.tv</a>
        </Link>
        <style jsx>{`  
          .brand-name a {
              margin-left: 10px;
              text-decoration: none;
              color: #fff;
              font-weight:500;
          }
          .main-menu a:hover {
              opacity: 0.6;
          }
        `}
        </style>
    </div>
)

const MainMenu = (
    <div className="main-menu">
        <Link href="/trabajos">
            <a>Trabajos</a>
        </Link>
        <Link href="/contacto">
            <a>Contacto</a>
        </Link>
        <style jsx>{`  
            .main-menu {
                min-width: 40%;
                text-align: right;
            }

            .main-menu a {
                margin: 0 5px;
                text-decoration: none;
                color: #fff;
                font-weight:500;
            }
            .main-menu a:hover {
                opacity: 0.6;
            }
        `}
        </style>
    </div>
)

export default class extends React.Component {
    
    render() {
       return <nav>

            {BrandName}
            
            {MainMenu}
            
        <style jsx>{`
            nav {
                position: fixed;
                top: 0;
                left: 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
                height: 3em;
                width: 100%;
                max-width: 100%;
                padding: 0.5em 1em;
                background-color: #333;
                box-shadow: 0em 0em 0.2em #333;
            }
        `}
        </style>
      </nav>
    }
  }