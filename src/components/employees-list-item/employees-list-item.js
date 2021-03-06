import "./employees-list-item.css";
import { Container, Row, Col } from "react-bootstrap";

const EmployeesListItem = (props) => {
  const { name, salary, onDelete, onToggleProp, increase, rise } = props;

  let classNames = "list-group-item d-flex justify-content-between";
  if (increase) {
    classNames += " increase";
  }
  if (rise) {
    classNames += " like";
  }

  return (
    <Container>
      <Row>
        <li className={classNames}>
          <Col>
            <span
              className="list-group-item-label"
              onClick={onToggleProp}
              data-toggle="rise"
              style={{ fontSize: 30 }}
            >
              {name}
            </span>
          </Col>
          <Col>
            <input
              type="text"
              className="list-group-item-input"
              defaultValue={salary + "$"}
            />
          </Col>
          <Col>
            <div className="d-flex justify-content-center align-items-center">
              <button
                type="button"
                className="btn-cookie btn-sm "
                onClick={onToggleProp}
                data-toggle="increase"
              >
                <i className="fas fa-cookie"></i>
              </button>

              <button
                type="button"
                className="btn-trash btn-sm "
                onClick={onDelete}
              >
                <i className="fas fa-trash"></i>
              </button>
              <i className="fas fa-star"></i>
            </div>
          </Col>
        </li>
      </Row>
    </Container>
  );
};

export default EmployeesListItem;
