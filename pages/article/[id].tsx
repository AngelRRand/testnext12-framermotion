import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'
const Articlee = () => {
    const router = useRouter()
    return (
        <div>
            <h1>messi</h1>
            <Link href={'/'}>Vamono al carao</Link>
            <hr />
            <button onClick={()=>router.push('/about')}>
                Vamono al about
            </button>
        </div>
    )
}

export default Articlee