import { NavLink } from "react-router-dom"

export const Home = () => {
    return (
        <>
            <h1>This is BookBugs</h1>
            <h3>Home for people who are avid readers we call them BookBugs</h3>
            <NavLink to="/products">Explore Available Books</NavLink>
        </>
    )
}