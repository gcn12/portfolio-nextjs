import { workCard } from '../../dataObjects/workCard'
import WorkCard from './WorkCard'

const CardsComponent = () => {
    return(
        <div>
            {workCard.map((workItem, index)=> {
                return(
                <WorkCard workItem={workItem} key={index} />
                )
            })}
        </div>
    )
}

export default CardsComponent