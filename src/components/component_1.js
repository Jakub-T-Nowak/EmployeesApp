export default function Component_1() {
    const clickEvent = () => {
        console.log("click...");
    };

    //props.children

    return (
        <div
            onClick={clickEvent}
            style={{ height: "50px", width: "500px", backgroundColor: "red" }}
        >
            <span>Click</span>
        </div>
    );
}
