import {useRouter} from 'next/router'

export default function index() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()
    const {id} = router.query

    return (
        <div>
            <header>
                <h1>This is the data page</h1>
                <p>here is data {id}</p>
            </header>
        </div>
    )

}
