import './Cards.css'

const Cards = () => {
  return (
    <div className='containerCard'>
      <div className='card'>
         <figure>
            <img className='Imagen' src="https://e1.pxfuel.com/desktop-wallpaper/635/94/desktop-wallpaper-anime-profile-girl-anime-profile-whatsapp.jpg" alt="anime" />
         </figure>
         <div className='contenido'>
            <h3>Contabilidad</h3>
            <p>n mollis rhoncus arcu eu ornare. In in pharetra justo, sit amet mattis ex. Sed in mattis est. Fusce at gravida velit. Ut id lacus sagittis quam hendrerit tincidunt. Duis suscipit nibh vitae dolor ullamcorper elementum.</p>
            <a href="#">Leer mas</a>
         </div>
      </div>
      <div className='card'>
         <figure>
            <img className='Imagen' src="https://img.freepik.com/fotos-premium/girl-with-pink-hair-and-white-shirt-is-walking-in-the-sunset_527675-302.jpg" alt="anime back" />
         </figure>
         <div className='contenido'>
            <h3>Administracion</h3>
            <p>n mollis rhoncus arcu eu ornare. In in pharetra justo, sit amet mattis ex. Sed in mattis est. Fusce at gravida velit. Ut id lacus sagittis quam hendrerit tincidunt. Duis suscipit nibh vitae dolor ullamcorper elementum.</p>
            <a href="#">Leer mas</a>
         </div>
      </div>
      
    </div>
  )
}

export default Cards
