import RepositoryItem from "./RepositoryItem";
import '../styles/repositories.scss';
import { useEffect, useState } from "react";

// https://api.github.com/users/LorenzoMichelotti/repos

const repository = {
    name: 'Repositorio 1',
    description: 'react purão',
    link: 'https://github.com/LorenzoMichelotti/TrilhaReactJs-GitHubExplorer',
}

export default function RepositoryList({}) {
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/LorenzoMichelotti/repos')
    .then( resp => resp.json() )
    .then( data => setRepositories(data))
  }, [])
  
  console.log(repositories)

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map((repo, key) => {
          return (
            <RepositoryItem key={key} repository={repo}/>
          );
        })}
      </ul>
    </section>
  );
}
