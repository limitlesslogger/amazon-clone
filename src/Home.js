import React from 'react';
import './Home.css';
import pic from './amzn.png'
import Product from './Product';
import product1 from './b1.jpeg';
import product2 from './product2.jpeg';
import product3 from './product3.jpeg';
import product4 from './product4.webp';
import product5 from './product5.png';
import product6 from './product6.webp';
import product7 from './product7.jpeg'
function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <div className='img__container'>
            <img 
                className='home__image'
                src={pic}
                alt='offer'
            />
            </div>
            {/*First product row with 2 products */}
             <div className='home__row'>
                <Product 
                id="12321341"
                title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                price={1200}
                image={product1}
                rating={5}/>
                <Product 
                id="49538094"
                title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                price={55000}
                rating={3}
                image={product2}/>
            </div>
            {/*Second product row with 3 products */}
            <div className='home__row'>
                <Product 
                id="4903850"
                title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                price={45000}
                rating={4}
                image={product3}
                />
                <Product 
                 id="23445930"
                title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                price={25000}
                rating={3}
                image={product4}
                />
                <Product 
                id="3254354345"
                title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                price={120000}
                rating={5}
                image={product5}
                />
            </div>
            {/*Third product row with 1 products */}
            <div className='home__row'>
                <Product 
                id="90829332"
                title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                price={75000}
                rating={4}
                image={product6}
                />
                <Product
                id="99899999"
                title='APPLE 2022 MacBook AIR M2 - (8 GB/256 GB SSD/Mac OS Monterey) MLY33HN/A  (13.6 Inch, Midnight, 1.24 Kg)'
                image={product7}
                price={86990}
                rating={5}
                />
            </div> 
        </div>
    </div>
  )
}

export default Home



