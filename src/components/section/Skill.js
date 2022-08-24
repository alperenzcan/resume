import React from 'react'
import { useTranslation } from 'react-i18next'
import './section.css'

const Skill = props => {

    const { t } = useTranslation();

    const skills = [
        'Java SE 8 (Oracle Certificated Java Programmer, 84/100)',
        'RESTful Web Services', 'Spring Boot',
        'React js',
        'MySQL',
        'Design Patterns',
        'Git & GitHub',
        'Bootstrap',
        'Maven'
    ]

    const projects = [
        {
            title: 'West Qurna Oil Train Project',
            desc: '(Final year design project of chemical engineering)',
            exp: 'Designing a facility which makes crude oil ready for processing, choosing related process equipment, determining the process parameters, controlling the process with a team of five students for one year.',
            link: 'https://drive.google.com/drive/u/1/folders/1zqQW2w3cQ5k4ZIsoFxfKozT_YseBlrsW'
        },
        {
            title:'Online Health Interaction System',
            exp:'ReactJs - Java Spring RESTful project that users can sign up by default roles, can schedule, get, cancel appointments by using an interface.',
            link:'https://github.com/alperenzcan/Online-Health-Interaction-System'
        }
    ]

    return (
        <div className='section mt-5' {...props}>
            <div className=' d-md-flex justify-content-between'>
                <div className='col-md-6 mb-5 mb-md-0'>
                    <div>
                        <h2 className='title'>{t('SKILLS')}</h2>
                    </div>
                    <div className='ms-4'>
                        {
                            skills.map(skill => {
                                return (
                                    <p className='skill text-dark'>
                                        {t(skill)}
                                    </p>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='col-md-5'>
                    <div>
                        <h2 className='title'>{t('PROJECTS')}</h2>
                        <div>
                            {
                                projects.map(project => {
                                    return (
                                        <div className='mb-4'>
                                            <p className='project-title mb-0'>
                                                <b> {t(project.title)}</b>
                                            </p>
                                            <p className='project-desc'>
                                                {t(project.desc)}
                                            </p>
                                            <p className='project-exp mb-0'>
                                                {t(project.exp)}
                                            </p>
                                            <a className='project-link' href={project.link} target='blank'>
                                                {t('see project')}
                                            </a>
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

export default Skill