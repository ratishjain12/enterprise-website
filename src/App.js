
import { Container, textAlign } from '@mui/system';
import './App.css';
import logo from './images/logo.png';
import video from './images/video.png';
import first from "./images/wetransfer.png";
import second from "./images/stamp.png";
import third from "./images/manter.png";
import fourth from "./images/sugarcane.png";
import Banner from './Banner';
import Header from './Header';
import p1 from "./images/p1.png";
import p2 from "./images/p2.png";
import p3 from "./images/p3.png";
import rn from "./images/rp.png";
import lh from "./images/left-hero.png";
import lh1 from "./images/lh1.png";
import lh2 from "./images/lh2.png";
import rh from "./images/right-hero.png";
import rh2 from "./images/rh2.png";
import ui from "./images/ui.png";
import a1 from "./images/a1.png";
import a2 from "./images/a2.png";
import a3 from "./images/a3.png";
import arrow from './images/arrow.png';
import gallery from './images/gallery.png';
import { Grid } from '@mui/material';
import { alignProperty } from '@mui/material/styles/cssUtils';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Container>
        <div className='mid-section1'>
          <h1 className="header">Trusted and loved by the world’s best teams</h1>
        </div>
        <div className='image-section'>
          <div class='img'>
            <img src={first} alt="img" />
          </div>
          <div class='img'>
            <img src={second} alt="img" />
          </div>
          <div class='img'>
            <img src={third} alt="img" />
          </div>
          <div class='img'>
            <img src={fourth} alt="img" />
          </div>
        </div>
        <div className='acc-rate'>
          <div className="details">
            <h1 className="head">99.95%</h1>
            <p className="title">Accuracy rate</p>
            <p className='subtitle'>in fulfilling orders</p>
          </div>
          <div className="details">
            <h1 className="head">5,000+</h1>
            <p className="title">Ecommerce businesses</p>
            <p className='subtitle'>partner with Opus</p>
          </div>
          <div className="details">
            <h1 className="head">99.96%</h1>
            <p className="title">Of orders ship on time</p>
            <p className='subtitle'>within SLA</p>
          </div>
          <div className="details">
            <h1 className="head">#1</h1>
            <p className="title">Best Fulfillment Technology</p>
            <p className='subtitle'>by AdWeek’s Retail Awards</p>
          </div>
        </div>
        <div className='video-section'>
          <p className="vid-title">VIDEO TITLE</p>
          <h1 className='vid-header'>Inform users with video sections</h1>
          <img src={video} className="vid-image" alt="vid-image" />
          <Grid container spacing={2}>
            <Grid item xs={6} >
            </Grid>
            <Grid item xs={12} lg={6}>
              <p class="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat. Praesent pulvinar arcu non lectus dapibus, a pulvinar mauris aliquam.</p>
            </Grid>
          </Grid>
        </div>
        <div class="section2">
          <div className="left">
            <h1 className="title_section">Make your Site </h1><br></br> <h1 className="title_section2">better with Opus</h1>
            <div>
              <p className="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat. Praesent pulvinar arcu non lectus dapibus, a pulvinar mauris aliquam.</p>
              <button className='btn1'>Learn more</button>
            </div>
          </div>
          <div className="right">
            <img src={rn} alt="" />
          </div>
        </div>
        <div className="blue-section">
          <div className="top-part">
            <h1>Ways to work with us</h1>
            <button className='btn2'>Get started</button>

          </div>
          <Grid container spacing={5}>
            <Grid item xs={12} lg={4}>
              <center>
                <img className="img1" src={p1} alt="image" />
              </center>
              <h2 style={{ color: "white", marginTop: "4%", marginBottom: '4%' }}>Project Management</h2>
              <p class="para1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat.</p>
            </Grid>
            <Grid item xs={12} lg={4}>
              <center>
                <img className="img1" src={p2} alt="image" />
              </center>
              <h2 style={{ color: "white", marginTop: "4%", marginBottom: '4%' }}>Advanced Analytics</h2>
              <p class="para1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat.</p>
            </Grid>
            <Grid item xs={12} lg={4}>
              <center>
                <img className="img1" src={p3} alt="image" />
              </center>
              <h2 style={{ color: "white", marginTop: "4%", marginBottom: '4%' }}>Marketing & Dashboard</h2>
              <p class="para1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat.</p>
            </Grid>
          </Grid>
        </div>
        <div style={{ marginBottom: "12%" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={6}>
              <div className="content">
                <div className="sub-content">
                  <div>
                    <img src={arrow} alt="image" />
                  </div>

                  <div style={{ paddingTop: '5%' }}>
                    <h2 style={{ color: "#061237", marginTop: "4%", marginBottom: '4%' }}>Choose <br></br>your  sections</h2>
                    <p class="para2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                  </div>
                </div>
                <div className="sub-content">
                  <div>
                    <img src={gallery} alt="image" />
                  </div>

                  <div>
                    <h2 style={{ color: "#061237", marginTop: "4%", marginBottom: '4%' }}>Add the images
                      <br></br>and text you need</h2>
                    <p class="para2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} lg={6}>
              <div style={{ marginTop: "3%" }}>
                <h1 style={{ color: "#061237", marginTop: "4%", marginBottom: '4%' }}>Create pages using<br></br> beautiful components.</h1>
                <div style={{ marginLeft: "6%" }}>
                  <p style={{ size: "16px", lineHeight: "32px", marginBottom: "5%", width: "429.5px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
                  <button className="learnmore">Learn More</button>
                </div>
              </div>
            </Grid>

          </Grid>
        </div>
        <div style={{ marginBottom: "12%" }}>
          <center>
            <Grid container spacing={2}>
              <Grid item xs={12} lg={6}>
                <img style={{ width: "552px", height: "400px" }} src={lh} alt="lh" />
              </Grid>
              <Grid item xs={12} lg={6}>
                <img src={rh} alt="lh" />
              </Grid>

            </Grid>
          </center>
        </div>
        <div style={{ marginBottom: "12%" }}>
          <center>
            <Grid container spacing={2}>
              <Grid item xs={12} lg={6}>
                <img style={{ width: "448px", height: "412px" }} src={lh1} alt="lh" />
              </Grid>
              <Grid item xs={12} lg={6}>
                <img src={ui} alt="lh" />
              </Grid>

            </Grid>
          </center>
        </div>
        <div style={{ marginBottom: "12%" }}>
          <center>
            <Grid container spacing={2}>
              <Grid item xs={12} lg={6}>
                <img style={{ width: "448px", height: "412px" }} src={lh2} alt="lh" />
              </Grid>
              <Grid item xs={12} lg={6}>
                <img src={rh2} alt="lh" />
              </Grid>

            </Grid>
          </center>
        </div>
        <div className="bottom" >
          <div className="top-part2">
            <h1>Resources</h1>
            <button className='btn3'>Get started</button>

          </div>

          <Grid container spacing={5}>

            <Grid item xs={12} lg={4}>
              <center>
                <img className="img1" src={a1} alt="image" />
              </center>
              <h2 style={{ color: "#37456C", marginTop: "4%", marginBottom: '4%', marginLeft: "6.5%" }}>A high-converting, high-performing template</h2>
              <p className="para3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat.</p>
            </Grid>
            <Grid item xs={12} lg={4}>
              <center>
                <img className="img1" src={a2} alt="image" />
              </center>
              <h2 style={{ color: "#37456C", marginTop: "4%", marginBottom: '4%', marginLeft: "6.5%" }}>With a clean, minimal and professional look</h2>
              <p className="para3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat.</p>
            </Grid>
            <Grid item xs={12} lg={4}>
              <center>
                <img className="img1" src={a3} alt="image" />
              </center>
              <h2 style={{ color: "#37456C", marginTop: "4%", marginBottom: '4%', marginLeft: "6.5%" }}>Opus made our journey possible</h2>
              <p className="para3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat.</p>
            </Grid>
          </Grid>
        </div>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="Footer">
          <Grid container spacing={3}>
            <Grid item xs={12} lg={2}>
              <center>
                <p style={{ color: "#B6BCCE" }}>OVERVIEW</p>

              </center>
              <ul>
                <li className="foot_items">Overview</li>
                <li className="foot_items">Landings</li>
                <li className="foot_items">Company</li>
                <li className="foot_items">Pricing</li>
                <li className="foot_items">CMS Pages</li>
                <li className="foot_items">Accounts</li>
                <li className="foot_items">Buy for Figma</li>
              </ul>
            </Grid>
            <Grid item xs={12} lg={2}>
              <center>
                <p style={{ color: "#B6BCCE" }}>PAGES</p>
                <ul>
                  <li className="foot_items">Landing 1</li>
                  <li className="foot_items">Landing 2</li>
                  <li className="foot_items">Landing 3</li>
                  <li className="foot_items">Company 1</li>
                  <li className="foot_items">Company 2</li>
                  <li className="foot_items">Company 3</li>
                  <li className="foot_items">Blog 1</li>
                  <li className="foot_items">Blog 2</li>
                  <li className="foot_items">Contact 1</li>
                  <li className="foot_items">Contact 2</li>
                  <li className="foot_items">Contact 3</li>
                </ul>
              </center>
            </Grid>
            <Grid item xs={12} lg={2}>
              <center>
                <p style={{ color: "#B6BCCE" }}>PAGES</p>
                <ul>
                  <li className="foot_items">Case studies</li>
                  <li className="foot_items">Careers</li>
                  <li className="foot_items">Pricing 1</li>
                  <li className="foot_items">Pricing 2</li>
                  <li className="foot_items">Pricing 3</li>
                  <li className="foot_items">Login</li>
                  <li className="foot_items">Register</li>
                  <li className="foot_items">Forgot Password</li>
                  <li className="foot_items">Blog Post</li>
                  <li className="foot_items">Team Member</li>
                  <li className="foot_items">Case Study</li>
                  <li className="foot_items">Job Post</li>
                </ul>
              </center>
            </Grid>
            <Grid item xs={12} lg={6} >
              <center>
                <div className="form">
                  <input type="text" placeholder='Email Address' className="input-field" />
                  <button className='btn4'>Get started</button>
                </div>

                <Grid container spacing={3} style={{ marginTop: "8%" }}>
                  <Grid item xs={12} lg={6}>
                    <h3 style={{ color: "#B6BCCE" }}>OPUS FOR WEBFLOW</h3>
                    <h1 style={{ color: "#1355FF" }}>Lorem Ipsum</h1>
                  </Grid>
                  <Grid item xs={12} lg={6} >
                    <h3 style={{ color: "#B6BCCE" }}>OPUS FOR WEBFLOW</h3>
                    <h1 style={{ color: "#1355FF" }}>Lorem Ipsum</h1>
                  </Grid>
                  <p style={{ marginTop: "12%", marginLeft: "4.9%", textAlign: "center" }}>© Template by <p style={{ color: "#1355FF", display: "inline" }}>Lorem</p> - Powered by <p style={{ color: "#1355FF", display: "inline" }}>Ipsum</p></p>
                </Grid>
              </center>
            </Grid>
          </Grid>

        </div>
      </Container>
    </div>
  );
}

export default App;
