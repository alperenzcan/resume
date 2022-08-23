import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    resources:{
        en:{
            translations:{
                'HOME':'HOME',
                'CONTACT':'CONTACT',
                'TIMELINE':'TIMELINE',
                'During my life, I always focused on communication, getting to know other people and myself. I have always cared about teamwork. My goal in the life is to enhance my knowledge and experience to a highest level possible and take the steps of a competent software developer with determined steps.':'During my life, I always focused on communication, getting to know other people and myself. I have always cared about teamwork. My goal in the life is to enhance my knowledge and experience to a highest level possible and take the steps of a competent software developer with determined steps.',
                'SEP 2012':'SEP 2012',
                'DEC 2012':'DEC 2012',
                'OCT 2018':'OCT 2018',
                'UNIVERSITY':'UNIVERSITY',
                'INTERNSHIP':'INTERNSHIP',
                'I got into Istanbul Technical University, chemical engineering department.':'I got into Istanbul Technical University, chemical engineering department.',
                "I worked at McDonald's for 4 months.":"I worked at McDonald's for 4 months.",
                "I did my first compulsory internship at Rebul Cosmetics' laboratory.":"I did my first compulsory internship at Rebul Cosmetics' laboratory.",
                "I did my last compulsory internship at Eti Maden Operations General Directorate.":"I did my last compulsory internship at Eti Maden Operations General Directorate.",
            }
        },
        tr:{
            translations:{
                'HOME':'ANASAYFA',
                'CONTACT':'İLETİŞİM',
                'TIMELINE':'TARİH',
                'During my life, I always focused on communication, getting to know other people and myself. I have always cared about teamwork. My goal in the life is to enhance my knowledge and experience to a highest level possible and take the steps of a competent software developer with determined steps.':'Hayatım boyunca iletişime, diğer insanları ve kendimi tanımaya odaklandım. Takım çalışmasına hep önem verdim. Hayattaki amacım bilgi ve tecrübemi en üst düzeye çıkarmak ve yetkin bir yazılımcı olabilmek için kararlı ve hesaplanmış adımlar atmaktır.',
                'SEP 2012':'EYL 2012',
                'DEC 2012':'ARA 2012',
                'OCT 2018':'EKI 2018',
                'UNIVERSITY':'ÜNİVERSİTE',
                'INTERNSHIP':'STAJ',
                'I got into Istanbul Technical University, chemical engineering department.':'İstanbul Teknik Üniversitesi, kimya mühendisliği bölümünü kazandım.',
                "I worked at McDonald's for 4 months.":"4 ay boyunca McDonalds'ta çalıştım.",
                "I did my first compulsory internship at Rebul Cosmetics' laboratory.":"İlk zorunlu stajımı Rebul Kozmetik lavoratuvarında yaptım.",
                "I did my last compulsory internship at Eti Maden Operations General Directorate.":"Son zorunlu stajımı Eti Maden İşletmeleri Genel Müdürlüğünde yaptım."
            }
        }
    },
    fallbackLng:'tr',
    ns:['translations'],
    defaultNS:'translations',
    keySeparator:false,
    interpolation:{
        escapeValue:false,
        formatSeparator:','
    },
    react:{
        wait:true
    }
});

export default i18n;