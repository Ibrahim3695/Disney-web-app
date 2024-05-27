import "./Header.css"
const Header = () => {
    return (
        <section className="Head">
            <div className="divLeft">
                <article className="disneyLogo">
                    <img src="./disney.png" alt="" />
                </article>
                <article className="text">
                    <ul>
                        <nav>DISNEY+</nav>
                        <nav>PARKS & TRAVEL</nav>
                        <nav>MOVIES</nav>
                        <nav>SHOP</nav>
                        <nav>MORE</nav>
                    </ul>
                </article>
            </div>

            <section className="divRight">
                <div className="signIn">SIGN IN</div>

                <article className="searchDiv">               
                     <input type="text" placeholder="Email" />
                     <div className="searchIcon"></div>
                </article>
            </section>
        </section>

        
    )
}

export default Header