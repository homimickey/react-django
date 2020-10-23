import axios from "axios";
import React, { useState } from "react";

const App: React.FC<{}> = () => {
    const [data, setData] = useState<string | undefined>();
    const [name, setName] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const getData = () => {
        setIsLoading(true);
        setTimeout(() => {
            axios
                .post(`http://localhost:8000/api/${name}`)
                .then((res) => {
                    setData(res.data.msg);
                    setIsLoading(false);
                })
                .catch((err) => {
                    setIsLoading(false);
                    setData("Error Occured 😟😟");
                });
        }, 1000);
    };

    const handleChange = (e: any) => {
        setName(e.target.value);
    };

    return (
        <>
            <input
                onChange={handleChange}
                type="text"
                placeholder="Enter Your Name"
            />
            <button onClick={getData}>sayHello</button>

            <h1>{isLoading ? "Loading..." : data}</h1>
        </>
    );
};

export default App;
