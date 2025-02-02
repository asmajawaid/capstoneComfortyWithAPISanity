
 export interface ProductData {
    _id: string;
    title: string;
    slug:{
      _type: "slug";
      current: string;
    }
    priceWithoutDiscount: number | null;
    category: {
      _id: string;
      title: string;
    };
    tags: string[];
    price: number;
    badge: string | null;
    imageUrl: string;
    description: string;
    inventory: number;
  };
  
  
// export interface Product  {
//   _id: string;
//   title: string;
//   _type: "product",
//   price: number;
//   imageUrl: {
//     asset:{
//       _ref: string;
//       _Image: "image"
//     }
//   };
//   slug:{
//     _type: "slug";
//     current: string;
//   }
//   originalPrice?: number;
//   isNew?: boolean;
//   isSale?: boolean;
//   description?: string;
//   discount?: { percentage: number; code: string };
// };