import React,{useContext,useState} from 'react';
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link,useParams } from 'react-router-dom';
import {RoomContext} from '../Context';
// import {Component} from 'react';
import StyledHero from '../components/StyledHero';

const SingleRoom = (  ) => {
  // console.log(props); 
  // Get the slug using React Router's useParams hook
  const slug = useParams();
  // now we create usestate
  const [state, setState] = useState({
  slug: slug,
  defaultBcg
  });
  // Get the context we defined in context.js using React's useContext hook

  const {getRoom} = useContext(RoomContext);
  // Similar to the tutorial, we access the getRoom function through our context (no need for 'this')
  console.log(slug);
  const room = getRoom(state.slug);
  // Get the room object that matches our slug like in the tutorial (no need to access state)

  if (!room) {
    return (
      <div className="error">
        <h3>no such room could be found...</h3>
        <Link to="/room" className="btn-primary">
          back to rooms
        </Link>
      </div>
    );
  }
  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = room;
  const [mainImg,...defaultImg]=images;
  //console.log(defaultImg)
  return (
    <>
    <StyledHero img={mainImg || state.defaultBcg }>
      <Banner title={`${name} room`}>
        <Link to="/room" className="btn-primary">
          back to rooms
        </Link>
      </Banner>
    </StyledHero>
    <section className="single-room">
      <div className="single-room-images">
        {defaultImg.map((item,index) =>{
          return <img key={index} src={item} alt={name}/>
        })}
      </div>
      <div className="single-room-info">
        <article className="desc">
          <h3>details</h3>
          <p>{description}</p>
        </article>
        <article className="info">
          <h3>info</h3>
          <h6>price : ${price}</h6>
          <h6>size : {size} SQFT</h6> 
          <h6>
            max capacity : {" "}
            {capacity >1 ? `${capacity} people ` :` ${capacity} person`}

          </h6>
          <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
          <h6>{breakfast &&"free breakfast included"}</h6>
        </article>
      </div>
    </section>
    <section className="room-extras"><h6>extras</h6>
    <ul className="extras">
      {extras.map((item,index) => {
        return <li key={index}> - {item}</li>;
      })}
    </ul></section>
    </>
  );
};



// class SingleRoom extends  Component{
//   constructor(props){
//     super(props);
//     this.state={
//       slug:this.props.params.slug,
//       defaultBcg:defaultBcg
//     }
//   }
//   static contextType=RoomContext;

//   render(){
//     const {getRoom}=this.context;
//     const room=getRoom(this.state.slug);
//     if (!room) {
//       return (
//         <div className="error">
//           <h3> no such room could be found...</h3>
//           <Link to="/room" className="btn-primary">
//             back to rooms
//           </Link>
//         </div>
//       );
//     }
//     const {
//       name,
//       description,
//       capacity,
//       size,
//       price,
//       extras,
//       breakfast,
//       pets,
//       images
//     } = room;
//     const [main, ...defaultImages] = images;
//     console.log(defaultImages);
//     return (
//       <>
//       <StyledHero img={images[0] || this.state.defaultBcg}>
//           <Banner title={`${name} room`}>
//             <Link to="/room" className="btn-primary">
//               back to rooms
//             </Link>
//           </Banner>
//         </StyledHero>
//         <section className="single-room">
//           <div className="single-room-images">
//             {defaultImages.map((item, index) => (
//               <img key={index} src={item} alt={name} />
//             ))}
//           </div>
//           <div className="single-room-info">
//             <article className="desc">
//               <h3>details</h3>
//               <p>{description}</p>
//             </article>
//             <article className="info">
//               <h3>info</h3>
//               <h6>price : ${price}</h6>
//               <h6>size : {size} SQFT</h6>
//               <h6>
//                 max capacity :
//                 {capacity > 1 ? `${capacity} people` : `${capacity} person`}
//               </h6>
//               <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
//               <h6>{breakfast && "free breakfast included"}</h6>
//             </article>
//           </div>
//         </section>
//         <section className="room-extras">
//           <h6>extras </h6>
//           <ul className="extras">
//             {extras.map((item, index) => (
//               <li key={index}>- {item}</li>
//             ))}
//           </ul>
//         </section>
//       </>
//     )
      
    
//   }
 
// }

 
// const SingleRoom = () => {
//   // console.log(props); 
//   // Get the slug using React Router's useParams hook
//   const slug = useParams();
//   // now we create usestate
//   const [state] = useState({
//   slug: slug
//   });
//   // Get the context we defined in context.js using React's useContext hook

//   const {getRoom} = useContext(RoomContext);
//   // Similar to the tutorial, we access the getRoom function through our context (no need for 'this')
//   console.log(slug);
//   const room = getRoom(state.slug);
//   // Get the room object that matches our slug like in the tutorial (no need to access state)

//   if (!room) {
//     return (
//       <div className="error">
//         <h3>no such room could be found...</h3>
//         <Link to="/room" className="btn-primary">
//           back to rooms
//         </Link>
//       </div>
//     );
//   }
//   else{
//   const {
//     name,
//     description,
//     capacity,
//     size,
//     price,
//     extras,
//     breakfast,
//     pets,
//     images,
//   } = room;
//   const [mainImg,...defaultImg]=images;
//   //console.log(defaultImg)
//   return (
//     <>
//     <Hero img={mainImg[0] || defaultBcg} hero='roomsHero'>
//       <Banner title={`${name} room`}>
//         <Link to="/rooms" className="btn-primary">
//           back to rooms
//         </Link>
//       </Banner>
//     </Hero>
//     <section className="single-room">
//       <div className="single-room-images">
//         {defaultImg.map((item,index) =>{
//           return <img key={index} src={item} alt={name}/>
//         })}
//       </div>
//       <div className="single-room-info">
//         <article className="desc">
//           <h3>details</h3>
//           <p>{description}</p>
//         </article>
//         <article className="info">
//           <h3>info</h3>
//           <h6>price : ${price}</h6>
//           <h6>size : {size} SQFT</h6>
//           <h6>
//             max capacity : {" "}
//             {capacity >1 ? `${capacity} people ` :` ${capacity} person`}

//           </h6>
//           <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
//           <h6>{breakfast &&"free breakfast included"}</h6>
//         </article>
//       </div>
//     </section>
//     <section className="room-extras"><h6>extras</h6>
//     <ul className="extras">
//       {extras.map((item,index) => {
//         return <li key={index}> -{item}</li>;
//       })}
//     </ul></section>
//     </>
//   );
//     }
// };




 export default SingleRoom;


