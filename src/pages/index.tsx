import Head from "next/head";
// import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Image from "next/image";
import banner from "../assets/sincerely-media-gPnHi8AmO5k-unsplash.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup, faProjectDiagram, faBuilding, faFileLines, faDriversLicense, faGlobeAsia } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          SWI
        </title>
      </Head>
      <Carousel>
        <Carousel.Item>
          <Image
            id="banner"
            src={banner}
            alt="Picture of the author"
          // width="1750"
          // height="400"
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
          // width="1750"
          // height="400"
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
          // width="1750"
          // height="400"
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
      <div className="container text-center my-6">
        <div className="row  justify-content-center">
          <div className="card col-md-3" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <Button variant="info">Explore More</Button>
            </div>
          </div>
          <div className="card col-md-3" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <Button variant="info">Explore More</Button>
            </div>
          </div>
          <div className="card col-md-3" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <Button variant="info">Explore More</Button>
            </div>
          </div>
          <div className="card col-md-3" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <Button variant="info">Explore More</Button>
            </div>
          </div>
        </div>
      </div>
      <hr className="container"></hr>
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
            <h3>Why Choose S<span style={{ color: "	#A52A2A" }}>W</span>I Research Reports?</h3>
            <p >SWI Research Reports is a complete marketing solution that arms clients with crucial intelligence and assist in enhancing the decision making. S<span style={{ color: "	#A52A2A" }}>W</span>I Research Reports assists in determining the future growth prospects by estimating the business profitability across the globe. It has proven proficient in delivering premium syndicated and client-centered research report. We aim at combining the meticulous work ethic with premium quality control to guarantee the client satisfaction by providing specific research reports. The customized research report adhere to the specific needs of the client.
              <br></br><br></br>
              Our topnotch marketing solutions aims at supporting our clients in rectifying the marketing issues. We as a marketing solution organizations analyzes the upcoming trends of the various industrial verticals. We are dedicated to deliver precise and reliable data owing to an exceptional quality control system.</p>
          </div>
        </div>
      </div>
      <section>
        <div className="container d-flex align-items-center justify-content-center mt-4 mb-4 text-center mt-4">
          <h2>
            Some Facts
            <br></br>
            About S<span style={{ color: "	#A52A2A" }}>W</span>I Research
          </h2>
        </div>
        <div className="container  align-items-center justify-content-center mt-4 mb-4 text-center">
          {/* <div className="container-fluid contact d-flex justify-content-center"> */}
          <div className="row">
            <div className="col-md-2">
              <h3>
                <FontAwesomeIcon
                  icon={faFileLines}
                />
                <span>  </span>1000+</h3>
              <p>Reports Published</p>
            </div>
            <div className="col-md-2">
              <h3>
                <FontAwesomeIcon
                  icon={faPeopleGroup}
                />
                <span>  </span>
                100+</h3>
              <p>ANALYSTS AND CONSULTANTS</p>
            </div>
            <div className="col-md-2">
              <h3>
                <FontAwesomeIcon
                  icon={faProjectDiagram}
                />
                <span>  </span>
                500+</h3>
              <p>CONSULTING PROJECTS PER YEAR</p>
            </div>
            <div className="col-md-2">
              <h3>
                <FontAwesomeIcon
                  icon={faBuilding}
                />
                <span>  </span>
                85%</h3>
              <p>OF FORTUNE 1,000 ARE OUR CLIENTS</p>
            </div>
            <div className="col-md-2">
              <h3>
                <FontAwesomeIcon
                  icon={faDriversLicense}
                />
                <span>  </span>
                300+</h3>
              <p>Ontime Delivery</p>
            </div>
            <div className="col-md-2">
              <h3>
                <FontAwesomeIcon
                  icon={faGlobeAsia}
                />
                <span>  </span>
                100+</h3>
              <p>Cross Country Market Reports</p>
            </div>
          </div>
          {/* </div> */}
        </div>
      </section>
      <hr className="container"></hr>
      <div className="container d-flex align-items-center justify-content-center mt-4 mb-4">
        <h2>
          Latest Blog & Press Release
        </h2>
      </div>
      <div className="container text-center my-6">
        <div className="row  justify-content-center">
          <div className="card col-md-3" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <Button variant="info">Explore More</Button>
            </div>
          </div>
          <div className="card col-md-3" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <Button variant="info">Explore More</Button>
            </div>
          </div>
          <div className="card col-md-3" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <Button variant="info">Explore More</Button>
            </div>
          </div>
          <div className="card col-md-3" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <Button variant="info">Explore More</Button>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="container align-items-center justify-content-center mt-4 mb-4 text-center">
          <h2>
            Explore Your Industry
          </h2>
          <p>Market research that is consistently on-point across a wide range of industries.</p>
        </div>
        <div className="explore-industry container">
          <div className="row">
            <div className="col-md-4" style={{ borderRadius: "10px" }}>
              <ul className="justify-content-center" style={{ paddingLeft: "0px", listStyleType: "none" }}>
                <li className="my-2" ><a href="#">Action</a></li>
                <li className="my-2" ><a href="#">Action</a></li>
                <li className="my-2" ><a href="#">Action</a></li>
                <li className="my-2" ><a href="#">Action</a></li>
                <li className="my-2" ><a href="#">Action</a></li>
                <li className="my-2" ><a href="#">Action</a></li>
                <li className="my-2" ><a href="#">Action</a></li>
                <li className="my-2" ><a href="#">Action</a></li>
              </ul>
            </div>
            <div className="col-md-7" style={{ backgroundColor: "#f8f8f8", borderRadius: "10px" }}>
              <h2 className="text-center my-4">– Advance Materials –</h2>
              <div className="row">
                <div className="card col-md-5 mt-2 mx-4" style={{ width: "21rem", height: "12rem" }}>
                  <div className="date">
                    date
                  </div>
                  <div className="">
                    <h4>Heading</h4>
                  </div>
                  <div className="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, sed quaerat. Ipsum ut veniam eveniet deleniti expedita rerum rem aperiam quidem, repellendus voluptatem ad, sed ipsam non, laborum esse. Placeat, porro cupiditate.
                  </div>
                  <div className="text-left justify-content-left" style={{ marginTop: "auto", marginBottom: "auto" }}>
                    Read More
                  </div>
                </div>
                <div className="card col-md-5 mt-2 mx-4" style={{ width: "21rem", height: "12rem" }}>
                  <div className="date">
                    date
                  </div>
                  <div className="">
                    <h4>Heading</h4>
                  </div>
                  <div className="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, sed quaerat. Ipsum ut veniam eveniet deleniti expedita rerum rem aperiam quidem, repellendus voluptatem ad, sed ipsam non, laborum esse. Placeat, porro cupiditate.
                  </div>
                  <div className="text-left justify-content-left" style={{ marginTop: "auto", marginBottom: "auto" }}>
                    Read More
                  </div>
                </div>
                <div className="card col-md-5 mt-2 mx-4" style={{ width: "21rem", height: "12rem" }}>
                  <div className="date">
                    date
                  </div>
                  <div className="">
                    <h4>Heading</h4>
                  </div>
                  <div className="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, sed quaerat. Ipsum ut veniam eveniet deleniti expedita rerum rem aperiam quidem, repellendus voluptatem ad, sed ipsam non, laborum esse. Placeat, porro cupiditate.
                  </div>
                  <div className="text-left justify-content-left" style={{ marginTop: "auto", marginBottom: "auto" }}>
                    Read More
                  </div>
                </div>
                <div className="card col-md-5 mt-2 mx-4" style={{ width: "21rem", height: "12rem" }}>
                  <div className="date">
                    date
                  </div>
                  <div className="">
                    <h4>Heading</h4>
                  </div>
                  <div className="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, sed quaerat. Ipsum ut veniam eveniet deleniti expedita rerum rem aperiam quidem, repellendus voluptatem ad, sed ipsam non, laborum esse. Placeat, porro cupiditate.
                  </div>
                  <div className="text-left justify-content-left" style={{ marginTop: "auto", marginBottom: "auto" }}>
                    Read More
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center container align-items-center mt-3 mb-2">
                <Button className="" variant="primary">View All Advance Materials Report</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <div className="client-info text-center my-4" style={{ backgroundColor: "#f8f8f8"}}>
        <div className="row justify-content-center g-0">
        <div className="text-center text-align-justify col-md-6">
          <div className="mt-4">
            <h3>Clients' Testimonials</h3>
          </div>
          <div className="mb-4">
            <p>The report was really helpful and the quality was great. Overall it is nice work to understand the comprehensive outlook of the industry. We will certainly register their services in future and will recommend others as well.</p>
            <h4>--panasonic</h4>
          </div>
          <div className="mb-4">
            <p>It was great working with your team. The report was extremely helpful and gave a deep insight into the market. We definitely got the best value for money in terms of investment. Look forward to hiring your expertise in future as well.</p>
            <h4>--Thales</h4>
          </div>
          <div className="mb-4">
            <p>Sheer Analytics and Insights provided an extremely detailed and in-depth report that was extremely helpful for our business decision making needs. The report was excellent and great value for our investment. We definitely recommend them for any market research and business consultancy needs.</p>
            <h4>--LCY</h4>
          </div>
        </div>
        <div className="col-md-6">
          <div className="text-center mt-4">
            <h3>
            Some Of Our Major Clients
            </h3>
          </div>
        </div>
        </div>
        </div>
      </div>
    </>
  )
}
