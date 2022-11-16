import Ddata from './Ddata'
import Slider from 'react-slick/lib/slider'

export default function Dcart(){
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
    }
    
    return(
        <>
        <Slider {...settings}>
      
                {Ddata.map((nov, index) => {
                  return(
                    <>
                    <div className=" product" key={index}>
                        <div className="box" >
                            <div className="img">
                                <figure><img src={nov.cover} alt={nov.name} width='100%'/></figure>  
                            </div>
                            <h4>{nov.name}</h4>
                            <span>{nov.price}</span>
                        </div>
                  
                    </div>
                    </>
                  )
                })}
            
            </Slider>
        </>
    )
}




// import { Addresse } from "adresses";

// export default function Adresses(){
//     return(
     
//         {Addresse.map((address) => {
//           return(
//     <ul role="list" className="p-6 divide-y divide-slate-200" key={index}>

//             <li className="flex py-4 first:pt-0 last:pb-0">
//             // <img className="h-10 w-10 rounded-full" src="{address.imageUrl}" alt="" />
//             <div className="ml-3 overflow-hidden">
//               <p className="text-sm font-medium text-slate-900">{address.title}</p>
//               <p className="text-sm text-slate-500 truncate">{address.address}</p>
//             </div>
//           </li>
//     </ul>
//           )
       
          
  
//  })
// }


// import { Address } from 'model/Address';
// import React from 'react';

// interface Props {
//   address: Address;
// }
// function  Addresses({ address }: Props) {
// //   const Adresse = [
// //     {
// //     id : 1,
// //     title : "novic",
// //     location : "cotonou",
// //     address : '00237653890236',
// // },
// // {
// //     id : 2,
// //     title : "novic",
// //     location : "cotonou",
// //     address : '00237653890236',
// // },
// // {
// //     id : 3,
// //     title : "novic",
// //     location : "cotonou",
// //     address : '0023765380236',
// // },
// // {
// //     id : 4,
// //     title : "novic",
// //     location : "cotonou",
// //     address : '00237653890236',
// // },
// // {
// //     id : 5,
// //     title : "novic",
// //     location : "cotonou",
// //     address : '00237653890236',
// // },

// // ];
//   return (
//     <div>
//       <div className="grow p-4">
//         <div className="flex justify-around gap-2">
//           <div className="font-bold flex gap-2 text-lg grow">
//             {address.title}
//           </div>
//           <div className="flex">
//             <span className="text-gray-400 text-sm">
//               {address.contact.fullname}
//             </span>
//           </div>
//         </div>
//         <div>
//           <span className="text-gray-500">{address.contact.phoneNumber}</span>
//         </div>
//         <div className="text-sm text-gray-500">
//           lieu de  : {address.address}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Addresses;
