import React from 'react';
import { HeaderArea } from './styles';
import { Link } from "react-router-dom";

import { isLogged, doLogout } from '../../../helpers/AuthHandler';

const Header = () => {
    const logged = isLogged();

    const handleLogout = () => {
        doLogout();
        window.location.href = '/';
    }
    return (
        <HeaderArea>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <span className="logo-0">O</span>
                        <span className="logo-1">L</span>
                        <span className="logo-2">X</span>
                    </Link>
                </div>
                <nav>
                    <ul>
                        {logged && 
                        <>
                            <li>
                                <Link to="/my-account">Minha Conta</Link>
                            </li>

                            <li>
                                <button onClick={handleLogout}>Sair</button>
                            </li> 

                            <li>
                                <Link to="/post-an-ad" 
                                className="button">Poste um anúncio</Link>
                            </li>
                        </>
                        }
                        
                        {!logged && 
                        <>
                            <li>
                                <Link to="/signin">Login</Link>
                            </li>

                            <li>
                                <Link to="/signup">Cadastrar</Link>
                            </li>

                            <li>
                                <Link to="/signin" 
                                className="button">Poste um anúncio</Link>
                            </li>
                        </>
                        }
                    </ul>
                </nav>
            </div>
        </HeaderArea>
    );
}

export default Header;