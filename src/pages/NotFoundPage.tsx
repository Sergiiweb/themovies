import {NavLink} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "100vh"
        }}>
            <div>NotFoundPage</div>
            <NavLink to={''}>To main</NavLink>
        </div>
    );
};

export {NotFoundPage};
