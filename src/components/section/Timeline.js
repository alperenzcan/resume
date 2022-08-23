import React from 'react'
import { useTranslation } from 'react-i18next'
import './section.css'
import '../../App.css'

const Timeline = props => {

    const { t } = useTranslation()

    return (
        <div className="timeline" {...props}>
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
                    {/* <h2>Lorem ipsum dolor sit amet</h2> */}
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
                <div class="date">10 Feb</div>
                <i class="icon fa fa-cog"></i>
                <div class="content">
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <p>
                        Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                    </p>
                </div>
            </div>
            <div class="timeline-container right">
                <div class="date">01 Jan</div>
                <i class="icon fa fa-certificate"></i>
                <div class="content">
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <p>
                        Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Timeline