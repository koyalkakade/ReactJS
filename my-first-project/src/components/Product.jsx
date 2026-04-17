
import Button from './Button'
import './Product.css'
import iPhone17 from '../assets/apple17.webp'


function Product(){
    return(
        <>
    <section>
      <h2 className='productHeading'>iPhone 17 Pro Max</h2>
      <p className='paraDef'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores inventore rem voluptatem fuga. Facere maxime porro impedit neque enim, necessitatibus fugiat omnis reiciendis ipsum commodi eos quos ea illum sequi.</p>
      <img src={iPhone17} alt="17Image" className='phoneImg'/>
      {/* <button >Buy Now</button> */}
      <Button text123="Buy Now" />
    </section>
        </>
    )
}



export default Product