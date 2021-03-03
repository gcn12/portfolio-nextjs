import { workCard } from '../../dataObjects/workCard'
import WorkCard from './WorkCard'

const CardsComponent = (props) => {
    return(
        <div>
            {workCard.map((workItem, index)=> {
                return(
                    <div className='lazy' key={index}>
                        <WorkCard viewedHome={props.viewedHome} index={index} workItem={workItem} />
                    </div>
                )
            })}
        </div>
    )
}

export default CardsComponent