import React from 'react'
import { useTranslation } from 'react-i18next'
import trIcon from '../../assets/icons/tr-icon.png'
import usaIcon from '../..//assets/icons/usa-icon.png'

const Language = () => {
    const { t, i18n } = useTranslation()

    const onChangeLanguage = language => {
        i18n.changeLanguage(language)
    }

  return (
    <div className='d-flex'>
    <img className='me-2 flag' src={trIcon} onClick={() => onChangeLanguage('tr')} />
    <img className='flag' src={usaIcon} onClick={() => onChangeLanguage('en')} />
</div>
  )
}

export default Language