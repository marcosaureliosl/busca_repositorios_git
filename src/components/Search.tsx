type Searchprops = {
    loadUser: (username: string) => Promise<void>;
};

import { BsSearch } from "react-icons/bs";

import { useState, KeyboardEvent } from "react";

import classes from "./Search.module.css";

const Search = ({ loadUser }: Searchprops) => {
    const [userName, setUserName] = useState("");

    const handlekeydown = (e: KeyboardEvent) => {
        if (e.key === "Enter") {
            loadUser(userName);
        }
    };

    return (
        <div className={classes.search}>
            <h2>Busque por um repositório</h2>
            <p>Melhores repositórios</p>
            <div className={classes.search_container}>
                <input
                    type="text"
                    placeholder="Digite o nome do usuário"
                    onChange={(e) => setUserName(e.target.value)}
                    onKeyDown={handlekeydown}
                />
                <button onClick={() => loadUser(userName)}>
                    <BsSearch />
                </button>
            </div>
        </div>
    );
};

export default Search;
