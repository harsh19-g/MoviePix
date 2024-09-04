export const Footer = ()=>{
    return (
        <>
        {/*<!-- ========== Start footer Section ========== --> */}
        <footer className="section-footer">
          <div className="footer-container container">
            <div className="content_1">
              <img src="../src/assets/images/movie-logo.png" alt="movie-logo" className="logo" width="80%" height="auto"/>
              <p>
                Welcome to MoviePix, your ultimate destination to binge watch new movies!
              </p>
              {/* <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" /> */}
            </div>
            <div className="content_2">
              <h4>FAQs</h4>
              <a href="#">Account</a>
              <a href="#">Investor Relations</a>
              <a href="#">Ways to Watch</a>
            </div>
            <div className="content_3">
              <h4>Help Center</h4>
              <a href="./contact.html">Media Centre</a>
              <a href="" target="_blank">Media Centre</a>
              <a href="" target="_blank">Jobs</a>
            </div>
            <div className="content_3">
              <h4>Terms of Use</h4>
              <a href="./contact.html">Cookie Preferences</a>
              <a href="" target="_blank">Contact Us</a>
              <a href="" target="_blank">Legal Notices</a>
            </div>
            <div className="content_4">
              <h4>NEWSLETTER</h4>
              <p>Ready to watch? 
              <br />Enter your email to create or <br />restart your membership.</p>
              <div className="f-mail">
                <input type="email" placeholder="Your Email" />
                <i className="bx bx-envelope"></i>
              </div>
              <hr />
            </div>
          </div>
         
          <div className="f-design">
            <div className="f-design-txt">
              <p>Design and Code by Harsh Gupta</p>
            </div>
          </div>
        </footer>
    
        {/*!-- ========== End footer Section ========== --->*/}
        </>
    )
}