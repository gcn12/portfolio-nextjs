import { 
    Container,
    CategoryContainer,
    Category,
    Title,
    TitleContainer,
} from './Enjoying.styles'
import { enjoying } from '../../dataObjects/enjoying'

const Enjoying = () => {
    return(
        <Container>
            What I'm enjoying
            <CategoryContainer>
                {enjoying.map((item, index) => {
                    return(
                        <div key={index}>
                            <Category>{item.category}</Category>
                            <TitleContainer>
                                {item.content.map(item2=> {
                                    return(
                                        <Title rel='nonreferrer noopener' target='_blank' href={item2.url} key={item2.title}>{item2.title}</Title>
                                    )
            
                                })}
                            </TitleContainer>
                        </div>
                    )
                })}
            </CategoryContainer>
        </Container>
    )
}

export default Enjoying