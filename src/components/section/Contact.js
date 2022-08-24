import React from 'react'
import { useTranslation } from 'react-i18next'
import './section.css'


const Contact = props => {

    const { t } = useTranslation()

    return (
        <div className='mt-5' {...props} style={{marginBottom:'300px'}}>
            <div>
                <h2 className='title'> {t('CONTACT')} </h2>
            </div>
            <div>
                <div className='d-flex align-items-center'>
                    <i className="contact-icon bi bi-telephone-fill me-4"></i>
                    <p className='fs-24 mb-0'>+90 539 265 13 20</p>
                </div>
                <div className='d-flex align-items-center'>
                    <i className="contact-icon bi bi-envelope-fill me-4"></i>
                    <p className='fs-24 mb-0'>ozcanalpe@gmail.com</p>
                </div>
                <div className='d-flex align-items-center'>
                    <i className="contact-icon bi bi-geo-alt-fill me-4"></i>
                    <p className='fs-24 mb-0'>İstanbul / {t('Turkey')}</p>
                </div>
                <div className='d-flex align-items-center'>
                    <i className="contact-icon bi bi-github me-4"></i>
                    <p className='fs-24 mb-0'><a href='https://github.com/alperenzcan' target='blank'>alperenzcan</a></p>
                </div>
                <div className='d-flex align-items-center'>
                    <i className="contact-icon bi bi-linkedin me-4"></i>
                    <p className='fs-24 mb-0'><a href='https://www.linkedin.com/in/ozcanalpe' target='blank'>ozcanalpe</a></p>
                </div>
               
               
            </div>

        </div>
    )
}
export default Contact