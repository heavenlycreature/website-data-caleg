import { Link } from "react-router-dom";

export default function Dropdown({data}){
    return(
        <>
        <div className="dropdown dropdown-hover flex justify-center">
                <div tabIndex={0} role="button" className="btn m-1">pilih daerah yang kamu ingin tau</div>
                <ul className="dropdown-content flex-col overflow-y-auto w-fit h-44 z-[1] menu p-2 shadow bg-base-100 rounded-box ">
                   {data.map((value) => {
                       return(
                        <li key={value.id}> <Link to={`dapil/${value.id}`}>{value.namaDapil}</Link> </li>
                        )
                    })}
                </ul>
        </div>
        </>
    )
}