import "./App.css"
import { TwitterFollowCard } from "./twitterFollowCard"

export function App (){
    const addArobase = (userName) => `@${userName}`
    const younesch = {isFollowing:false ,formatUserName: addArobase ,userName: 'Youfus12'}
 
    return (
        <div className="App">

        <TwitterFollowCard  
        isFollowing 
        formatUserName={addArobase} 
        userName ="midudev" >
        Miguel Angel
        </TwitterFollowCard>
       

        <TwitterFollowCard {...younesch}>
        Younes Chiad
        </TwitterFollowCard> 

        <TwitterFollowCard 
        formatUserName={addArobase}
         > 
        Kidd  Angel 
        </TwitterFollowCard>

        </div>
    )
}