import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import M from 'materialize-css'

const Home = ({ currentUser }) => {
    

    return (
            <div class="slider fullscreen">
                <ul class="slides">
                    <li>
                        <img src="https://cdn.shopify.com/s/files/1/0859/1856/files/fleuraftimage_2048x2048.jpg?v=1589894774"/>
                        <div class="caption center-align">
                        <h2>Welcome to Bloom Delivery!</h2>
                        <h5 class="thin black-text text-lighten-3">These iconic arrangements embody everything Bloom Delivery–sophistication and class. Real Roses That Last A Year.</h5><br></br>
                        <a class="waves-effect waves-light pink lighten-1 btn" href="/shop">SHOP</a>
                        </div>
                    </li>
                    <li>
                        <img src="https://cdn.shopify.com/s/files/1/0859/1856/files/zft3.jpg?v=1597335801"/>
                        <div class="caption left-align">
                        <h3>Most Gifted</h3>
                        <h5 class="thin grey-text text-lighten-3">Shop our most popular Eternity® Flower arrangements.</h5>
                        </div>
                    </li>
                    <li>
                    <img src="https://cdn.shopify.com/s/files/1/0859/1856/files/evileyeblog_2.jpg?v=1564608321"/>
                        <div class="caption right-align">
                        <h3 class=" blue-text text-darken-4">Personalized Perfection</h3>
                        <h5 class="thin light grey-text text-lighten-3">Looking for something a little more personal? <br></br>Design your very own custom arrangement.</h5>
                        </div>
                    </li>
                    <li>
                        <img src="https://imgix.bustle.com/uploads/image/2019/10/30/b954c9d2-75c3-42f1-bb9d-ae2f1202b9b2-venus-et-fleur-main.png?w=1200&fit=crop&crop=faces&auto=format%2Ccompress"/>
                        <div class="caption left-align">
                        <h3 class="pink-text text-darken-1">The Zodiac Collection</h3>
                        <h5 class="thin grey-text text-lighten-3">Check out our new zodiac collection! <br></br> You're not gonna wanna miss it.
                        </h5>
                        </div>
                    </li>
                </ul>
            </div>
        
            
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser
    }
}

export default connect(mapStateToProps)(Home);
