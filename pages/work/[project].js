import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import { workPages } from '../../dataObjects/workPages'
import {
    Container,
    Title,
    MainImage,
    Description,
    WorkLink,
    SectionContainer,
    SectionHeader,
    SectionParagraph,
    PhotoDescriptionContainer,
    PhotoDescriptionImage,
    PhotoDescriptionParagraph,
    PhotoDescriptionHeader,
    LinkContainer,
    Photo,
    CreatedWithItem,
    CreatedWithGrid,
    CreatedWithContainer,
    ContentContainer,
} from '../../pageStyles/[project].styles'

const Project = (props) => {
    const [isPageLoaded, setIsPageLoaded] = useState(false)
    const [hasPageBeenViewed, setHasPageBeenViewed] = useState(false)
    const router = useRouter()
    const { project } = router.query
    const pageData = workPages[project]

    useEffect(()=> {
        let func 
        if((!props.viewedTimer || !props.viewedCinematography || !props.viewedTravel || !props.viewedMessaging) && project) {
            if(project === 'timer') {
                func = props.setViewedTimer
            }else if(project === 'cinematography') {
                func = props.setViewedCinematography
            }
            else if(project === 'travel') {
                func = props.setViewedTravel
            }
            else if(project === 'messaging') {
                func = props.setViewedMessaging
            }
            setTimeout(()=> func(true), 1000)
        }
    }, [router.query])

    useEffect(()=> {
        if(project === 'timer' && props.viewedTimer) {
            setHasPageBeenViewed(true)
        }else if(project === 'cinematography' && props.viewedCinematography) {
            setHasPageBeenViewed(true)
        }
        else if(project === 'messaging' && props.viewedMessaging) {
            setHasPageBeenViewed(true)
        }
        else if(project === 'travel' && props.viewedTravel) {
            setHasPageBeenViewed(true)
        } else{
        }
    }, [])
    return(
        <div>
        <Head>
            <title>
                Gareth Ng
            </title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        {pageData &&
        <Container>
            <Title hasPageBeenViewed={hasPageBeenViewed}>{pageData.title}</Title>
            <Description hasPageBeenViewed={hasPageBeenViewed}>{pageData.description}</Description>
            <ContentContainer opacity={isPageLoaded ? 1 : 0}>
                <MainImage onLoad={()=>setIsPageLoaded(true)} src={pageData.mainImage} />
                <LinkContainer>
                    <WorkLink rel='nonreferrer noopener' target='_blank' href={pageData.projectLink}>Visit Live Project</WorkLink>
                    <div style={{marginRight: '2rem'}}></div>
                    <WorkLink rel='nonreferrer noopener' target='_blank' href={pageData.githubLink}>GitHub Repository</WorkLink>
                </LinkContainer>
                {pageData.content.map((content, index) => {
                    return(
                        <div key={index}>
                            {content.type==='section' &&
                            <SectionContainer>
                                <SectionHeader>{content.header}</SectionHeader>
                                <SectionParagraph>{content.paragraph}</SectionParagraph>
                            </SectionContainer>
                            }
                            {content.type==='createdWith' &&
                            <CreatedWithContainer>
                                <SectionHeader>{content.header}</SectionHeader>
                                <CreatedWithGrid>
                                    {content.items.map((item, index) => {
                                        return(
                                            <CreatedWithItem key={index}>{item}</CreatedWithItem>
                                        )
                                    })}
                                </CreatedWithGrid>
                            </CreatedWithContainer>
                            }
                            {content.type==='photo' &&
                            <Photo src={content.link} />
                            }
                            {content.type==='photoDescriptionLeft' && 
                            <PhotoDescriptionContainer justify='end'>
                                <div>
                                    <PhotoDescriptionHeader>{content.header}</PhotoDescriptionHeader>
                                    <PhotoDescriptionParagraph>{content.paragraph}</PhotoDescriptionParagraph>
                                </div>
                                <PhotoDescriptionImage src={content.photoLink} />
                            </PhotoDescriptionContainer>
                            }
                            {content.type==='photoDescriptionRight' && 
                            <PhotoDescriptionContainer justify='start'>
                                <PhotoDescriptionImage src={content.photoLink} />
                                <div>
                                    <PhotoDescriptionHeader>{content.header}</PhotoDescriptionHeader>
                                    <PhotoDescriptionParagraph>{content.paragraph}</PhotoDescriptionParagraph>
                                </div>
                            </PhotoDescriptionContainer>
                            }
                        </div>
                    )
                })}
            </ContentContainer>
        </Container>
        }
        </div>
    )
}

export default Project