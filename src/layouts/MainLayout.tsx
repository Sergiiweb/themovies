import {Outlet} from "react-router-dom";

import {Header} from "../components";
import {useAppSelector} from "../hooks";

const MainLayout = () => {
    const {currentTheme} = useAppSelector(state => state.theme);

    return (
        <div id={currentTheme}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};
