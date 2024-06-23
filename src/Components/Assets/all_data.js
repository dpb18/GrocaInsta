import p1_img from './amul.png'
import p2_img from './saffola.jpg'
import p3_img from './digestive.png'
import p4_img from './chips.png'
import p5_img from './purabi.jpg'
import p6_img from './oreo.webp'
import p7_img from './cabbage.jpeg'
import p8_img from './carrots.webp'
import p9_img from './maggie.webp'
import p10_img from './tomato.jpg'
import p11_img from './brinjal.webp'
import p12_img from './rice.webp'
import p13_img from './potato.jpg'
import p14_img from './onion.jpg'
import p15_img from './capsicum.png'
import p16_img from './cauliflower.jpg'
import p17_img from './beans.jpg'
import p18_img from './ridgegourd.png'
import p19_img from './pumpkin.jpg'
import p20_img from './ladyfinger.jpg'
import p21_img from './mango.jpg'
import p22_img from './apple.jpg'
import p23_img from './grapes.jpg'
import p24_img from './pomegranate.jpg'
import p25_img from './dragon.png'
import p26_img from './guava.png'
import p27_img from './Avocado.png'
import p28_img from './coconut.png'
import p29_img from './watermelon.png'
import p30_img from './pineappple.jpg'
import p31_img from './banana.jpg'
import p32_img from './Orange.jpg'




let data_product = [
    {
        id:1,
        name:"Amul Taza Homozanized Milk",
        category:"groceries",
        image: p1_img,
        new_price: 65,
        old_price: 75,
    },
    {
        id:2,
        name:"Saffola Gold Refine Oil",
        category:"groceries",
        image:p2_img,
        new_price: 130,
        old_price: 150,
    },
    {
        id:3,
        name:"Nutrichoice Digestive Biscuit",
        category:"groceries",
        image:p3_img,
        new_price: 120,
        old_price: 144,
    },
    {
        id:4,
        name:"Uncle Chips and snacks",
        category:"groceries",
        image:p4_img,
        new_price: 15,
        old_price: 30,
    },
    {
        id:5,
        name:"Purabi Homozanized Milk",
        category:"groceries",
        image: p5_img,
        new_price: 65,
        old_price: 75,
    },
    {
        id:6,
        name:"Oreo Biscuits",
        category:"groceries",
        image:p6_img,
        new_price: 130,
        old_price: 150,
    },
    {
        id:7,
        name:"Organically grown Cabbage",
        category:"vegetables",
        image:p7_img,
        new_price: 120,
        old_price: 144,
    },
    {
        id:8,
        name:"Organically grown Carrot",
        category:"vegetables",
        image:p8_img,
        new_price: 15,
        old_price: 30,
    },
    {
        id:9,
        name:"Maggie instant noodles",
        category:"groceries",
        image: p9_img,
        new_price: 20,
        old_price: 30,
    },
    {
        id:10,
        name:"Organically grown Tomato",
        category:"vegetables",
        image:p10_img,
        new_price: 130,
        old_price: 150,
    },
    {
        id:11,
        name:"Organically grown Brinjal",
        category:"vegetables",
        image:p11_img,
        new_price: 120,
        old_price: 160,
    },
    {
        id:12,
        name:"Dawat Basmati Rice 5kg",
        category:"groceries",
        image:p12_img,
        new_price: 250,
        old_price: 300,
    },
    {
        id:13,
        name:"Organically grown Potato",
        category:"vegetables",
        image:p13_img,
        new_price: 50,
        old_price: 80,
    },
    {
        id:14,
        name:"Organically grown Onion",
        category:"vegetables",
        image:p14_img,
        new_price: 100,
        old_price: 150,
    },
    {
        id:15,
        name:"Organic Capsicum",
        category:"vegetables",
        image:p15_img,
        new_price: 180,
        old_price: 200,
    },
    {
        id:16,
        name:"Organic Cauliflower",
        category:"vegetables",
        image:p16_img,
        new_price: 80,
        old_price: 140,
    },
    {
        id:17,
        name:"Organic Beans",
        category:"vegetables",
        image:p17_img,
        new_price: 80,
        old_price: 140,
    },
    {
        id:18,
        name:"Organic Ridgegourd (Jika)",
        category:"vegetables",
        image:p18_img,
        new_price: 100,
        old_price: 150,
    },
    {
        id:19,
        name:"Organic Pumpkin",
        category:"vegetables",
        image:p19_img,
        new_price: 60,
        old_price: 80,
    },
    {
        id:20,
        name:"Organic Bhendi",
        category:"vegetables",
        image:p20_img,
        new_price: 80,
        old_price: 140,
    },
    {
        id:21,
        name:"Mango",
        category:"fruits",
        image:p21_img,
        new_price: 80,
        old_price: 140,
    },
    {
        id:22,
        name:"Apple",
        category:"fruits",
        image:p22_img,
        new_price: 80,
        old_price: 140,
    },
    {
        id:23,
        name:"Grapes",
        category:"fruits",
        image:p23_img,
        new_price: 80,
        old_price: 140,
    },
    {
        id:24,
        name:"Pomegranate",
        category:"fruits",
        image:p24_img,
        new_price: 80,
        old_price: 140,
    },
    {
        id:25,
        name:"Dragonfruit",
        category:"fruits",
        image:p25_img,
        new_price: 80,
        old_price: 140,
    },
    {
        id:26,
        name:"Guava",
        category:"fruits",
        image:p26_img,
        new_price: 80,
        old_price: 140,
    },
    {
        id:27,
        name:"Avocado",
        category:"fruits",
        image:p27_img,
        new_price: 80,
        old_price: 140,
    },
    {
        id:28,
        name:"Coconut",
        category:"fruits",
        image:p28_img,
        new_price: 80,
        old_price: 140,
    },
    {
        id:29,
        name:"Watermelon",
        category:"fruits",
        image:p29_img,
        new_price: 80,
        old_price: 140,
    },
    {
        id:30,
        name:"Pineapple",
        category:"fruits",
        image:p30_img,
        new_price: 80,
        old_price: 140,
    },
    {
        id:31,
        name:"Banana",
        category:"fruits",
        image:p31_img,
        new_price: 80,
        old_price: 140,
    },
    {
        id:32,
        name:"Orange",
        category:"fruits",
        image:p32_img,
        new_price: 80,
        old_price: 140,
    },



];
export default data_product;
