type headerParams = {  
    text : string;
}

function Header(props: headerParams){
    
    return(
        <>
        <h1>Header Text Respect it : {props.text} </h1>
        </>
    )
}

export default Header;