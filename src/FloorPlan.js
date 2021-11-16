import Kitchen from './Kitchen.js'
import Bath from './Bath.js'
import LivingRoom from './LivingRoom.js'
import Bedroom from './Bedroom.js'


function FloorPlan(props){

    return(
        <>
        <Kitchen />
        <LivingRoom />
        <Bedroom bedNum={1} />
        <Bedroom bedNum={2} />
        <Bath size={"half"} />
        <Bath size={"full"} />
        </>
    )

}

export default FloorPlan