import React, {useState} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import ListGroup from 'react-bootstrap/ListGroup';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import {Typeahead} from "react-bootstrap-typeahead";
import {WithContext as ReactTags} from 'react-tag-input';

import 'react-day-picker/lib/style.css';
import './stepTwo.css'

import {areaOptions, departamentoOptions, categoriaOptions} from "../../data";


export default function StepTwo(props) {

    const [categories, setCategories] = useState([]);
    let categoriesTypeaheadRef = undefined;

    const handleAddition = (event) => {
        console.log(event.target.value);
        const tag = event.target.value;

        if (tag !== '') {
            setCategories(categories => [...categories, {id: tag, text: tag}]);
        }
    };

    const handleDelete = (index) => {
        const tags = categories;
        tags.splice(index, 1);
        setCategories([...tags]);
    };

    return (
        <React.Fragment>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>CHAS</Navbar.Brand>
            </Navbar>
            <Container>
                <Row>
                    <br/>
                </Row>
                <Row>
                    <Col md={4}>
                        <p>CREAR APC</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <h2>Ingrese información de los </h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>Acuerdos Particulares Complementarios (APC)</h2>
                    </Col>
                </Row>
                <Form>

                    <Form.Group>
                        <Form.Label>Fecha de Inicio del APC</Form.Label>
                        <Form.Row>
                            <DayPickerInput/><CalendarTodayIcon/>
                        </Form.Row>
                        <Form.Text className="text-muted">
                            <br/>
                        </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Cadena</Form.Label>
                        <Form.Control as="select">
                            <option>Lider</option>
                            <option>Mayorista</option>
                            <option>MMPP</option>
                            <option>Todas</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Área</Form.Label>
                        <Typeahead required id="area-typeahed"
                                   onChange={(selected) => {
                                   }}
                                   options={areaOptions}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Departamento</Form.Label>
                        <Typeahead required id="depto-typeahead"
                                   onChange={(selected) => {
                                   }}
                                   options={departamentoOptions}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Categorias</Form.Label>
                        <ListGroup>
                            <ListGroup.Item>
                                <Typeahead id="categories" required allowNew={false}
                                           ref={(typeahead) => categoriesTypeaheadRef = typeahead}
                                           onKeyDown={(event) => {
                                               if (event.key === 'Enter') {
                                                   event.preventDefault();
                                                   handleAddition(event);
                                                   categoriesTypeaheadRef.getInstance().clear()
                                               }
                                           }}
                                           options={categoriaOptions}
                                />
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <ReactTags
                                        tags={categories}
                                        readOnly={false}
                                        handleDelete={(index) => {
                                            handleDelete(index)
                                        }}
                                    />
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Form.Check inline label="Todas las Categorias" value="si" required/>
                            </ListGroup.Item>
                        </ListGroup>
                    </Form.Group>
                </Form>
            </Container>
        </React.Fragment>
    );

}
