import { LOGO_URL } from "./constants";
import { StyledImage, StyledWrapper } from "./header-styles";
import { Link } from "react-router-dom";

export const Header = () => {

    return (
        <StyledWrapper className="shadow-xl px-10">
            <StyledImage src={LOGO_URL} alt="Failed to load logo" />
            <ul className="flex items-center justify-between list-none text-xl font-serif">
                <Link to="/">Home</Link>
                <Link to="/explore">Explore</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact</Link>
            </ul>
        </StyledWrapper>
    );
}