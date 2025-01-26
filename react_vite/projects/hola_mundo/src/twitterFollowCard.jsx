
import { useState} from "react" 
export function TwitterFollowCard ({formatUserName,userName='unknow', children,initialisFollowing}){

    const [isFollowing, setIsFollowing] = useState(initialisFollowing)
    const imageSrc = `https://unavatar.io/${userName}`
    const text = isFollowing ? "Followed" : "Follow"
    const buttonClassName = isFollowing ? "tw-followCard-Button Following": "tw-followCard-Button";

    const  handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    return (        

        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-Avatar"
                     alt={`Avatar de ${children}`}
                     src={imageSrc}
                /> 
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span className={"tw-followCard-infoUserName"}> {formatUserName(userName)}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Unfollow</span>
                </button>
            </aside>
        </article>
    )
}