import Head from "next/head";
// import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Image from "next/image";
import banner from "../assets/sincerely-media-gPnHi8AmO5k-unsplash.jpg"

export default function Home() {
  return (
    <>
      <Head>
        <title>
          SAI
        </title>
      </Head>
      <Carousel>
        <Carousel.Item>
          <Image
            id="banner"
            src={banner}
            alt="Picture of the author"
            width="1750"
            height="400"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            id="banner"
            src={banner}
            alt="Picture of the author"
            width="1750"
            height="400"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            id="banner"
            src={banner}
            alt="Picture of the author"
            width="1750"
            height="400"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* <div className="explore-reports">
        <div className="container">
          <h3 className="">Get the Pulse of Target Market
            With our Methodical Research.</h3>
          <Button className="mt-2 mb-3" variant="info" >Explore Reports</Button>
        </div>
      </div> */}
      <div className="leatest-reports container d-flex align-items-center justify-content-center mt-4 mb-4">
        <h3>Leatest reports</h3>
      </div>
      <div className="card-reports d-flex align-items-center justify-content-center mt-4 mb-4">
        <div className="container-fluid contact d-flex justify-content-center">
          <div className="row">
            <div className="text-center col-lg-3 col-md-4">
              <Card style={{ width: '18rem' }}>

                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="info">Read More</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="text-center col-lg-3 col-md-4">
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="info">Read More</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="text-center col-lg-3 col-md-4">
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="info">Read More</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="text-center col-lg-3 col-md-4">
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="info">Read More</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className="container d-flex align-items-center justify-content-center mt-4 mb-4">
        <div className="row research-content">
          <div id="research-img" className="col-lg-6 col-md-6 mt-4 ">
            {/* <Image
            src={img2}
            alt="Picture of the author"
            width="400"
            height="350"
          /> */}
            image
          </div>
          <div className="research-para col-lg-6 col-md-6 mt-4">
            <h3>Why Choose S<span style={{ color: "	#A52A2A" }}>A</span>I Research Reports?</h3>
            <p >SAI Research Reports is a complete marketing solution that arms clients with crucial intelligence and assist in enhancing the decision making. S<span style={{ color: "	#A52A2A" }}>A</span>I Research Reports assists in determining the future growth prospects by estimating the business profitability across the globe. It has proven proficient in delivering premium syndicated and client-centered research report. We aim at combining the meticulous work ethic with premium quality control to guarantee the client satisfaction by providing specific research reports. The customized research report adhere to the specific needs of the client.
              <br></br><br></br>
              Our topnotch marketing solutions aims at supporting our clients in rectifying the marketing issues. We as a marketing solution organizations analyzes the upcoming trends of the various industrial verticals. We are dedicated to deliver precise and reliable data owing to an exceptional quality control system.</p>
          </div>
        </div>
      </div>
      <section>
        <div className="container d-flex align-items-center justify-content-center mt-4 mb-4 text-center">
          <h2>
            Some Facts
            <br></br>
            About S<span style={{ color: "	#A52A2A" }}>A</span>I Research
          </h2>
        </div>
        <div className="d-flex align-items-center justify-content-center mt-4 mb-4">
          <div className="container-fluid contact d-flex justify-content-center">
            <div className="row">
              <div className="col-md-3">
                <p>1000+</p>
                <p>Reports Published</p>
              </div>
              <div className="col-md-3">
                <p>1000+</p>
                <p>Reports Published</p>
              </div>
              <div className="col-md-3">
                <p>1000+</p>
                <p>Reports Published</p>
              </div>
              <div className="col-md-3">
                <p>1000+</p>
                <p>Reports Published</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
