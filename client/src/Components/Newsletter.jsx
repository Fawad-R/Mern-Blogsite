import React from 'react'

const Newsletter = () => {
  return (
    <div>
          <div className="newsletter">
                                        <div className="newsletter-border">
                                            <div className="inner-sec">
                                                <h4 className="defualt-color">Connect</h4>
                                                <h3 className="clr-fff">Subscribe to You Newsletter</h3>
                                                <input type="Email" name="email" className="news-mail" placeholder="Enter your email"/>
                                                <input type="submit" name="search" className="news-subcribe" value="Subscribe"/>
                                            </div>
                                        </div>
                                    </div>
    </div>
  )
}

export default Newsletter