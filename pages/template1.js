import { useRouter } from 'next/router'
const template1 = () => {
    const router = useRouter()
    const routePath = router.asPath
    console.log( routePath.slice(1))
    return (
        <div>
            <h2>{routePath.slice(1)}</h2>
        </div>
    )
}

export default template1
