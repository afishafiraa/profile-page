import React, { Component } from 'react';
import './App.css';

class About extends Component {
  constructor(props){
    super(props);

    this.state = {
      title : 'About',
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
        <section class="about-banner">
				<div class="container">				
					<div class="row d-flex align-items-center justify-content-center">
						<div class="about-content col-lg-12">
							<h1 class="text-white">
								About Me				
							</h1>	
							<p class="text-white link-nav"><a href="index.html">Home </a>  <span class="lnr lnr-arrow-right"></span>  <a href="about.html"> About Me</a></p>
						</div>	
					</div>
				</div>
			</section>
      </div>
    );
  }
}

export default About;
