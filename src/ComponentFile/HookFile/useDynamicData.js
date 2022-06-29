import { useEffect, useState } from "react"

const useDynamicData = (Id) => {
    const [dynamicData, setDynamicData] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/bikeData/${Id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDynamicData(data))
    }, [])
    return [dynamicData, setDynamicData]
}
export default useDynamicData ;