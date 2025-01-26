import "./App.css"
import { TwitterFollowCard } from "./twitterFollowCard"
const Users = [
    {
        userName: "tester",
        name: "Tester Angel",
        initialisFollowing: false
    },
    {
        userName: "kevin",
        name: "Kevin Gonda",
        initialisFollowing: false
    }
]
export function App (){
    const addArobase = (userName) => `@${userName}`
    const younesch = {initialisFollowing:false ,formatUserName: addArobase ,userName: 'Youfus12'}
 
    return (
        <section className="App">

        <TwitterFollowCard 
        initialisFollowing={true}
        formatUserName={addArobase} 
        userName ="midudev" >
        Miguel Angel
        </TwitterFollowCard>

        {
            Users.map(({userName, name, initialisFollowing}) => {
                 
                return (
                    <TwitterFollowCard 
                    key={userName}
                    initialisFollowing={initialisFollowing}
                    formatUserName={addArobase}
                    userName={userName}
                    >
                    {name}
                    </TwitterFollowCard>
                )
                })
        }
        </section>
    )
}