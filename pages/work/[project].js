import { useRouter } from 'next/router'
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
} from '../../pageStyles/[project].styles'

const Project = () => {
    const router = useRouter()
    const { project } = router.query
    const pageData = workPages[project]
    return(
        <div>
            {console.log(pageData)}
        {pageData &&
        <Container>
            <Title>{pageData.title}</Title>
            <Description>{pageData.description}</Description>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <MainImage src={pageData.mainImage} />
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
                                            <CreatedWithItem>{item}</CreatedWithItem>
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
            </div>
        </Container>
        }
        </div>
    )
}

export default Project