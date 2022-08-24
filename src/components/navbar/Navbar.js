import React, { useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import { Navbar as NavBar } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import profile from '../../assets/img/profile.jpg'
import Image from '../Image'
import { useTranslation } from 'react-i18next';
import './navbar.css'
import { Link } from 'react-scroll';
import Language from './Language';

const Navbar = props => {

    const { t } = useTranslation()

    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        console.log(menuOpen)
    }, [menuOpen])

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const handleClose = () => setMenuOpen(false)

    const links = (
        <div>
            <Link to='home' onClick={handleClose}><div className='font-heavy fs-30 pb-3 navlink'> {t('HOME')}</div></Link>
            <Link to='timeline' onClick={handleClose}><div className='font-heavy fs-30 pb-3 navlink'> {t('TIMELINE')}</div></Link>
            <Link to='skill' onClick={handleClose}><div className='font-heavy fs-30 pb-3 navlink'>{t('SKILLS')} </div></Link>
            <Link to='contact' onClick={handleClose}><div className='font-heavy fs-30 pb-3 navlink'>{t('CONTACT')} </div></Link>
            <Language />
        </div>
    )

    return (
        <NavBar expand='md' className="navbar mb-3 bg-light">
            <div className='container'>
                <div className='d-none d-md-block w-100'>
                    <div className='d-flex justify-content-center my-5'>
                        <div className='col-6'>
                            <Image src={profile} />
                        </div>
                    </div>
                    <div className='d-flex justify-content-center mb-5'>
                        {links}
                    </div>
                </div>
                <div>
                    <NavBar.Toggle onClick={toggleMenu} />
                    <NavBar.Offcanvas
                        show={menuOpen}
                        onHide={handleClose}>
                        <Offcanvas.Header closeButton />
                        <Offcanvas.Body>
                            <Nav className="justify-content-end d-md-none flex-grow-1 pe-3">
                                {links}
                            </Nav>
                        </Offcanvas.Body>
                    </NavBar.Offcanvas>
                </div>
            </div>
        </NavBar>
    )
}

export default Navbar;