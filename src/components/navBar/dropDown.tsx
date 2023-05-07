import { StyledDropDown } from "../../styles/DropDownStyle"

export const DropDown =() => {
    return (
        <StyledDropDown>
            <li><button>$ USD</button></li>
            <li><button>€ EUR</button></li>
            <li><button>¥ JPY</button></li>
        </StyledDropDown>
    )
}