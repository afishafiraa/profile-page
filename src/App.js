import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      title : 'Home',
    };
  }

  clicked(menu){
    //untuk memperbarui state sesuai dengan menu yang dipilih
    
    this.setState({
      title : menu.title,
    });
  }

  render() {
    return (

        <div>
        <header id="header">
		    <div class="container main-menu">
		    	<div class="row align-items-center justify-content-between d-flex">
			      <div id="logo">
			        <a href="index.html"><img src="img/logo.png" alt="" title="" /></a>
			      </div>
			      <nav id="nav-menu-container">
			        <ul class="nav-menu">
			          <li><a href="index.html">Home</a></li>
			          <li><a href="about.js">About</a></li>
			          <li><a href="services.html">Services</a></li>
			          <li><a href="portfolio.html">Portfolio</a></li>
			          <li><a href="price.html">Pricing</a></li>
			          <li class="menu-has-children"><a href="">Blog</a>
			            <ul>
			              <li><a href="blog-home.html">Blog Home</a></li>
			              <li><a href="blog-single.html">Blog Single</a></li>
			            </ul>
			          </li>	
			          <li class="menu-has-children"><a href="">Pages</a>
			            <ul>
		            	  <li><a href="elements.html">Elements</a></li>
				          <li class="menu-has-children"><a href="">Level 2 </a>
				            <ul>
				              <li><a href="#">Item One</a></li>
				              <li><a href="#">Item Two</a></li>
				            </ul>
				          </li>					                		
			            </ul>
			          </li>					          					          		          
			          <li><a href="contact.html">Contact</a></li>
			        </ul>
			      </nav>		
		    	</div>
		    </div>
		  </header>
      
      <section class="banner-area">
				<div class="container">
					<div class="row fullscreen align-items-center justify-content-between">
						<div class="col-lg-6 col-md-6 banner-left">
							<h6>This is me</h6>
							<h1>Philip Gilbert</h1>
							<p>
								You will begin to realise why this exercise is called the Dickens Pattern with reference to the ghost showing Scrooge some different futures.
							</p>
							<a href="#" class="primary-btn text-uppercase">discover now</a>
						</div>
						<div class="col-lg-6 col-md-6 banner-right d-flex align-self-end">
							<img class="img-fluid" src="img/hero-img.png" alt=""/>
						</div>
					</div>
				</div>					
			</section>
      
      </div>
    );
  }
}

export default App;
