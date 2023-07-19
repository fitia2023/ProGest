import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo.png'

class Navbar extends React.Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-custom">
                    <div className="container-fluid" style={{ height: '60px' }}>
                        <a className="navbar-brand" href="/">
                            <img src={logo} alt="logo" />
                        </a>
                        <div>
                            <Link className='text-white' to={"/"} style={{ textDecoration: 'none', fontSize: '20px' }}>
                                Projets
                            </Link>
                        </div>

                        <Link
                            className="text-light"
                            style={{
                                textDecoration: 'none',
                                fontFamily: 'Montserrat, sans-serif',
                                fontWeight: 'bold',
                                fontSize: '44px',
                            }}
                        >
                            <span style={{ color: '#ff0000', fontSize: '50px', lineHeight: '1' }}>P</span>
                            ro
                            <span style={{ color: '#ff0000', fontSize: '50px', lineHeight: '1' }}>G</span>
                            est
                        </Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <div>
                            <Link className='btn btn-outline-light' to={"/ajoutprojet/list"} style={{ width: '150px' }}>
                                Ajout projet
                            </Link>

                        </div>
                    </div>
                </nav>
            </div>
        )
    }

}

export default Navbar;
