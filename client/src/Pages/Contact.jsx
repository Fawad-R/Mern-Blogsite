import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    let Navigate=useNavigate()
    let [state3,updateState3]=useState();
    let inputContact=(e)=>{
        updateState3({...state3,[e.target.name]:e.target.value})
    }
    let ContactUs=async(e)=>{
        e.preventDefault();
        let val=await fetch('/contactUs',{
            "method":"POST",
            "headers":{
                "content-Type":"application/json"
            },
            body:JSON.stringify(state3)
        })
        // console.log(val);
        if (val.status===200) {
            alert('Message has been sent sucessfully')
            Navigate('/')
        }
        else
        {
            alert('Error! please try again later')
            Navigate('/')
        }
    }
  return (
    <div className='Contact'>    <section className="BgImage"></section>
    <div className="row no-gutters" style={{"marginLeft":"2%"}}>
            <div className="col-md-7">
                <div className="contact-wrap w-100 p-md-5 p-4">
                    <h3 className="mb-4">Contact Us</h3>
                    <div id="form-message-warning" className="mb-4"></div>
                    <div id="form-message-success" className="mb-4">
                        {/* Your message was sent, thank you! */}
                    </div>
                    <form method="POST" id="contactForm" name="contactForm" className="contactForm">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="label" htmlFor="name">Full Name</label>
                                    <input onChange={inputContact} type="text" className="form-control" name="name" id="name"
                                        placeholder="Name"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="label" htmlFor="email">Email Address</label>
                                    <input onChange={inputContact} type="email" className="form-control" name="email" id="email"
                                        placeholder="Email"/>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label className="label" htmlFor="subject">Subject</label>
                                    <input onChange={inputContact} type="text" className="form-control" name="subject" id="subject"
                                        placeholder="Subject"/>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label className="label" htmlFor="#">Message</label>
                                    <textarea onChange={inputContact} name="message" className="form-control" id="message" cols="30"
                                        rows="4" placeholder="Message"></textarea>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                
                                    <input type="submit" onClick={ContactUs} style={{"padding":"3px","backgroundColor":"lightGrey"}}  value="Send Message" id="SendMessage" className="btn btn-primary"/>
                                    <div className="submitting"></div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-md-5 d-flex align-items-stretch">
                {/* <div className="info-wrap w-100 p-5 img" style={{"backgroundImage": `${Data[0].img}` }}>
                </div> */}
            </div>
        </div>
    {/* <section className="news section-padding">
        <div className="container">
            <div className="row">

                <h2 className="text-center mb-lg-5 mb-4">Trending</h2>
                {
                    Data2.map((ele, ind) => { 
                        return (
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="news-thumb mb-4">
                                    <NavLink to={`/SingleProduct/${ele._id}`}>
                                        <img src={ele.img} className="img-fluid news-image" alt="" />
                                    </NavLink>

                                    <div className="news-text-info news-text-info-large">
                                        <NavLink to={`/SingleProduct/${ele._id}`}className="category-tag bg-danger btn-product btn-quickview" title="Quick view"><span>quick view</span></NavLink>

                                        <h5 className="news-title mt-2">
                                        <NavLink to={`/SingleProduct/${ele._id}`} className="news-title-link">{ele.title}</NavLink>
                                        </h5>
                                    </div>
                                </div>
                            </div>)
                    })}

            </div>
        </div>
    </section> */}
</div>
  )
}
// }
export default Contact;