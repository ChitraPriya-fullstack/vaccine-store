import React  from 'react';
import './header.styles.scss'
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/vaccine.svg';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to = "/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/order'>
                ORDER
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            <Link className='option' to='/sigin'>
                SIGN IN
            </Link>
        </div>
    </div>
);

export default Header;
