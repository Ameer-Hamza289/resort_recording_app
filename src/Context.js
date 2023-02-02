import React, { useEffect, useState } from 'react'
import { createContext } from 'react';
import items from "./data";

 
const RoomContext = createContext();
const RoomProvider = ({children}) => {
const [state, setState] = useState(
  
    {
    rooms:[],
    sortedRooms: [],   
    featuredRooms:[],
    loading:true , 
    type : "all",
    capacity :1,
    price :0,
    minPrice:0,
    maxPrice:0,
    minSize:0,
    maxSize :0,
    breakfast:false,
    pets:false,
    }
  
)
  useEffect(()=> {
    let rooms = formatData(items)
    let featuredRooms = rooms.filter(room=>room.featured===true);
    // here we defined prices in search rooms
    let maxPrice = Math.max(...rooms.map (item=> item.price));
    let maxSize = Math.max(...rooms.map (item=> item.size));
    setState({
      rooms,
      featuredRooms,
      sortedRooms:rooms,
      loading:false,
      price:maxPrice,
      maxPrice,
      maxSize,
    })

    // console.log(rooms)
  },[]);
     const formatData = (items) => {
    let tempItems = items.map(item =>{
      let id = item.sys.id
      let images = item.fields.images.map( image=> 
        image.fields.file.url);
        let room = {...item.fields,images,id };
        return room;
    });
    return tempItems;
     }
    const  getRoom = ({slug}) => {
      let tempRooms = [...state.rooms];
      console.log(tempRooms, "//////////");
      console.log(slug, "//////////");
      const room =tempRooms.find(room=>room.slug===slug);
     return room;

     };

 const handleChange=(event)=>{
      const target = event.target;
      const value = target.type==="checkbox" ?  target.checked : target.value;
      const name= target.name;
      console.log(name,value ,"//////////////////////");

      setState({
        [name]:value
      }, filterRooms)

  //  console.log(`this is type: ${type} this is name:${name} this is value: ${value}`);
};
const filterRooms=  () => {

  let {
    rooms,type,capacity,price,minSize,maxSize,breakfast,pets
  }= state;
// all the rooms
  let tempRooms=[...rooms];
  // transform value
  capacity = parseInt(capacity);
  price = parseInt(price);
  //  filter by type
  if (type !=='all'){
    tempRooms =tempRooms.filter((room)=> room.type ===type)
  }
  //  filter by capacity
  if (capacity !==1){
    tempRooms= tempRooms.filter((room )=> room.capacity >= capacity);
  }
  // filter by price
  if (capacity !==1) {
    tempRooms= tempRooms.filter((room)=> room.price <=price);
  }
  // filter by size
  tempRooms=tempRooms.filter((room) =>room.size>=minSize&&room.size<=maxSize);
  // filter by breakfast
  if (breakfast){
    tempRooms=tempRooms.filter( (room) =>  room.breakfast===true)
  }
//  filter by pets
if (pets){
  tempRooms=tempRooms.filter( (room) =>  room.pets===true)
}
  setState({
    sortedRooms:tempRooms
  })
};

      // get Data

  return (
<RoomContext.Provider value={{...state,
getRoom: getRoom, handleChange: handleChange} }>
{children}
    </RoomContext.Provider>
  )
}

// consumer component
const RoomConsumer= RoomContext.Consumer;


// function component 
export function withRoomConsumer(Component){
  return function consumerWrapper(props) {
    return(
      <RoomConsumer>
        {(value) => <Component {...props}   context= {value}/> 
        }
      </RoomConsumer>
    )
  }
}


// export default RoomProvider ;
export {RoomProvider,RoomContext, RoomConsumer}





































































































// import {useEffect, useState } from 'react';
// // import React, { useEffect, useState } from 'react';
// import { Component } from 'react';

// import items from './data';
// import { createContext } from 'react';


// const RoomContext=createContext();
// // export default class RoomProvider extends Component {
// //   state = {
// //     rooms: [],
// //     sortedRooms: [],
// //     featuredRooms: [],
// //     loading: true,
// //     //
// //     type: "all",
// //     capacity: 1,
// //     price: 0,
// //     minPrice: 0,
// //     maxPrice: 0,
// //     minSize: 0,
// //     maxSize: 0,
// //     breakfast: false,
// //     pets: false
// //   };
// //   componentDidMount() {
// //     // this.getData();
// //     let rooms = this.formatData(items);
// //     let featuredRooms = rooms.filter(room => room.featured === true);
// //     //
// //     let maxPrice = Math.max(...rooms.map(item => item.price));
// //     let maxSize = Math.max(...rooms.map(item => item.size));
// //     this.setState({
// //       rooms,
// //       featuredRooms,
// //       sortedRooms: rooms,
// //       loading: false,
// //       //
// //       price: maxPrice,
// //       maxPrice,
// //       maxSize
// //     });
// //   }
// //   formatData(items) {
// //     let tempItems = items.map(item => {
// //       let id = item.sys.id;
// //       let images = item.fields.images.map(image => image.fields.file.url);

// //       let room = { ...item.fields, images, id };
// //       return room;
// //     });
// //     return tempItems;
// //   }
// //   getRoom = slug => {
// //     let tempRooms = [...this.state.rooms];
// //     const room = tempRooms.find(room => room.slug === slug);
// //     return room;
// //   };
// //   handleChange = event => {
// //     const target = event.target;
// //     const value = target.type === "checkbox" ? target.checked : target.value;
// //     const name = target.name;
// //     console.log(name, value);

// //     this.setState(
// //       {
// //         [name]: value
// //       },
// //       // this.filterRooms
// //     );
// //   };

// //  render() {
// //     return (
// //       <RoomContext.Provider
// //         value={{
// //           ...this.state,
// //           getRoom: this.getRoom,
// //           handleChange: this.handleChange
// //         }}
// //       >
// //         {this.props.children}
// //       </RoomContext.Provider>
// //     );
// //   }
// // }

































































//  const RoomProvider=({children})=> {
//   const [state,setState]=useState(
//     {
//      // greeting:"hello",
//   // name:'Hamza'
//   rooms:[],
//   sortedRooms:[],
//   featuredRooms:[],
//   loading:true,
//   type: 'all',
//   capacity: 1,
//   price: 0,
//   minPrice: 0,
//   maxPrice: 0,
//   minSize : 0,
//   maxSize : 0,
//   breakfast: false,
//   pets: false,
//     }
//   )
// state={
 
// };
// //getData
// useEffect(()=>{
//   let rooms=formatData(items);
//   let featuredRooms=rooms.filter(room=>room.featured===true);
//   let maxPrice=Math.max(...RoomConsumer.map(item=>item.price));
//   let maxSize=Math.max(...RoomConsumer.map(item=>item.size));


// })
// componentDidMount(){
//   let rooms=this.formatData(items);
//   // console.log(rooms);
//   let featuredRooms=rooms.filter(room=>room.featured===true);
//   let maxPrice=Math.max(...RoomConsumer.map(item=>item.price));
//   let maxSize=Math.max(...RoomConsumer.map(item=>item.size));

//   this.setState({
//     rooms,
//     featuredRooms,
//     sortedRooms:rooms,
//     loading:false,
//     price: maxPrice,
//     maxPrice,
//     maxSize

//   })
// }
// formatData(items){
//   let tempItems=items.map(item=>{
//     let id=item.sys.id
//     let images=item.fields.images.map(image=> image.fields.file.url)
//     let room={...item.fields,images,id }

//     return room;

//   })
//   return tempItems;
// }

// getRoom=({slug})=>{
//   let tempRooms=[...this.state.rooms]
//   const room=tempRooms.find((room)=>room.slug===slug)
//   return room;
// }
// handleChange=(event)=>{
//   const type=event.target.type
//   const name=event.target.name
//   const value=event.target.value
//   console.log(type,name,value);
// }
// filterRooms=()=>{
//   console.log('HELLO');
// }




//   render() {
//     return (
//     <RoomContext.Provider value={{...this.state,getRoom:this.getRoom,handleChange:this.handleChange}}>
//         {this.props.children}
//     </RoomContext.Provider>
//     )
//   }
// }


 

//  //const RoomContext=React.createContext();
//  // const RoomProvider=({children})=>{
//  //   const [state,setState]=useState({
//  //   rooms:[],
//  //   sortedRooms:[],
//  //   featuredRooms:[],
//  //   loading:true
 
//  // })
//  // useEffect(()=>{
//  //   let rooms=formatData(items);
//  //   let featuredRooms=rooms.filter(room=>room.featured===true);
//  //   setState({
//  //         rooms,
//  //         featuredRooms,
//  //         sortedRooms:rooms,
//  //         loading:false
     
//  //       });
 
 
//  // },[]);
//  // const formatData=(items)=>{
//  //     let tempItems=items.map(item=>{
//  //       let id=item.sys.id
//  //       let images=item.fields.images.map(image=> image.fields.file.url)
//  //       let room={...item.fields,images,id }
   
//  //       return room;
   
//  //     })
//  //     return tempItems;
//  //   }
 
//  // return (
//  //   <RoomContext.Provider value={{...state}}>
//  //            {children}
//  //   </RoomContext.Provider>
//  // );
 
 
//  // }

//  const RoomConsumer=RoomContext.Consumer;
//  export{RoomProvider,RoomConsumer,RoomContext};
//  export function withRoomConsumer(Component) {
//   return function ConsumerWrapper(props) {
//     return (
//       <RoomConsumer>
//         {value => <Component {...props} context={value} />}
//       </RoomConsumer>
//     );
//   };
// }