const Footer = () => {
    return (
      <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
  
        <div className="flex gap-3">
            <a href="https://github.com/ubaidAhmad07/" className="social-icon">
                <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />   
            </a>               
            <a href="https://www.linkedin.com/in/ubaid-ahmad-profile/" className="social-icon">
                <img src="/assets/linkdin.png" alt="linkdin" className="w-1/2 h-1/2" />
            </a>   
            <a href="https://www.instagram.com/ubaidahmad_16/" className="social-icon">
                <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
            </a>
        </div>
  
        <p className="text-white-500">© 2024 Ubaid Ahmad. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;