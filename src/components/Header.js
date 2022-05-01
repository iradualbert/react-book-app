import { Link } from "react-router-dom";
import { useState } from "react";


const Header = () => {
    const [query, setQuery] = useState("");
    const onSubmit = e => {
        e.preventDefault();
    };
    
    return (
        <header className="flex">
          <h2><Link to="/">Home</Link></h2>
          {/* <form>
            <input 
                value={query}
                onChange={event => setQuery(event.target.value)}
            />
            <button type>
                Search
            </button>
        </form>   */}
        </header>
        
    )
};


export default Header;