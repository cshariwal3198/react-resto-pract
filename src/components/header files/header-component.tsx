import { LOGO_URL } from "./constants";
import { StyledImage, StyledWrapper } from "./header-styles";

export const Header = () => {

    return (
        <StyledWrapper className="shadow-xl px-10">
            <StyledImage src={LOGO_URL} alt="Failed to load logo" />
            <ul className="flex items-center justify-between list-none text-xl font-serif">
                <li>Home</li>
                <li>Explore</li>
                <li>Cart</li>
                <li>About Us</li>
                <li>Contact</li>
            </ul>
        </StyledWrapper>
    );
}