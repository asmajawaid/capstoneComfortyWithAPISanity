

type Slug = {
  current: string;
  _type: "slug";
};

 export interface ProducT {
    _id: string;
    title: string;
    // slug:{
    //   _type: "slug";
    //   current: string;
    // }
    slug: Slug;
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
  
  
