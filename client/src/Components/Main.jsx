import axios from 'axios'
import React from 'react'
import Cards from './Cards'
import Header from './Header'
import Newsletter from './Newsletter'
import RecentPost from './RecentPost'
import WelcomeSection from './WelcomeSection'
// import Main from '../Pages/Blog/Main'

const Main = () => {
    let NextPage=async(e)=>{
        e.preventDefault();
        let val=await axios.get('/blogss');
        // console.log(val.data);
    }
    return (
        <div>
            <div className="row">
                <div className="col-md-4 col-md-offset-0 col-sm-8 col-sm-offset-2 col-xs-12 ">
                    <div className="right-border-box">
                        <WelcomeSection />
                        {/* <Header /> */}
                        {/* <Newsletter/> */}
                        <h3>Trending</h3>
                        <RecentPost query="trend" />
                        {/* <Main/> */}
                    </div>
                </div>
                <div className="col-md-8 col-sm-12 col-xs-12 zero-padding Cards">
                    <div className="inspaction">
                        <div className="col-md-12 col-sm-12 col-xs-12 zero-padding">
                            <Cards/>
                            <div className="col-md-12 col-sm-12 col-xs-12 zero-padding">
                                <div className="col-md-6 col-sm-12 col-xs-12">
                                    {/* <nav aria-label="Page navigation">
                                        <ul className="pagination">
                                            <li>
                                                <a href="#" aria-label="Previous">
                                                    <span aria-hidden="false">«</span>
                                                </a>
                                            </li>
                                            <li><a href="#">1</a></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li>
                                                <a href="" onClick={NextPage} aria-label="Next">
                                                    <span aria-hidden="true">»</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav> */}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Main