import { useNavigate } from "react-router-dom";


function Button ({university})  {
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate('/details',{state:{university}})
    }
    return (
        <div>
        <button onClick={(handleClick)}>Details</button>
        </div>
    );
};

export default Button;