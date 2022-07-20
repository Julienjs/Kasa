import { useEffect, useState } from 'react';

export default function UseCallData() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('/data.json')
            .then((res) => {
                if (res.ok) return res.json()
                    .then((data) =>
                        setData(data)
                    )
            })
    }, [])
    return data
}