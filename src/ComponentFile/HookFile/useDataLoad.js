import { useEffect, useState } from "react"

const useDataLoad = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const url = "http://https://pabna-bike-corner.herokuapp.com/bikeData";
        fetch(url)
            .then(res => res.json())
            .then(getData => setData(getData))
    }, [])
    return [data, setData];
}
export default useDataLoad;