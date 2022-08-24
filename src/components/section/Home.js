import React from 'react'
import './section.css'
import '../../App.css'
import { useTranslation } from 'react-i18next'
import profile from '../../assets/img/profile.jpg'
import Image from '../Image'
import Button from 'react-bootstrap/Button';
import resume from '../../assets/files/Alperen Özcan resume.pdf'

const Home = props => {

  const { t } = useTranslation()

  return (
    <div className='home section d-flex justify-content-center align-items-md-center' {...props}>
      <div className='col-10 col-lg-6'>
        <div className='d-md-none col-8'>
          <Image src={profile} />
        </div>
        <div>
          <div className='entitle' style={{ color: '#707070' }}> Developer </div>
          <p className='name'> Alperen Özcan </p>
        </div>
        <div className='statement mb-3'>
          {t('During my life, I always focused on communication, getting to know other people and myself. I have always cared about teamwork. My goal in the life is to enhance my knowledge and experience to a highest level possible and take the steps of a competent software developer with determined steps.')}
        </div>
        <div>
          <a href={resume} download><Button variant="outline-success">{t('Download resume')}</Button></a>
        </div>
      </div>

    </div>
  )
}

export default Home