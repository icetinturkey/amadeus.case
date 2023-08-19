import logo from "../resources/logo.png";
function Footer() {
    return(
        <div className="border-t border-white/[.4]">
            <div className="h-14 flex items-center justify-evenly flex-row">
                <a href="https://react.dev" target="_blank" rel="noreferrer" className="footer-item bg-footer1d dark:bg-footer1n hidden xl:inline" style={{ backgroundImage: "url(" + logo + ")" }}>&nbsp;</a>
                <a href="https://ismailcetin.dev" target="_blank" rel="noreferrer" className="footer-item bg-footer2d dark:bg-footer2n" style={{ backgroundImage: "url(" + logo + ")" }}>&nbsp;</a>
                <a href="https://amadeus.com" target="_blank" rel="noreferrer" className="footer-item bg-footer3d dark:bg-footer3n hidden lg:inline" style={{ backgroundImage: "url(" + logo + ")" }}>&nbsp;</a>
                <a href="https://coderspace.io" target="_blank" rel="noreferrer" className="footer-item bg-footer4d dark:bg-footer4n hidden md:inline" style={{ backgroundImage: "url(" + logo + ")" }}>&nbsp;</a>
                <a href="https://mockapi.io" target="_blank" rel="noreferrer" className="footer-item bg-footer5d dark:bg-footer5n hidden sm:inline" style={{ backgroundImage: "url(" + logo + ")" }}>&nbsp;</a>
            </div>
        </div>
    )
}
export default Footer;