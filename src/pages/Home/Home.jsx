import React from "react";
import Button from "../../components/Button/Button";

function handleChange() {
    alert`succes`;
}
function Home() {
    return (
        <div>
            <Button function={handleChange} value="Click Me >" />
        </div>
    );
}

export default Home;
