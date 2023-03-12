import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js"

const About = () => {
  return (
    <div className="container-fluid">
      <div className="container">

        <div>
          <h2 className="text-center mb-5 shadow-sm p-3">About US</h2>
        </div>

        <div className='d-flex' style={{gap:"120px"}}>
          <div className="mt-5 shadow col-md-4 " style={{ height: '70vh', border: "20px solid rgb(255, 187, 60)" }}>
            <img src={require('../assets/u.png')} alt="Image" className="img-thumbnail" style={{borderRadius:'350px', position: 'relative', left: "130px", top: '15px' }} />
          </div>


          <div className="col-md-6 ms-2 mt-5 rounded">
            <h2 className='text-center mt-4'>Hello !!!</h2>
            <p className='m-1 p-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio optio doloribus beatae aspernatur corporis sequi ut nobis autem tenetur at dolores quis unde aperiam corrupti repellat vero rem reiciendis omnis, saepe repudiandae blanditiis nulla. Molestias sit corporis eaque perferendis quas!</p>
            <p className='m-1 p-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio optio doloribus beatae aspernatur corporis sequi ut nobis autem tenetur at dolores quis unde aperiam corrupti repellat vero rem reiciendis omnis, saepe repudiandae blanditiis nulla. Molestias sit corporis eaque perferendis quas!</p>
            <p className='m-1 p-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio optio doloribus beatae aspernatur corporis sequi ut nobis autem tenetur at dolores quis unde aperiam corrupti repellat vero rem reiciendis omnis, saepe repudiandae blanditiis nulla. Molestias sit corporis eaque perferendis quas!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
