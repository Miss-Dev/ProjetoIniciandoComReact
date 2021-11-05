import React, { useState } from 'react'
import './bootstrap.css'
import './carrossel.css'
import Carousel from 'react-bootstrap/Carousel';
import logo1 from '../../img/mini1.jpg'
import logo2 from '../../img/mini2.jpg'
import logo3 from '../../img/mini3.jpg'
import logo4 from '../../img/mini4.jpg'
import logo5 from '../../img/mini5.jpg'
import logo6 from '../../img/mini6.jpg'
import logo7 from '../../img/mini7.jpg'


export default function Carrossel() {
   
    return(
        <div className="divCarr" style={{ display: 'block', width: 800, padding: 24, alignSelf: 'center'}}>
        <Carousel>
        <Carousel.Item >
            <img
            className="d-block w-100"
            src={logo1}            
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>Voyager</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={ logo2 }
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3>Voyager teste</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={logo3}
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Lucy - vai viajar a Júpiter</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={logo4}
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Terra</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={logo5}
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Terra</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={logo6}
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Lua</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item> 
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={logo7}
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Estação espacial</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item> 
        
        </Carousel>
        </div>
        
       
      
        
    )
}
