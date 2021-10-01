import { useState, useEffect } from 'react'

const baseUrl = 'http://localhost/api/'

const useApi = (subEndpoint, body, method) => {
    const [state, setState] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState()
    const [count, setCount] = useState(0)

    const stringBody = JSON.stringify(body)

    useEffect(() => {
        setLoading(true)

        async function goFetch() {
            try {
                const result = await fetch(baseUrl + subEndpoint.replace(/\/?$/, "/"), {
                    method: method || 'GET',
                    headers: {
                        'content-type': 'application/json'
                    },
                    cors: false,
                    ...Boolean(stringBody) && {
                        body: stringBody
                    }

                })
                if (result.status > 299) {
                    throw new Error(`Non-2xx-statuscode returned: ${result.status}. ${await result.text()}`)
                }
                const json = await result.json()
                setState(json)
                setLoading(false)
                setError(null)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }
        goFetch()
    }, [subEndpoint, stringBody, count, method]);

    function refetch() {
        setCount(count => count + 1)
    }

    return {
        state,
        error,
        loading,
        refetch,
    }
}

export default useApi