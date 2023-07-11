import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { format } from 'timeago.js';
import User from '../Components/NewUser';
const About = () => {
    let Navigate = useNavigate()
    let getEmail = JSON.parse(localStorage.getItem('user'));
    let [state, updateState] = useState();
    let [state1, updateState1] = useState();
    let [state2, updateState2] = useState(false);
    let [state3, updateState3] = useState(false);
    // let [state4, updateState4] = useState();
    let fetchAbout = async () => {
        try {
            let val = await axios.get(`/userE/userE/${getEmail}`);
            if(val.status===200)
            {
                // console.log(val.data);
                updateState(val.data)
                updateState2(true)
            }
            else
            {
                alert('please login first to proceed further!!!')
                Navigate('/login') 
            }
        } catch (error) {
            alert('please login first to proceed further!!!')
             Navigate('/login') 
        }

        // let val2 = await axios.get(`/blogs/${val.data._id}`);
        // console.log('val2',val2.data.length);
        // console.log('getBlogval', val2.data[0]);
        // updateState1(val2.data[0]);
    }
    useEffect(() => {
        fetchAbout();
    }, [])
    // console.log('state1', state1)
    //   let [state1,updateState1]=useState()
    //   let [state2,updateState2]=useState(false)
    //   let getBlog=JSON.parse(localStorage.getItem('user'));
    //   console.log('getBlog',getBlog)
    let fetchBlog = async () => {
        let val = await axios.get(`/blogs/${state._id}`);
        // console.log('getBlogval', val);
        if (val.data.length !== 0) {
            updateState1(val.data[0])
            updateState3(true);
        }
    }
    useEffect(() => {
        fetchBlog()
    }, [state])

    // state2
    let blogTitle = async (e) => {
        localStorage.setItem('blog', JSON.stringify(e));
        Navigate('/blog')
    }
    return (
        <div>
            <div className="container">
                <div className="about-img">
                </div>
                {state2 ?
                    <div>
                        <section className="about-section-2">
                {/* <div className="" style={{"backgroundImage": `url(${state.img})`,  "width": "100%",
    "overflow": "hidden",
    "height": "750px",
    "backgroundRepeat": "no-repeat",
    "backgroundSize": "100% auto",
    "backgroundPosition": "center"}}>
                    </div> */}
                <div className="container">
                    <div className="row">
                        <div className="section-padding">
                            <div className="col-md-7 about-details about-2 text-left">
                                <div className="about-title">
                                    <h1 className="roboto about-2-heading">About Us</h1>
                                </div>
                                <div className="about-details about-2">
                                    <p className="text-cc roboto">
                                        {state.bio}
                                        <br />
                                        <br />
                                    </p>
                                </div>
                                <div className="about-details-2">
                                    <div className="text-cc roboto">
                                        {/* <h3 >Name: {state.name}</h3>
                                        <h3 >Email: {state.email}</h3>
                                        <h3 >Joined: {format(state.createdAt)}</h3> */}

                                    </div>
                                    <p className="text-cc roboto">
                                        {/* Faucibus pellentesque, mi mi tempor enim, sit amet interdum felis nibh a leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt. Nunc ultrices hendrerit libero vel malesuada. Nulla facilisi. Quisque eu placerat augue, sed vestibulum leo. Etiam turpis metus, dignissim tincidunt pharetra ultricies, lobortis at ligula */}
                                        My name is <strong> {state.name}</strong> and i have joined this platform <strong> {format(state.createdAt)} </strong> you can follow me @ <strong> {state.email}</strong>
                                    </p>
                                    {/* <div className="about_btn">
                                        <span className="more_btn"><a href="#">Learn More About</a></span>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-md-5 col-md-offset-0 col-sm-8 col-sm-offset-2 col-xs-12">
                                <div className="about-img-box">
                                    {/* <img src="images/about/about-2.jpg" alt=""/> */}
                                    {/* width: 100%;
    height: 400px; */}
                                    <img style={{"border":"2px solid"}} src={state.img} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                        {/* <div className="about-details text-center">

                            <div className="about-title">
                                <h1 className="roboto">About Me</h1>
                            </div>
                            <div className="about-details">
                                <p className="text-cc roboto">
                                    {state.bio}
                                    <br />
                                    <br />
                                </p>
                            </div>
                        </div> */}
                        {/* <img style={{"textAlign":'center'}} src="images/about/min-01.jpg" alt=""/> */}
                        {/* <div className="about-min-post">
                            <div className="col-md-3 col-sm-9 col-xs-9">
                            <img src={state.img} alt=""/>
                            </div>
                            <div style={{"textAlign":"center","margin":"auto"}} className="col-md-3 col-sm-9 col-xs-9">
                                <img src={state.img} alt="" />
                                
                            </div>
                            <div style={{"textAlign":"center","margin":"auto"}} className="col-md-3 col-sm-9 col-xs-9">
                                <img src={state.img} alt="" />
                                
                            </div>
                            <div className="col-md-3 col-sm-3 col-xs-3">
                                <img src={state.img} alt="" />
                                
                            </div>
                        </div> */}
                        {/* <div className="clearfix"></div> */}
                        {/* <div className="min-details-1 text-center roboto" style={{}}>
                            <p className="text-cc">
                                <strong style={{ "fontWeight": "bold", "color": "" }}>Name:</strong> {state.name}</p>
                            <p className="text-cc"> <strong style={{ "fontWeight": "bold" }}>Email:</strong> {state.email}

                                <br />
                                <strong style={{ "fontWeight": "bold" }}>joined:</strong> {format(state.createdAt)}</p>
                        </div> */}
                    </div>
                    : ''
                }
                {state3 ?
                    <div className="min-details-1 text-center roboto">
                        <p className="text-cc"> <strong style={{ "fontWeight": "bold" }}>My Latest Post:</strong>
                            <br />
                            {/* {format(state.createdAt)} */}
                        </p>
                        <div>
                            {/* state2? */}
                            {/* <p className="text-cc"> */}
                            {/* <br/>Quisque eu placerat augue, sed vestibulum leo. Faucibus pellentesque, mi mi tempor enim, sit amet interdum felis nibh a leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit Proin tincidunt Nunc ultrices hendrerit libero vel malesuada. Quisque eu placerat augue, sed vestibulum leo. Etiam turpis metus, dignissim tincidunt pharetra ultricies, lobortis at ligula.</p> */}
                            {/* <br/>  */}
                            {/* <strong style={{ "fontWeight": "bold" }}>Name:</strong> {state.name}</p> */}

                            <div><div className="text-cc col-md-12 col-sm-6 col-xs-12 btm-padding">
                                <div className="img-box">
                                    {/* <img src="images/rel-post-07.jpg" alt="" /> */}
                                    <img src={state1.img1} alt="" />
                                </div>
                                <div className="post-details col-md-6 col-sm-4 col-xs-4 zero-padding">
                                    <h6 className="default-clr">{state1.motive}</h6>

                                </div>
                                <div className="col-md-6 col-sm-8 col-xs-8 zero-padding">
                                    <div className="social text-right blog-min">
                                        <ul>
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fab fa-pinterest"></i></a></li>
                                            <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="post_response min-post">
                                    <div className="col-md-12 col-sm-12 col-xs-12 zero-padding text-left">
                                        {/* <h4><a href={`//blog/${ele._id}`} className="default-clr-hvr">{ele.title}</a></h4> */}
                                        <h4><a href='' onClick={() => blogTitle(state1._id)} className="default-clr-hvr">{state1.title}</a></h4>
                                    </div>
                                    <ul className="col-md-12 col-sm-12 col-xs-12 zero-padding text-left">
                                        <li><a href="#"><i className="fas fa-eye"></i></a>{state1.view}</li>
                                        {/* <li><a href={`/blog/${ele._id}`}><i className="far fa-user"></i></a> <User userId={ele.userId} /></li> */}
                                        <li><a href=''><i className=""></i></a> <User userId={state1.userId} /></li>
                                        <li><a href="#"><i className="fas fa-calendar-alt"></i></a>{format(state1.createdAt)}</li>
                                    </ul>
                                    <h6 className="col-md-12 col-sm-12 col-xs-12 zero-padding text-left"></h6>
                                </div>
                            </div></div>
                        </div>

                    </div>
                    : ''
                }
            </div>

        </div>
    )
}

export default About