import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js"
const Contact = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div>
          <h2 className="text-center mb-5 shadow-sm p-3">Contact Us</h2>
        </div>

        <form action="">
          <div className="row">
            <div className="col-md-7 shadow rounded p-5">
              <div className="row">

                <div className="col mb-3">
                  <label className='form-label'>First Name</label>
                  <input type="text" className='form-control' placeholder='First Name'/>
                </div>
                <div className="col mb-3">
                  <label className='form-label'>Last Name</label>
                  <input type="text" className='form-control' placeholder='Last Name'/>
                </div>

              </div>

              <div className="mb-3">
                <label className='form-label'>Email:</label>
                <input type="text" className='form-control' placeholder='xyz@gmail.com'/>
              </div>
              <div className="mb-3">
                <label className='form-label'>Address</label>
                <input type="text" className='form-control' placeholder='Address'/>
              </div>

              <div className="row">

                <div className="col mb-3">
                  <label className='form-label'>Pin Code</label>
                  <input type="text" className='form-control' placeholder='145896'/>
                </div>
                <div className="col mb-3">
                  <label className='form-label'>Mobile Number</label>
                  <input type="text" className='form-control' placeholder='123456789'/>
                </div>

              </div>

              <div className="mb-3">
                <label className='form-label'>Message</label>
                <textarea name='' className='form-control' row='3' placeholder='Write Message'/>
              </div>
              

              <div className="row">

              <button type="button" class="col mb-3 btn btn-outline-success" >
              Submit
            </button>
            <button type="button" class="col mb-3  btn btn-outline-danger" >
              reset
            </button>

              </div>
              
            </div>

            <div className="col-md-5">
              <div className='ml-5'>
                <img src={require('../assets/c.jpg')}  alt="Image" className='img-fulid' />
              </div>
            </div>

            
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
