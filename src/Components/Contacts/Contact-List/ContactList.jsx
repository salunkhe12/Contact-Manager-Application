import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ContactService } from '../../../Services/ContactServices/ContactService'
import Spinner from '../../Spinner/Spinner'


const ContactList = () => {
    let [state, setstate] = useState({loading:false,contacts:[], errorMessage:""})
    useEffect(()=>{
        let promises = new Promise((res, rej)=>{
            setstate({...state, loading:true})
            let response = ContactService.getAllContacts()
               res(response)
               rej("error")
        })
        promises.then((res)=>{
            
           
            console.log(res.data);
            setstate({...state, loading:false, contacts:res.data})
        }).catch(()=>{
            alert("error while fetching data !!!!")
            setstate({...state, loading:false, errorMessage:"error message !!!!"})
        })
    }, [])
    let {loading, contacts, errorMessage} = state
  return (
    <div>
     <React.Fragment>
        {/* <pre>{JSON.stringify(contacts)}</pre> */}
        <section className='contact-search p-3'>
            <div className="container">
                <div className='grid'>
                    <div className='row'>
                        <p className='h3'>Contact Manager <Link to = {'/Contacts/add'}  > <button className='btn btn-primary '><i className='fa fa-plus-circle me-2'/>New</button></Link></p>
                        <p className='fst-italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique 
                         officia hic in eius illum ducimus facere voluptatibus? Laborum natus elit. Similique dbbvd 
                         rem aliquam harum, voluptate, eaque, et aspernatur debitis architecto iusto quae ducimus quisquam voluptas
                        quibusdam rem aliquam harum, voluptate, eaque, et aspernatur debitis architecto iusto quae ducimus
                        rem aliquam harum, voluptate, eaque, et?</p>
                    </div>
                    <div className='row'>
                        <div className="col-md-6">
                            <form action="" className="row">
                                <div className="col">
                                  <div className="col mb-2">
                                    <input type="text" placeholder='search names' className='form-control' />
                                  </div>
                                </div>
                                <div className="col">
                                  <div className="mb-2">
                                    <input type="submit" className='btn btn-outline-dark' value="search" />
                                  </div>
                                </div>
                            </form>
                        </div>
                    </div>
                 </div>
                </div>
        </section>
        {
            loading?<Spinner/>:<React.Fragment>
                <section className = 'contact-card'>
            <div className="container">
                <div className="row">
                {
                    contacts.length>0 &&
                    contacts.map((contact)=>{
                        return(

                            <div className="col-md-6">
                    <div className="card my-2">
                        <div className="card-body">
                            <div className="row d-flex align-item-center">
                                <div className="col-md-4">
                                    <img src="data:image/jpeg;base64,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"  
                                         className='profile-img' alt="" />

                                </div>
                                <div className="col-md-7">
                                    <ul className='list-group'>
                                        <li className="list-group-item list-group-item-action">Name : <span className="fw-bold">{contact.name}</span></li>
                                        <li className="list-group-item list-group-item-action">Contact : <span className="fw-bold">{contact.mobile}</span></li>
                                        <li className="list-group-item list-group-item-action">Email : <span className="fw-bold">{contact.email}</span></li>
                                    </ul>
                                </div>
                                <div className="col-md-1 d-flex flex-column align-item-center p-1">
                                    <Link to={`/Contacts/view/${contact.id}`} className="btn btn-warning my-1"><i className="fa fa-eye my-1"></i></Link>
                                    <Link to={'/Contacts/edit/:contactId'} className="btn btn-primary my-1"><i className="fa fa-pen my-1"></i></Link>
                                    <button className="btn btn-danger"><i className="fa fa-trash my-1"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                        )
                    })
                }                    

                  
                </div>
            </div>
        </section>

            </React.Fragment>
        }
        
     </React.Fragment>
    </div>
  )
}

export default ContactList
