import React from 'react'
import { useTranslation } from 'react-i18next'
import './section.css'
import '../../App.css'

const Timeline = props => {

    const { t } = useTranslation()

    return (
        <div className="timeline" {...props}>
            <div className='section'>
                <div class="timeline-container left">
                    <div class="date">{t('SEP 2012')}</div>
                    <i className="icon bi bi-book"></i>
                    <div class="content">
                        <h2><b>{t('UNIVERSITY')}</b></h2>
                        <p>
                            {t('I got into Istanbul Technical University, chemical engineering department.')}
                        </p>
                    </div>
                </div>
                <div class="timeline-container right">
                    <div class="date">{t('DEC 2012')}</div>
                    <i class="icon bi bi-fire"></i>
                    <div class="content">
                        <h2><b> {t('WORK')} </b></h2>
                        <p>
                            {t("I worked at McDonald's for 4 months.")}
                        </p>
                    </div>
                </div>
                <div class="timeline-container left">
                    <div class="date"> {t('OCT 2018')} </div>
                    <i class="icon bi bi-eyedropper"></i>
                    <div class="content">
                        <h2><b>{t('INTERNSHIP')}</b></h2>
                        <p>
                            {t("I did my first compulsory internship at Rebul Cosmetics' laboratory.")}
                        </p>

                    </div>
                </div>
                <div class="timeline-container right">
                    <div class="date"> {t('MAR 2019')} </div>
                    <i class="icon bi bi-building"></i>
                    <div class="content">
                        <h2><b>{t('INTERNSHIP')}</b></h2>
                        <p>
                            {t("I did my last compulsory internship at Eti Maden Operations General Directorate.")}
                        </p>
                    </div>
                </div>
                <div class="timeline-container left">
                    <div class="date"> {t('JAN 2019')} </div>
                    <i class="icon bi bi-flag"></i>
                    <div class="content">
                        <h2> <b>{t('MILITARY SERVICE')} </b></h2>
                        <p>
                            {t('I completed my military service.')}
                        </p>
                    </div>
                </div>
                <div class="timeline-container right">
                    <div class="date"> {t('JUL 2019')} </div>
                    <i class="icon bi bi-mortarboard"></i>
                    <div class="content">
                        <h2><b> {t('GRADUATION')} </b></h2>
                        <p>
                            {t('I graduated as chemical engineer.')}
                        </p>
                    </div>
                </div>
                <div class="timeline-container left">
                    <div class="date"> {t('DEC 2019')} </div>
                    <i class="icon bi bi-gear"></i>
                    <div class="content">
                        <h2><b> {t('WORK')} </b></h2>
                        <p className='mb-2'>
                            {t('I worked as chemical engineering at Ayhan Sezer Oil and Food Industries Trading LTD for 2 months located in Bandırma')}
                        </p>
                        <div className='text-end text-md-start'>
                            <a href='https://www.ayhansezer.com.tr/tr' target='blank'> link </a>
                        </div>
                    </div>
                </div>
                <div class="timeline-container right">
                    <div class="date"> {t('SEP 2021')} </div>
                    <i class="icon bi bi-award"></i>
                    <div class="content">
                        <h2><b> {t('UNIVERSITY')} </b></h2>
                        <p className='mb-2'>
                            {t("I've started to study management information systems at Istanbul University.")}
                        </p>
                    </div>
                </div>
                <div class="timeline-container left">
                    <div class="date"> {t('NOV 2021')} </div>
                    <i class="icon bi bi-award"></i>
                    <div class="content">
                        <h2><b> {t('JAVA CERTIFICATE')} </b></h2>
                        <p className='mb-2'>
                            {t('I received Java certificate by taking OCA exam held by Oracle.')}
                        </p>
                        <div className='d-md-flex text-end text-md-start'>
                            <div>
                                <a className='me-md-4' href='https://education.oracle.com/java-se-8-programmer-i/pexam_1Z0-808' target='blank'> {t('see details')} </a>
                            </div>
                            <div>
                                <a href='https://www.credly.com/badges/edbeaf8f-9fa3-4b6c-90a0-b37aa4882bb9/public_url' target='blank'> {t('see credentials')} </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="timeline-container right">
                    <div class="date"> {t('FEB 2022')} </div>
                    <i class="icon bi bi-pc-display-horizontal"></i>
                    <div class="content">
                        <h2><b> {t('WORK')} </b></h2>
                        <p className='mb-2'>
                            {t('I have been working as Java-Spring, Reactjs developer at Cloud Group.')}
                        </p>
                        <div className='text-end text-md-start'>
                            <a href='https://www.cloudbilisim.com.tr' target='blank'> {t('link')} </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timeline