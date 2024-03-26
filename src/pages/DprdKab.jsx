import { useState, useEffect } from "react";
import Dropdown from "../components/Dropdown";
import { Outlet } from "react-router-dom";

export default function DprdKab(){
    const [data, setData] = useState([]);
    useEffect(() => {
        async function getArticles() {
            const request = await fetch('https://caleg.zakiego.com/api/dprd-kabupaten-kota/dapil/list');
            const response = await request.json();
            const data = response.data;

            setData(data);
        }
        getArticles();
    }, []);

    return (
        <>    
        <main className="container mx-auto">
            <div className="w-full flex flex-wrap order-1 justify-center gap-3">
                <div className="w-full">
            <Dropdown data={data}/>
                </div>
            <Outlet/>
            </div>
        </main>
        </>
    )
} 