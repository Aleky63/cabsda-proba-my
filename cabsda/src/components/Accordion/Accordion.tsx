import { AccorPropsType, AccorTitlePropsType } from "../../types.tsx";

function Accordion(props: AccorPropsType) {
  return (
    <>
      <AccordTitle title={props.titleValue} />
      {!props.collapsed && <AccordBody />}
    </>
  );
}

// function Accordion(props: AccorPropsType) {
//   if (props.collapsed === true) {
//     return (
//       <>
//         <AccordTitle title={props.titleValue} />
//       </>
//     );
//   } else {
//     return (
//       <>
//         <AccordTitle title={props.titleValue} />
//         <AccordBody />
//       </>
//     );
//   }
// }

function AccordTitle(props: AccorTitlePropsType) {
  return <h3>{props.title}</h3>;
}

function AccordBody() {
  return (
    <>
      <ul>
        <li>1</li>
        <li>222</li>
        <li>33333</li>
      </ul>
    </>
  );
}

export default Accordion;
