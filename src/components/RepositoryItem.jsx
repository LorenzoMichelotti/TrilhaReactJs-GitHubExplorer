export default function RepositoryItem (props) {
    return (
        <li>
            <strong>📂 {props.repository?.name ?? 'Default'}</strong>
            <p>{props.repository?.description ?? ''}</p>
            {props.repository?.clone_url ?
                <a href={props.repository?.html_url}>Acessar repositório</a>
                :
                <legend>Repositório sem link</legend>
            }
        </li>
    );
}