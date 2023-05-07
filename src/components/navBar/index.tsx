import { useState } from "react"
import { NavigateFunction, useNavigate } from "react-router-dom"

export const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)
    const navigate = useNavigate()
    return (
        <header>
            <ul>
                <li>WOMEN</li>
                <li>MEN</li>
                <li>KIDS</li>
            </ul>
            <img src="../assets/a-logo.png" alt="logo" />
            <div>
                <button onClick={()=> setIsMenuOpen(!isMenuOpen)}>$</button>
                <button onClick={() => setIsCartOpen(!isCartOpen)}>{"../assets/cart.png"}</button>
            </div>
        </header>
    )
}