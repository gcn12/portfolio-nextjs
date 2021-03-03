import { workCard } from '../../dataObjects/workCard'
import { useEffect } from 'react'
import WorkCard from './WorkCard'

const CardsComponent = () => {
    
    // useEffect(() => {
    //     const cards = document.querySelectorAll('.lazy');
    //     const lazyLoad = target => {
    //         const io = new IntersectionObserver((entries, observer) => {
    //             entries.forEach(entry => {

    //             if (entry.isIntersecting) {
    //                 console.log('hello')
    //                 observer.disconnect();
    //             }
    //             });
    //         });

    //         io.observe(target)
    //     };
    //     cards.forEach(lazyLoad);
    // }, [])

    return(
        <div>
            {workCard.map((workItem, index)=> {
                return(
                    <div className='lazy' key={index}>
                        <WorkCard index={index} workItem={workItem} />
                    </div>
                )
            })}
        </div>
    )
}

export default CardsComponent