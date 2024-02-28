// Repo.tsx

import { RepoProps } from "../types/repo";
import { AiOutlineStar, AiOutlineFork } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { RiGitRepositoryLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa"; // Adicionei o ícone do GitHub
import classes from "./Repo.module.css";

const Repo = ({
    name,
    language,
    html_url,
    forks_count,
    stargazers_count,
}: RepoProps) => {
    return (
        <div className={classes.repo}>
            <div className={classes.repoInfo}>
                <div>
                    <h3>{name}</h3>
                    <p>
                        <BsCodeSlash /> {language}
                    </p>
                    <div className={classes.stats}>
                        <div>
                            <AiOutlineStar />
                            <span>{stargazers_count}</span>
                        </div>
                        <div>
                            <AiOutlineFork />
                            <span>{forks_count}</span>
                        </div>
                    </div>
                </div>
                <div className={classes.githubIconContainer}>
                    <FaGithub className={classes.githubIcon} /> {/* Adicionei o ícone do GitHub */}
                </div>
            </div>
            <a href={html_url} target="_blank" className={classes.repo_btn}>
                <span>Ver código</span>
                <RiGitRepositoryLine />
            </a>
        </div>
    );
};

export default Repo;
