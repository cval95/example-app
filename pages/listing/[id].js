import { CardContent } from "@mui/material";
import { data } from "../../lib";
import accomStyles from '../../styles/accom.module.css'
import Link from "next/link";


export default function ListingPage({ listing }) {
  return (
    <div>
      

    <h1 className={accomStyles.title}>{listing.name}</h1>
      

      <h2 className={accomStyles.title}>Rooms</h2>
     
      <ul >
   

        {listing.rooms.map((room) => (
         

          
          <ul className={accomStyles.card} key={room["@id"]}>
            <h2>{room.name} </h2>
            <p>Type: {room.room_type_description}</p>   
            <p>{room.description}</p>
            <p>Occupancy: {room["@occupancy"]}</p>
            <p>Min Occupancy: {room["@min_occupancy"]}</p>
            <p>Rooms Available: {room["@available"]}</p>
            <p>Total Rooms: {room["@total"]}</p>
           
            <p>Facilities:</p>
            <ul>
        {room.facilities?.map((facility) => (
          <li key={facility["@id"]}>{
            facility.label}</li>

        ))}
      </ul>
      <br>
      </br>
          <p>Price: {room.supplement_price?.price.price}</p>

          

          

       

        
          

   </ul>
  
           
        
        ))}
        
         
      </ul>
             <Link href={`/listing/`}><button className={accomStyles.btn}> Go Back</button></Link> 
            
    </div> 
  );
}
// This function gets called at build time on server-side.
export async function getStaticProps(context) {
  const { id } = context.params;
  const listing = data.accommodations.find((listing) => listing["@id"] == id);

  
    // By returning { props: { listings } }, the listing component
  // will receive `listing` as a prop at build time
  return {
    props: {
      listing: listing,
      
     
    },
    
  };
}









export async function getStaticPaths() {
  return {
    paths: 
    data.accommodations.map((listing) => ({
      params: { id: listing["@id"].toString() },
    })),
    


    
    fallback: true,
  };
}

