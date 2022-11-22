import { nanoid } from "nanoid";

const products = [
  {
    id: nanoid(),
    quantity: 1,
    spec: [
      "CPU: Intel Core i7-1260P",
      "Memory: 16GB",
      "Graphics/GPU: Intel Iris Xe (96 EUs)",
      "Display: 3,840 x 2,160 IPS with HDR support",
      "Storage: 1TB",
      "Webcam: 1080p with IR",
      "Connectivity: 2x USB-C 4.0 / Thunderbolt 4, 1x USB-A 3.2 Gen 1, combo headphone/mic",
      "Networking: Wi-Fi 6, Bluetooth 5",
    ],
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wJTIwbGVub3ZvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    image2:
      "https://images.unsplash.com/photo-1626903264858-be7e5653b8e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGVub3ZvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    name: "Lenovo",
    views: "3.9k",
    reviews: 92,
    price: 2399,
    features: [
      "Good Experience , ",
      "Fast Charging , ",
      "Great Boost Performance , ",
      "Great for Gaming and Work , ",
    ],
    description:
      "Lenovo is one of the world's leading personal technology companies, producing innovative PCs and mobile internet devices.",
    category: "laptop",
  },
  {
    id: nanoid(),
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wJTIwbGVub3ZvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    name: "Macbook Pro 2",
    views: "4.7k",
    reviews: 112,
    price: 1499,
    description:
      "The MacBook is Apple's third laptop computer family, introduced in 2006. Prior laptops were the PowerBook and iBook.",
    category: "laptop",
  },

  {
    id: nanoid(),
    quantity: 1,
    views: "4.7k",
    reviews: 112,
    name: "Huawei MateBook X Pro",
    image:
      "https://images.unsplash.com/photo-1592434134753-a70baf7979d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aHVhd2VpJTIwbm90ZWJvb2t8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    cpu: "Intel Core i7, 8th generation",
    ram: "8GB",
    storage: "512 GB SSD",
    screen: "13.9-inch, 3K (3,000 x 2,080)",
    price: 1499,
    description:
      "The Huawei MateBook X Pro is our pick for the best laptop money can buy in 2018.",
    category: "laptop",
  },
  {
    id: nanoid(),
    quantity: 1,
    views: "4.7k",
    reviews: 112,
    name: "Apple Macbook Pro 2018",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFjYm9vayUyMHByb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    cpu: "6-core Intel i7, 8th generation",
    ram: "16GB",
    storage: "1TB GB SSD",
    screen: "15-inch Retina display",
    price: 3199,
    description: "If you're after the latest and greatest laptop from Apple",
    category: "laptop",
  },
  {
    id: nanoid(),
    quantity: 1,
    views: "4.7k",
    reviews: 112,
    name: "Dell XPS 13",
    image:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXN1c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    cpu: "Intel Core i7, 8th generation",
    ram: "16GB",
    storage: "512 GB SSD",
    screen: "13.3-inch, Full HD",
    price: 1199,
    description:
      "The Dell XPS 13 is an absolutely brilliant laptop. The 2018 version rocks an 8th-generation Intel Core i5 or i7 processor and a bezel-less",
    category: "laptop",
  },
  {
    id: nanoid(),
    quantity: 1,
    views: "4.7k",
    reviews: 112,
    name: "Asus ZenBook Flip S",
    image:
      "https://images.unsplash.com/photo-1544731612-de7f96afe55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXN1c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    cpu: "Intel Core i7, 8th generation",
    ram: "16GB",
    storage: "512 GB SSD",
    screen: "13.3-inch, Full HD touchscreen",
    price: 1399,
    description:
      "Asus has struck gold with its new refresh of its ZenBook Flip S 2-in-1 laptop.",
    category: "laptop",
  },
  {
    id: nanoid(),
    quantity: 1,

    views: "4.7k",
    reviews: 112,
    name: "Samsung Notebook 9",
    image:
      "https://images.unsplash.com/photo-1520375300877-3500f50d069e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2Ftc3VuZyUyMG5vdGVib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    cpu: "Intel Core i7, 8th generation",
    ram: "16GB",
    storage: "256 GB SSD",
    screen: "15-inch, Full HD",
    price: 1499,
    description:
      "While it may not have the best keyboard in the world, the Samsung Notebook 9 is still one of the best laptops you can buy in 2018.",
    category: "laptop",
  },
  {
    id: nanoid(),
    quantity: 1,
    name: "Samsung Galaxy Book",
    description:
      "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
    price: 1499,
    discountPercentage: 4.15,
    rating: 4.25,
    stock: 50,
    brand: "Samsung",
    thumbnail: "https://dummyjson.com/image/i/products/7/thumbnail.jpg",
    image: "https://dummyjson.com/image/i/products/7/1.jpg",
    category: "laptop",
  },
  {
    id: nanoid(),
    quantity: 1,
    name: "Microsoft Surface Laptop 4",
    description:
      "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
    price: 1499,
    discountPercentage: 10.23,
    rating: 4.43,
    stock: 68,
    brand: "Microsoft Surface",
    thumbnail: "https://dummyjson.com/image/i/products/8/thumbnail.jpg",
    image: "https://dummyjson.com/image/i/products/8/1.jpg",
    category: "laptop",
  },
  {
    id: nanoid(),
    quantity: 1,
    name: "HP Pavilion 15-DK1056WM",
    description:
      "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
    price: 1099,
    discountPercentage: 6.18,
    rating: 4.43,
    stock: 89,
    brand: "HP Pavilion",
    thumbnail: "https://dummyjson.com/image/i/products/10/thumbnail.jpeg",
    image: "https://dummyjson.com/image/i/products/10/1.jpg",
    category: "laptop",
  },
  {
    id: nanoid(),
    quantity: 1,

    date: "21-06-2017",
    name: "Moto Z2",
    price: 399,
    description:
      "The MacBook is Apple's third laptop computer family, introduced in 2006. Prior laptops were the PowerBook and iBook.",
    image: "https://images-na.ssl-images-amazon.com/images/I/41ddMNyQe6L.jpg",
    features: [
      "Up to 30-hour battery† , ",
      "Focus faster , ",
      "Fast memory and tons of space for music, movies, and photos , ",
      "Qualcomm® Snapdragon™ 626 processor , ",
      "Ultra-slim aluminum unibody , ",
      '5.5" full HD super AMOLED display , ',
      "Carrier versions , ",
    ],
    category: "handphone",
  },
  {
    id: nanoid(),
    quantity: 1,
    date: "01-05-2018",
    name: "Iphone X",
    price: 999,
    description:
      "The MacBook is Apple's third laptop computer family, introduced in 2006. Prior laptops were the PowerBook and iBook.",
    image:
      "https://images.unsplash.com/photo-1530319067432-f2a729c03db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aXBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    features: [
      "Big screen , ",
      "Brilliant in every way , ",
      "Air pods , ",
      "IOS 12 , ",
      "Augmented reality , ",
      "Get more of your photos , ",
    ],
    category: "handphone",
  },
  {
    id: nanoid(),
    quantity: 1,
    date: "12-08-2018",
    name: "Samsung s9",
    price: 699,
    description:
      "The MacBook is Apple's third laptop computer family, introduced in 2006. Prior laptops were the PowerBook and iBook.",
    image:
      "https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2Ftc3VuZyUyMHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",

    features: [
      "Super slow motion , ",
      "Personal emojis , ",
      "Improved security , ",
      "Android 8.0 Oreo , ",
      "12 MP Camera , ",
      "64 GB of internal memory ",
    ],
    category: "handphone",
  },
  {
    id: nanoid(),
    quantity: 1,
    date: "11-01-2017",
    name: "Nokia 6",
    description:
      "The MacBook is Apple's third laptop computer family, introduced in 2006. Prior laptops were the PowerBook and iBook.",
    price: 599,
    image:
      "https://images.unsplash.com/photo-1546027658-7aa750153465?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG5va2lhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    features: [
      "A phone you can rely on , ",
      "Nokia 6.1 with Android One , ",
      "All power you need",
      "The best of Android, latest innovation from Google , ",
      "Get going faster , ",
      "Save time and battery life with Android 9 Pie , ",
      "ZEISS optics - exclusively with Nokia , ",
      "Built like a tank! , ",
    ],
    category: "handphone",
  },
  {
    id: nanoid(),
    quantity: 1,
    date: "11-08-20 ,17",
    name: "Lenovo P2",
    price: 899,
    description:
      "The MacBook is Apple's third laptop computer family, introduced in 2006. Prior laptops were the PowerBook and iBook.",
    image:
      "https://images.unsplash.com/photo-1560153203-9ab89456d462?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVub3ZvJTIwaGFuZHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    features: [
      "177 g weight and 8.3 mm thin , ",
      "Qualcomm Snapdragon 625 true octa-core 2.0 GHz processor Android 6.0.1, Marshmallow 13.97cm , ",
      "(5.5) (1920 x 1080) Full HD Super AMOLED display ,  , ",
      ,
      "3 GB / 4 GB RAM memory and 32 GB ROM storage, expandable up to 128 GB with microSD , ",
      "Up to 78.69 hours talk time, up to 32 days standby with embedded 5100 mAh battery , ",
    ],
    category: "handphone",
  },
  {
    id: nanoid(),
    quantity: 1,
    date: "10-08-2018",
    name: "Iphone 14",
    price: 999,
    description:
      "The MacBook is Apple's third laptop computer family, introduced in 2006. Prior laptops were the PowerBook and iBook.",
    image:
      "https://images.unsplash.com/photo-1653921167679-7676ed531a58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lJTIwMTR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    features: [
      "The speed you need , ",
      "More to see! , ",
      "Double cameras , ",
      "Designed in one plus way , ",
      "Protection against rain , ",
      "Do more with less! , ",
    ],
    category: "handphone",
  },
  {
    id: nanoid(),
    quantity: 1,
    description:
      "The MacBook is Apple's third laptop computer family, introduced in 2006. Prior laptops were the PowerBook and iBook.",
    image:
      "https://i01.appmifile.com/webfile/globalimg/7/E6E47BBD-D475-3C6F-1161-7B987A919522.jpg",
    name: "Mi LED 41 PRO 32-inch HD Ready Android TV",
    price: 1499,
    category: "television",
  },
  {
    id: nanoid(),
    quantity: 1,
    description:
      "The MacBook is Apple's third laptop computer family, introduced in 2006. Prior laptops were the PowerBook and iBook.",
    image:
      "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71qNyBvd41L._AC_UY327_FMwebp_QL65_.jpg",
    name: "LG 43 inch Full HD LED TV 43LK5360PTA",
    price: 2599,
    category: "television",
  },
  {
    id: nanoid(),
    quantity: 1,
    description:
      "The MacBook is Apple's third laptop computer family, introduced in 2006. Prior laptops were the PowerBook and iBook.",
    image:
      "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61f1sKQ7FiL._AC_SR360,240_QL70_.jpg",
    name: "Telefunken 55 inch 4K Ultra HD Smart LED TV",
    price: 1799,
    category: "television",
  },
  {
    id: nanoid(),
    quantity: 1,
    description:
      "The MacBook is Apple's third laptop computer family, introduced in 2006. Prior laptops were the PowerBook and iBook.",
    image:
      "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61CPMI3vuVL._AC_UY327_FMwebp_QL65_.jpg",
    name: "Sony Bravia 32 inch HD Ready LED Smart TV",
    price: 1699,
    category: "television",
  },
  {
    id: nanoid(),
    quantity: 1,
    description:
      "The MacBook is Apple's third laptop computer family, introduced in 2006. Prior laptops were the PowerBook and iBook.",
    image:
      "https://images.unsplash.com/photo-1610041321327-b794c052db27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aGVhZHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    name: "Razer Barracuda X ",
    price: 69,
    category: "headphone",
  },
  {
    id: nanoid(),
    quantity: 1,
    description:
      "The MacBook is Apple's third laptop computer family, introduced in 2006. Prior laptops were the PowerBook and iBook.",
    image:
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    name: "Plantronics ",
    price: 146.98,
    description:
      "- Voyager Focus UC with Charge Stand (Poly) - Bluetooth Dual-Ear (Stereo) Headset with Boom Mic",
    category: "headphone",
  },
  {
    id: nanoid(),
    quantity: 1,
    description:
      "The MacBook is Apple's third laptop computer family, introduced in 2006. Prior laptops were the PowerBook and iBook.",
    image:
      "https://images.unsplash.com/photo-1599669454699-248893623440?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhlYWRwaG9uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    name: "JLab Go",
    price: 39.99,
    category: "headphone",
  },
  {
    id: nanoid(),
    quantity: 1,
    description:
      "The MacBook is Apple's third laptop computer family, introduced in 2006. Prior laptops were the PowerBook and iBook.",
    image:
      "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aGVhZHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    name: "Avantree Aria Pro 2",
    price: 109,
    category: "headphone",
  },
  {
    id: nanoid(),
    quantity: 1,
    price: 899.99,
    image:
      "https://images.unsplash.com/photo-1495707902641-75cac588d2e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fub258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    name: "Canon",
    description: "Canon EOS Rebel T3i DSLR Camera with 18-55mm Lens",
    button: "Learn more about Canon",
    category: "camera",
  },
  {
    id: nanoid(),
    quantity: 1,
    price: 599.99,
    image:
      "https://images.unsplash.com/photo-1495707902641-75cac588d2e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fub258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    name: "Canon",
    description: "Canon EOS Rebel T3i DSLR Camera with 18-55mm Lens",
    button: "Learn more about Canon",
    category: "camera",
  },
  {
    id: nanoid(),
    quantity: 1,
    price: 2796.99,
    image:
      "https://images.unsplash.com/photo-1624913503273-5f9c4e980dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmlrb24lMjBjYW1lcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",

    name: "Nikon",
    description: "Nikon D3100 DSLR Camera with 18-55mm Lens",
    button: "Learn more about Nikon",
    category: "camera",
  },
  {
    id: nanoid(),
    quantity: 1,
    price: 2269.95,
    image:
      "https://images.unsplash.com/photo-1617468264204-92588bd6485a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c29ueXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",

    name: "Sony",
    description: "Sony D3100 DSLR Camera with 18-55mm Lens",
    button: "Learn more about Sony",
    category: "camera",
  },
];

export default products;
