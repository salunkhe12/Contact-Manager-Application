import React from 'react'
import { Link } from 'react-router-dom'

const AddContact = () => {
  return (
    <div>
     <React.Fragment>
        <section className="add-contact">
          <div className="container p-3">
            <div className="row">
              <p className="text-success h4 fw-bold">Create Contact</p>
              <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex soluta quaerat esse praesentium
                                       laborum sint natus, aliquam commodi nam facere vero recusandae, molestias eos alias sequi
                                        similique aliquid, distinctio labore!</p>
            </div>
            <div className="row">
              <div className="col-md-4">
                <form action="">
                  {/* mb = margin bottom */}
                  <div className="mb-2"> 
                    <input type="text" placeholder='Name' className='form-control' />
                  </div>
                  <div className="mb-2">
                    <input type="text" placeholder='Photo url' className='form-control' />
                  </div>
                  <div className="mb-2">
                    <input type="number" placeholder='Mobile' className='form-control' />
                  </div>
                  <div className="mb-2">
                    <input type="email" placeholder='Email' className='form-control' />
                  </div>
                  <div className="mb-2">
                    <input type="text" placeholder='Company Name' className='form-control' />
                  </div>
                  <div className="mb-2">
                    <input type="text" placeholder='Title' className='form-control' />
                  </div>
                  <div className="mb-2">
                  <select name="" id="" className='form-control'>
                    <option value="">Select A Group</option>
                  </select>
                </div>

                  <div className="mb-2">
                  <input type="submit" className='btn btn-success' value="Create" />
                  <Link to={'/Contacts/list'} className='btn btn-danger ms-2'>Cancel</Link>
                </div>

                </form>
                
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    </div>
  )
}

export default AddContact
