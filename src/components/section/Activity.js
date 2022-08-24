import React from 'react'
import { useTranslation } from 'react-i18next'
import './section.css'


const Activity = props => {

    const { t } = useTranslation();

    const activities = [
        'Violin performer in Classical Music ensemble',
        'Classical kemenche performer in Turkish Music ensemble',
        'Member of chess club',
        'Volunteering club'
    ]

    const certificates = [
        {
            name: 'Oracle Certified Associate, Java SE 8 Programmer I',
            credentials: 'https://www.credly.com/badges/edbeaf8f-9fa3-4b6c-90a0-b37aa4882bb9/public_url'
        },
        {
            name: 'KIMMTE2 2. Chemical Engineering Design Event'
        },
        {
            name: "AIChE Career Lab’18"
        }
    ]

    return (
        <div className='section mt-5' {...props} >
            <div className=' d-md-flex justify-content-between mt-5'>
                <div className='col-md-6 mb-5 mb-md-0'>
                    <h2 className='title'>{t('ACTIVITIES')}</h2>
                    <div className='ms-4'>
                        {
                            activities.map((activity, index) => {
                                return (
                                    <p key={index} className='skill text-dark'>
                                        {t(activity)}
                                    </p>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='col-md-5'>
                    <div>
                        <h2 className='title'>{t('CERTIFICATES')}</h2>
                        <div className='ms-4'>

                        {
                            certificates.map((certificate, index) => {
                                return (
                                    <div key={index} className='mb-3' >
                                        <p className='m-0'> {t(certificate.name)} </p>
                                        {
                                            certificate.credentials &&
                                            <a href={certificate.credentials} target='blank'> {t('see credentials')}  </a>
                                        }
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Activity