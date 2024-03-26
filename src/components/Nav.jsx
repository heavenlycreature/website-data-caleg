import { NavLink } from "react-router-dom";

const data = [
    {
        id: 1,
        instance: 'DPD',
    },
    {
        id: 2,
        instance: 'DPR-RI',
    },
    {
        id: 3,
        instance: 'DPRD-Provinsi',
    },
    {
        id: 4,
        instance: 'DPRD-Kabupaten-Kota'
    },
]


export default function Nav(){
    return (
        <>
        <div role="tablist" className="tabs tabs-lifted my-5 overflow-x-hidden">
        {data.map((value) => {
            return (
                <>        
                    <NavLink key={value.id} to={`${value.instance.toLowerCase()}`} role="tab" className={({isActive, isPending}) => isActive ? "tab tab-active text-xs lg:text-lg" : isPending ? "pending" : "tab text-xs lg:text-base"} >          
                        {value.instance}
                        </NavLink>
                </>
            )
        })}
        </div>  
        </>
    )
}