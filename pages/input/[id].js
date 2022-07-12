import {useRouter} from 'next/router'
import {useState} from "react";


export default function


    index() {


    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()
    const {id} = router.query
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let [likes, setLikes] = useState()
    likes = 0;

    function handleClick() {
        setLikes(likes + 1)
    }



    return (
        <div>
            <title>Input Page</title>
            <header>
                <h1>This is the data page</h1>
                <p>here is data {id}</p>
            </header>
            <button onClick={() => router.push('/')}>Go to home</button>
            <area/>
            <button onClick={handleClick}>Likes ({likes})</button>

        </div>
    );

}
