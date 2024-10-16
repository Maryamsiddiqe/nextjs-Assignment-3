import Link from "next/link";

function Footer(){
    return(
        <div className="footer">
            <ul className="footer-links">
                <Link href={"/privacy"}><li>Privacy Policy</li></Link>
                <Link href={"/terms"}><li>Terms of Service</li></Link>
                <Link href={"/contact"}><li>Contact</li></Link>
            </ul>
        </div>
    );
}

export default Footer;