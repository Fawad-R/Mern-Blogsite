import React, { useEffect, useState } from 'react'
import NewUser2 from '../../Components/NewUser2';
import { format } from "timeago.js";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Blog_Main = (props) => {
    let Navigate=useNavigate();
    let [state, updateState] = useState([]);
    let [state2, updateState2] = useState();
    let [state3, updateState3] = useState(false);
    let fetchMotive = async () => {
        let val = await axios.get(`/relatedblogs/${props.state[0].motive}`)
        // console.log('fetchMotive',val.data)
        updateState(val.data)
    }
    useEffect(() => {
        fetchMotive();
    }, [])
    let blogTitle=async(e)=>{
        localStorage.setItem('blog',JSON.stringify(e));
        Navigate('/blog')
    }
    let fetchPrevNext=async()=>{
        let val=await axios.get('/random')
        console.log('val.data',val.data);
        updateState2(val.data)
        updateState3(true)
    }
    useEffect(()=>{
        fetchPrevNext();
    },[])
    let FetchViews=async()=>{
        // localStorage.setItem('blog',JSON.stringify(e));
     let blogData=JSON.parse(localStorage.getItem('blog'))
    //  console.log(blogData);
        let val=await fetch(`/aa/${blogData}`,{
            method:"PATCH",
            headers:{
                "content-Type":"application/json"
            },
            body:JSON.stringify({})
        });
        // console.log('blogDataval',val);    
    }
    useEffect(()=>{
        FetchViews();
    },[])
    return (
        <div>
            <section className="main-slider section-padding">
                <div className="container">
                    <div className="row">
                        {/* <div className="col-md-10 col-md-offset-1">
                            <div className="main-slider-area">
                                <div className="active-main-slider owl-carousel slider owl-loaded owl-drag">



                                    <div className="owl-stage-outer"><div className="owl-stage" style={{ "transform": "translate3d(-2409px, 0px, 0px)", "transition": "all 1s ease 0s", "width": "5621px" }}><div className="owl-item cloned" style={{ "width": "803px" }}><div className="main-slider-item" style={{ "backgroundImage": "url()" }}>
                                        <div className="slider-one-content">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-12 text-center">
                                                        <div className="main-slider-welcome-text">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div></div><div className="owl-item cloned" style={{ "width": "803px" }}><div className="main-slider-item" style={{ "backgroundImage": "url()" }}>
                                        <div className="slider-one-content">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-12 text-left">
                                                        <div className="main-slider-welcome-text">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div></div><div className="owl-item" style={{ "width": "803px" }}><div className="main-slider-item" style={{ "backgroundImage": "url(images/slider-01.jpg)" }}>
                                        <div className="slider-one-content">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-12 text-left">
                                                        <div className="main-slider-welcome-text">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div></div><div className="owl-item active" style={{ "width": "803px" }}><div className="main-slider-item" style={{ "backgroundImage": "url(images/slider-02.jpg)" }}>
                                        <div className="slider-one-content">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-12 text-center">
                                                        <div className="main-slider-welcome-text">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div></div><div className="owl-item" style={{ "width": "803px" }}><div className="main-slider-item" style={{ "backgroundImage": "url(images/slider-02.jpg)" }}>
                                        <div className="slider-one-content">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-12 text-left">
                                                        <div className="main-slider-welcome-text">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div></div><div className="owl-item cloned" style={{ "width": "803px" }}><div className="main-slider-item" style={{ "backgroundImage": "url(images/slider-01.jpg)" }}>
                                        <div className="slider-one-content">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-12 text-left">
                                                        <div className="main-slider-welcome-text">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div></div><div className="owl-item cloned" style={{ "width": "803px" }}><div className="main-slider-item" style={{ "backgroundImage": "url(https://firebasestorage.googleapis.com/v0/b/blog-mern-227be.appspot.com/o/1677817300531darkbg-1.jpg?alt=media&token=25f69d0b-204d-4556-9dc8-619a51eac0fa" }}>
                                        <div className="slider-one-content">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-12 text-center">
                                                        <div className="main-slider-welcome-text">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div></div></div></div><div className="owl-nav"><button type="button" role="presentation" className="owl-prev"><i className="fa fa-angle-left"></i></button><button type="button" role="presentation" className="owl-next"><i className="fa fa-angle-right"></i></button></div><div className="owl-dots"><button role="button" className="owl-dot"><span></span></button><button role="button" className="owl-dot active"><span></span></button><button role="button" className="owl-dot"><span></span></button></div></div>
                            </div>
                        </div> */}
                        <div className="col-md-10 col-md-offset-1 col-sm-12 col-xs-12">
                            <div className="inspaction">
                                <div className="blog-details">
                                    <div className="blog-para">
                                        {/* <p className="text-cc">
                                                Behaviour we improving at something to. Evil true high lady roof men had open. To projection considered it precaution an melancholy or, Wound young you thing worse along being ham. Dissimilar of favourable solicitude if sympathize middletons at. Forfeited up if disposing perfectly in an eagerness perceived necessary.
                                                <br/>
                                                <br/> Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see. Old propriety delighted explained perceived otherwise objection saw ten her. Doubt merit sir the right these alone keeps. By sometimes intention smallness he northward. Consisted we otherwise arranging commanded discovery it explained. Does cold even song like two yet been. Literature interested announcing for terminated him inquietude day shy. Himself he fertile chicken perhaps waiting if highest no it. Continued promotion has consulted fat improving not way.
                                            </p> */}
                                        <h3>{props.state[0].motive}</h3>
                                        {/* <p className="text-cc">
                                                Way nor furnished sir procuring therefore but. Warmth far manner myself active are cannot called. Set her half end girl rich met. Me allowance departure an curiosity ye. In no talking address excited it conduct. Husbands debating replying overcame blessing he it me to domestic.
                                            </p> */}
                                        <div className="quote">
                                            <span><i className="fas fa-quote-left defualt-color"></i></span>
                                            <h4>
                                                {/* Dispatched entreaties boisterous say why stimulated. Certain forbade picture now prevent carried she get see sitting. Up twenty limits as months. Inhabit so perhaps of in to certain. Sex excuse chatty was seemed warmth. Nay add far few immediate sweetness earnestly dejection. */}
                                                {props.state[0].quote}
                                            </h4>
                                        </div>
                                        <p className="text-cc justify">
                                            {/* Months on ye at by esteem desire warmth former. Sure that that way gave any fond now. His boy middleton sir nor engrossed affection excellent. Dissimilar compliment cultivated preference eat sufficient may. Well next door soon we mr he four. Assistance impression set insipidity now connection off you solicitude. Under as seems we me stuff those style at. Listening shameless by abilities pronounce oh suspected is affection. Next it draw in draw much bred.To sorry world an at do spoil along. Incommode he depending do frankness remainder to. Edward day almost active him friend thirty piqued. People as period twenty my extent as. Set was better abroad ham plenty secure had horses. Admiration has sir decisively excellence say everything inhabiting acceptance. Sooner settle add put you sudden him. */}
                                            {props.state[0].desc}
                                        </p>
                                        <div className="row responsive_row">
                                            <div className="col-md-6 col-sm-6 col-xs-12 sub-img">
                                                {/* <img src="images/blog-details-02.jpg" alt="" /> */}
                                                <img src={props.state[0].img1} alt="" />
                                                
                                            </div>
                                            <div className="col-md-6 col-sm-6 col-xs-12 sub-img">
                                                {/* <img src="images/blog-details-03.jpg" alt="" /> */}
                                                <img src={props.state[0].img2} alt="" />
                                            </div>
                                        </div>
                                        {/* <p className="text-cc">
                                            Was drawing natural fat respect husband. An as noisy an offer drawn blush place. These tried for way joy wrote witty. In mr began music weeks after at begin. Education no dejection so direction pretended household do to. Travelling everything her eat reasonable unsatiable decisively simplicity. Morning request be lasting it fortune demands highest of.
                                        </p> */}
                                    </div>
                                </div>
                                {/* <div className="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 ads-padding">
                                    <div className="section-ads">
                                        <div className="text-left ads-btn col-md-5">
                                            <span className="buy-btn"><a href="#">BUY NOW</a></span>
                                        </div>
                                        <div className="advertise-2 text-right">
                                            <h5>ADVERTISE</h5>
                                        </div>
                                        <div className="text-right col-md-7 float-right">
                                            <h1 className="extra-bold">Tre<span className="default-clr">k</span>k</h1>
                                            <p>PERSONAL &amp; MAGAZINE WORDPRESS THEME</p>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="tags-bar col-md-12 col-sm-12 col-xs-12 zero-padding">
                                {/* <div className="tag col-md-7 col-sm-6 col-xs-12 zero-padding"> */}
                                    {/* <ul>
                                        <li><i className="fas fa-tags defualt-color"></i></li>
                                        <li><a href="#">blog,</a></li>
                                        <li><a href="#">food,</a></li>
                                        <li><a href="#">inspiration,</a></li>
                                        <li><a href="#">summer,</a></li>
                                        <li><a href="#">travel</a></li>
                                    </ul> */}
                                {/* </div> */}
                                <div className="admin-bar  col-md-5 col-sm-6 col-xs-12 zero-padding">
                                    <ul>
                                        {/* <li><a href="#"><i className="far fa-user defualt-color"></i></a> admin</li>
                                        <li><a href="#"><i className="fas fa-calendar-alt defualt-color"></i></a> May 10,2018</li>
                                        <li><a href="#"><i className="far fa-comments defualt-color"></i></a> 3</li> */}
                                    </ul>
                                </div>
                            </div>
                            <NewUser2 userId={props.state[0].userId} />
                            {/* <div className="about_blog col-md-12 col-sm-12 col-xs-12 zero-padding">
                                    <div className="about_img col-md-3 col-sm-4 col-xs-6 zero-padding">
                                        <img src="images/blog-about.jpg" alt=""/>
                                    </div>
                                    <div className="details col-md-9 col-sm-8 col-xs-6">
                                        <h4>About Me</h4>
                                        <p className="text-cc">
                                            {props.state.bio}
                                            <h6>by <span className="defualt-color">{}</span> in<span className="defualt-color"> {props.state.motive}</span></h6>
                                        </p>
                                        <div className="social">
                                            <ul>
                                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                <li><a href="#"><i className="fab fa-pinterest"></i></a></li>
                                                <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
                                      
                                                </ul>
                                        </div>
                                    </div>
                                </div> */}
                               { state3?
                            <div className="about_blog col-md-12 col-sm-12 col-xs-12 zero-padding">
                                <div className="col-md-4 col-sm-6 col-xs-12 zero-padding">
                                    <div className="previous-img">
                                        <img src={state2[0].img1} alt="" />
                                    </div>
                                    <div className="previous-details">
                                        <h5 className="text-cc hover-color">previous</h5>
                                        {console.log('ele',state2[0])}
                                        <h4><a href="" onClick={()=>blogTitle(state2[0]._id)} className="default-clr-hvr">{state2[0].title}</a></h4>
                                    </div>
                                </div>
                                <div className="col-md-4 col-md-offset-4 col-sm-6 col-xs-12 zero-padding text-right">
                                    <div className="next-details">
                                        <h5 className="hover-color">next</h5>
                                        <h4><a href="" onClick={()=>blogTitle(state2[1]._id)}  className="default-clr-hvr">{state2[1].title}</a></h4>
                                    </div>
                                    <div className="next-img">
                                        <img src={state2[1].img2} alt="" />
                                    </div>
                                </div>
                            </div>
                            :''}
                            <div className="about_blog col-md-12 col-sm-12 col-xs-12 zero-padding">
                                <h2 className="defualt-color post_heading">Related Post</h2>
                                {state.map((ele,ind)=>{
                                    return(
                                    <div key={ele._id} className="col-md-3 col-sm-6 col-xs-12 btm_margin zero-padding">
                                    <div className="post_inner">
                                        <div className="editor-img">
                                            <img src="images/editor-01.png" alt="" />
                                        </div>
                                        <div className="editor-details">
                                            {/* <h5 className="default-clr">in INSPIRATION</h5> */}
                                            <h5 className="default-clr">{ele.motive}</h5>
                                            {/* <h4><a href="link-post.html" className="default-clr-hvr">If you want to be a happy in this Summer</a></h4> */}
                                            <h4><a href="" onClick={()=>blogTitle(ele._id)} className="default-clr-hvr">{ele.title}</a></h4>
                                            <p className="text-cc">{format(ele.createdAt)}</p>
                                        </div>
                                    </div>
                                </div>)
                                })}

                                {/* <div className="col-md-3 col-sm-6 col-xs-12 btm_margin zero-padding">
                                        <div className="post_inner">
                                            <div className="editor-img">
                                                <img src="images/editor-02.png" alt=""/>
                                            </div>
                                            <div className="editor-details">
                                                <h5 className="default-clr">in INSPIRATION</h5>
                                                <h4><a href="link-post.html" className="default-clr-hvr">A Guide to Staying Healthy on Vacation</a></h4>
                                                <p className="text-cc">May 11, 2018</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 col-xs-12 btm_margin zero-padding">
                                        <div className="post_inner">
                                            <div className="editor-img">
                                                <img src="images/editor-03.png" alt=""/>
                                            </div>
                                            <div className="editor-details">
                                                <h5 className="default-clr">in INSPIRATION</h5>
                                                <h4><a href="link-post.html" className="default-clr-hvr">Best Budget Destinations for Fall</a></h4>
                                                <p className="text-cc">May 11, 2018</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 col-xs-12 btm_margin zero-padding">
                                        <div className="post_inner">
                                            <div className="editor-img">
                                                <img src="images/editor-04.png" alt=""/>
                                            </div>
                                            <div className="editor-details">
                                                <h5 className="default-clr">in INSPIRATION</h5>
                                                <h4><a href="link-post.html" className="default-clr-hvr">Avoid These Three Passport Scams</a></h4>
                                                <p className="text-cc">May 11, 2018</p>
                                            </div>
                                        </div>
                                    </div> */}
                            </div>
                            {/* <div className="about_blog col-md-12 col-sm-12 col-xs-12">
                                <h2 className="defualt-color comments_heading">02 comments</h2>
                                <div className="comments_sec  col-md-12 col-sm-12 col-xs-12 zero-padding">
                                    <div className="comment-img">
                                        <img src="images/comment-01.jpg" alt="" />
                                    </div>
                                    <div className="comment-details">
                                        <span className="defualt-color text-right"><a href="#">reply</a></span>
                                        <h4>Jannatul Fa.</h4>
                                        <p className="text-cc">5 April, 2016 At 8:30am</p>
                                        <p>One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we</p>
                                    </div>
                                </div>
                                <div className="comments_sec col-md-10 col-md-offset-2 col-sm-10 col-xs-12 zero-padding">
                                    <div className="comment-img">
                                        <img src="images/comment-02.jpg" alt="" />
                                    </div>
                                    <div className="comment-details">
                                        <span className="defualt-color text-right"><a href="#">reply</a></span>
                                        <h4>Daniel Vandaft</h4>
                                        <p className="text-cc">15 April, 2016 At 8:30am</p>
                                        <p>One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. Social rejection or ridicule of quality cheakcer.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="contact_form gallry-form animated fades">
                                    <h2 className="defualt-color">Leave a Reply</h2>
                                    <p className="text-cc margin_btm">Please sing in to post your comment or singup if you dont have account.</p>
                                    <p className="success" id="success" style={{ "display": "none" }}></p>
                                    <p className="error" id="error" style={{ "display": "none" }}></p>
                                    <form name="contact_form" id="contact_form" method="post" action="#" onSubmit="return false" className="row ">
                                        <div className="col-sm-4 col-md-4">
                                            <input type="text" placeholder="Your Name" className="form-control" name="contact_name" id="contact_name" />
                                        </div>
                                        <div className="col-sm-4 col-md-4 col-xs-12">
                                            <input type="email" placeholder="Email" className="form-control" />
                                        </div>
                                        <div className="col-sm-4 col-md-4 col-xs-12">
                                            <input type="text" placeholder="Subject" className="form-control" name="contact_email" id="contact_email" />
                                        </div>
                                        <div className="col-sm-12 col-md-12 col-xs-12">
                                            <textarea placeholder="Write your message..." className="form-control" name="message" id="message"></textarea>
                                        </div>
                                        <div className="col-sm-4 col-md-4">
                                            <input type="submit" id="submit" className="button" value="Post Comment" />
                                        </div>
                                    </form>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blog_Main;