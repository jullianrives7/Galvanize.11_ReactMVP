import Form from "react-bootstrap/Form";
import DeleteSvgBtn from "../buttons/DeleteSvgBtn";
import TrashCanBtn from "../buttons/TrashCanBtn";

const Row = (props) => {
  return (
    <tr>
      {/* <td>{props.listItem.id}</td> */}
      <td id="status-col">
        <Form.Check defaultChecked={props.listItem.completion_status} isValid />
      </td>
      <td>{props.listItem.list_item}</td>
      <td id="svg-cell">
        {/* <DeleteSvgBtn /> */}
        <TrashCanBtn tableName={props.parentTable} id={props.listItem.id} />
      </td>
    </tr>
  );
};

export default Row;
