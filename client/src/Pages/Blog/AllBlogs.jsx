import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Newsletter from '../../Components/Newsletter'
import RecentPost from '../../Components/RecentPost';

const AllBlogs = () => {
    let [state,updateState]=useState([])
    let Navigate=useNavigate()
    let fetchBlogs=async()=>{
        let val=await axios.get('/blogsss');
        // console.log(val.data);
        updateState(val.data)
    }
    useEffect(()=>{
        fetchBlogs()
    },[])
    let blogTitle=(e)=>{
        localStorage.setItem('blog',JSON.stringify(e));
        Navigate('/blog')
    }
  return (
    <div><div className="gallery-section">
    <div className="container">
        <div className="row">
            <div className="col-md-3 col-md-offset-0 col-sm-8 col-sm-offset-2 col-xs-12">
                <div className="recent-post">
                    <h3>Recent posts</h3>
                    <RecentPost query={'recent'} />
                    {/* <div className="border-line"></div> */}
                </div>
                {/* <Newsletter/> */}
            </div>
            <div className="col-md-9 col-sm-12 col-xs-12 gallery-left text-center">
                <h3>Blogs</h3>
                <div className="row">
                {state.map((ele,ind)=>{
                   return( 
                    <div key={ele._id} className="col-md-4 col-sm-6 col-xs-12 btm-margin transition">
                        {/* <img src="images/gallery/gallery_01.jpg" alt=""/> */}
                        <img style={{"height":"180px","width":"220px"}} src={ele.img1} alt=""/>
                        <div className="gallery_overlay">
                            {/* <h6><a className="venobox vbox-item" data-gall="myGallery" href="images/gallery/gallery_01.jpg">Carry Your Style Everywhere!</a></h6> */}
                            <h6><a className="venobox vbox-item"  data-gall="myGallery" href=""  onClick={()=>blogTitle(ele._id)} >{ele.title}</a></h6>
                        </div>
                    </div>)
                    })}
                    {/* <div className="col-md-4 col-sm-6 col-xs-12 btm-margin transition">
                        <img src="images/gallery/gallery_02.jpg" alt=""/>
                        <div className="gallery_overlay">
                            <h6><a className="venobox vbox-item" data-gall="myGallery" href="images/gallery/gallery_02.jpg">Carry Your Style Everywhere!</a></h6>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12 btm-margin transition">
                        <img src="images/gallery/gallery_03.jpg" alt=""/>
                        <div className="gallery_overlay">
                            <h6><a className="venobox vbox-item" data-gall="myGallery" href="images/gallery/gallery_03.jpg">Carry Your Style Everywhere!</a></h6>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12 btm-margin transition">
                        <img src="images/gallery/gallery_04.jpg" alt=""/>
                        <div className="gallery_overlay">
                            <h6><a className="venobox vbox-item" data-gall="myGallery" href="images/gallery/gallery_04.jpg">Carry Your Style Everywhere!</a></h6>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12 btm-margin transition">
                        <img src="images/gallery/gallery_05.jpg" alt=""/>
                        <div className="gallery_overlay">
                            <h6><a className="venobox vbox-item" data-gall="myGallery" href="images/gallery/gallery_05.jpg">Carry Your Style Everywhere!</a></h6>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12 btm-margin transition">
                        <img src="images/gallery/gallery_06.jpg" alt=""/>
                        <div className="gallery_overlay">
                            <h6><a className="venobox vbox-item" data-gall="myGallery" href="images/gallery/gallery_06.jpg">Carry Your Style Everywhere!</a></h6>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12 btm-margin transition">
                        <img src="images/gallery/gallery_07.jpg" alt=""/>
                        <div className="gallery_overlay">
                            <h6><a className="venobox vbox-item" data-gall="myGallery" href="images/gallery/gallery_07.jpg">Carry Your Style Everywhere!</a></h6>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12 btm-margin transition">
                        <img src="images/gallery/gallery_08.jpg" alt=""/>
                        <div className="gallery_overlay">
                            <h6><a className="venobox vbox-item" data-gall="myGallery" href="images/gallery/gallery_08.jpg">Carry Your Style Everywhere!</a></h6>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12 btm-margin transition">
                        <img src="images/gallery/gallery_09.jpg" alt=""/>
                        <div className="gallery_overlay">
                            <h6><a className="venobox vbox-item" data-gall="myGallery" href="images/gallery/gallery_09.jpg">Carry Your Style Everywhere!</a></h6>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12 btm-margin transition">
                        <img src="images/gallery/gallery_10.jpg" alt=""/>
                        <div className="gallery_overlay">
                            <h6><a className="venobox vbox-item" data-gall="myGallery" href="images/gallery/gallery_10.jpg">Carry Your Style Everywhere!</a></h6>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12 btm-margin transition">
                        <img src="images/gallery/gallery_11.jpg" alt=""/>
                        <div className="gallery_overlay">
                            <h6><a className="venobox vbox-item" data-gall="myGallery" href="images/gallery/gallery_11.jpg">Carry Your Style Everywhere!</a></h6>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12 margin_btm transition">
                        <img src="images/gallery/gallery_12.jpg" alt=""/>
                        <div className="gallery_overlay">
                            <h6><a className="venobox vbox-item" data-gall="myGallery" href="images/gallery/gallery_12.jpg">Carry Your Style Everywhere!</a></h6>
                        </div>
                    </div> */}
                    <div className="col-md-12 col-sm-12 col-xs-12 pagination-padding">
                        <div className="col-md-4 col-sm-3 col-xs-4 over-padding">
                            {/* <div className="line"></div> */}
                        </div>
                        {/* <div className="col-md-4 col-sm-6 col-xs-12 text-center">
                            <nav aria-label="Page navigation">
                                <ul className="pagination">
                                    <li>
                                        <a href="#" aria-label="Previous">
                                <span aria-hidden="false">«</span>
                              </a>
                                    </li>
                                    <li><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li>
                                        <a href="#" aria-label="Next">
                                <span aria-hidden="true">»</span>
                              </a>
                                    </li>
                                </ul>
                            </nav>
                        </div> */}
                        {/* <div className="col-md-4 col-sm-3 col-xs-4 over-padding">
                            <div className="line"></div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
  )
}

export default AllBlogs