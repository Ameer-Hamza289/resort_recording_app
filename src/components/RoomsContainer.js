import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import { RoomConsumer } from '../Context'
import Loading from '../components/Loading'

export default function RoomsContainer() {
   
  return (
    <RoomConsumer>
    {
        (value)=>{
            // console.log(value);
        const {loading,sortedRooms,rooms}=value;
        if(loading){
            return <Loading/>
        }
    return (
        <div>
            <RoomsFilter rooms={rooms}/>
            <RoomsList rooms={sortedRooms} />
        </div>
            )
                 }
    }
</RoomConsumer>
        )
}
