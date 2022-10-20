import React from "react";
import ResumeItem from "../ResumeItem";
import * as c from "./styles";
import {
    FaRegArrowAltCircleUp,FaRegArrowAltCircleDown,FaDollarSign,
} from "react-icons/fa";

const Resume = ({ income, expense, total}) => {
    return(
        <c.container>
            <ResumeItem 
                title="Entradas"
                icon={FaRegArrowAltCircleUp}
                value={income}
            />
            <ResumeItem 
                title="Saidas"
                icon={FaRegArrowAltCircleDown}
                value={expense}
            />
            <ResumeItem title="Total" icon={FaDollarSign} value={total}/>
        </c.container>
    );
};

export default Resume;