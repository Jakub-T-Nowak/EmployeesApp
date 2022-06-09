import { click } from "@testing-library/user-event/dist/click";

export default function Component_1(props) {
    console.log("Component_1");
  let name = props.name;

  const clickEvent = () => {
    console.log("click...");
    props.functionProp();
  }

  return (
    <div
      onClick={clickEvent}
      style={{ height: "50px", width: "500px", backgroundColor: "red" }}
    >
      <span>{name}</span>
    </div>
  );
}
