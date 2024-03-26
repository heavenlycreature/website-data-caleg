import { useRouteError } from "react-router-dom";
import notFound from '../assets/notFound.svg';
import errorMessage from '../assets/errorMessage.svg';

export default function ErrorElem(){
    const error = useRouteError();
    console.error(error);

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <h1>Oops!</h1>
            <p>Sorry, an expected error has occured</p>
            <p><i>{error.statusText || error.message}</i></p>
            {error.message ? 
            <img src={errorMessage} width='300' height='300' /> : 
            <img src={notFound} width='300' height='300' />}
        </div>
    )
}
