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
    VideoDescriptionImage,
    LinkContainer,
    Photo,
    CreatedWithItem,
    CreatedWithGrid,
    CreatedWithContainer,
    ContentContainer,
    LinkGap,
    Gap,
    Gap2,
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
            if(project === 'cubeclock') {
                func = props.setViewedTimer
            }else if(project === 'cinematography') {
                func = props.setViewedCinematography
            }
            else if(project === 'voyager') {
                func = props.setViewedTravel
            }
            else if(project === 'redraft') {
                func = props.setViewedMessaging
            }
            setTimeout(()=> func(true), 1000)
        }
    }, [router.query])

    useEffect(()=> {
        if(project === 'cubeclock' && props.viewedTimer) {
            setHasPageBeenViewed(true)
        }else if(project === 'cinematography' && props.viewedCinematography) {
            setHasPageBeenViewed(true)
        }
        else if(project === 'redraft' && props.viewedMessaging) {
            setHasPageBeenViewed(true)
        }
        else if(project === 'voyager' && props.viewedTravel) {
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
                <MainImage alt='' onLoad={()=>setIsPageLoaded(true)} src={pageData.mainImage} />
                <LinkContainer>
                    <span>
                        <WorkLink rel='nonreferrer noopener' target='_blank' href={pageData.projectLink}>Visit Live Project</WorkLink>
                    </span>
                    <LinkGap style={{marginRight: '2rem'}}></LinkGap>
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
                            <Photo alt='' src={content.link} />
                            }
                            {content.type==='photoDescriptionLeft' && 
                            <PhotoDescriptionContainer justify='end'>
                                <div>
                                    <PhotoDescriptionHeader>{content.header}</PhotoDescriptionHeader>
                                    <Gap />
                                    <div>
                                        <PhotoDescriptionParagraph size='large'>{content.paragraph}</PhotoDescriptionParagraph>
                                    </div>
                                </div>
                                <PhotoDescriptionImage src={content.photoLink} />
                                <PhotoDescriptionParagraph size='small'>{content.paragraph}</PhotoDescriptionParagraph>
                            </PhotoDescriptionContainer>
                            }
                            {content.type==='photoDescriptionRight' && 
                            <PhotoDescriptionContainer justify='start'>
                                <PhotoDescriptionHeader size='small'>{content.header}</PhotoDescriptionHeader>
                                <PhotoDescriptionImage alt='' src={content.photoLink} />
                                <div>
                                    <PhotoDescriptionHeader size='large'>{content.header}</PhotoDescriptionHeader>
                                    <Gap2 />
                                    <div>
                                        <PhotoDescriptionParagraph>{content.paragraph}</PhotoDescriptionParagraph>
                                    </div>
                                </div>
                            </PhotoDescriptionContainer>
                            }
                            {content.type==='videoDescriptionLeft' && 
                            <PhotoDescriptionContainer justify='end'>
                                <div>
                                    <PhotoDescriptionHeader>{content.header}</PhotoDescriptionHeader>
                                    <Gap />
                                    <div>
                                        <PhotoDescriptionParagraph size='large'>{content.paragraph}</PhotoDescriptionParagraph>
                                    </div>
                                </div>
                                <VideoDescriptionImage autoPlay muted playsInline loop>
                                    <source src={content.link} type='video/mp4' />
                                </VideoDescriptionImage>
                                <PhotoDescriptionParagraph size='small'>{content.paragraph}</PhotoDescriptionParagraph>
                            </PhotoDescriptionContainer>
                            }
                            {content.type==='videoDescriptionRight' && 
                            <PhotoDescriptionContainer justify='start'>
                                <PhotoDescriptionHeader size='small'>{content.header}</PhotoDescriptionHeader>
                                <VideoDescriptionImage autoPlay muted playsInline loop>
                                    <source src={content.link} type='video/mp4' />
                                </VideoDescriptionImage>
                                <div>
                                    <PhotoDescriptionHeader size='large'>{content.header}</PhotoDescriptionHeader>
                                    <Gap2 />
                                    <div>
                                        <PhotoDescriptionParagraph>{content.paragraph}</PhotoDescriptionParagraph>
                                    </div>
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