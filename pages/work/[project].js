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
                <div style={{display: 'flex'}}>
                    <WorkLink>Visit Live Project</WorkLink>
                    <div style={{marginRight: '2rem'}}></div>
                    <WorkLink>GitHub Repository</WorkLink>
                </div>
                {pageData.content.map((content, index) => {
                    return(
                        <div key={index}>
                            {content.type==='section' &&
                            <SectionContainer>
                                <SectionHeader>{content.header}</SectionHeader>
                                <SectionParagraph>{content.paragraph}</SectionParagraph>
                            </SectionContainer>
                            }
                            {content.type==='photo' &&
                            <img src={content.link} />
                            }
                            {content.type==='photoDescription' && 
                            <PhotoDescriptionContainer>
                                <div>
                                    <PhotoDescriptionHeader>{content.header}</PhotoDescriptionHeader>
                                    <PhotoDescriptionParagraph>{content.paragraph}</PhotoDescriptionParagraph>
                                </div>
                                <PhotoDescriptionImage src={content.photoLink} />
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