import {useRouter} from 'next/router'
import {useState} from "react";


export default function


    index() {


    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()
    const {id} = router.query
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let [likes, setLikes, number] = useState()
    likes = 0;
    number = 0;

    function handleClick() {
        setLikes(likes + 1)
    }
    function math(){
        number = 2000000000000 + 1234180924907594385 - 452914385723904
        console.log(number)
    }


    return (
        <div>
            <title>Input Page</title>
            <header>
                <h1>This is the data page</h1>
                <p>here is data {id}</p>
            </header>
            <div>
                <button onClick={() => router.push('/')}>Go to home</button>
            </div>
            <div>
                <button onClick={handleClick}>Likes ({math})</button>
            </div>
        </div>
    )


}
