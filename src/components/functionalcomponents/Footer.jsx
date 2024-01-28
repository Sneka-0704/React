import '../css/Footer.css'
const Footer=()=>{
    return(
<footer style={{ backgroundColor: '#D6E2E2', color: 'black', padding: '20px', textAlign: 'center' }}>

    <p>&copy; 2024 React app. All rights reserved.</p>
    <p>Contact: tharunika1305@gmail.com | Phone: +91-9360062187</p>
    <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li><a href="https://www.linkedin.com/in/tharunika-r-617101225/" >Linkedin</a></li>
        <li><a href="/terms-of-service">Terms of Service</a></li>
    </ul>
</footer>
    )
}
export default Footer;
