import React, {useState} from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import {Typeahead} from 'react-bootstrap-typeahead';

export default function StepOne(props) {

    const [validated, setValidated] = useState(false);
    const [providerSelectedOption, setProviderSelectedOption] = useState('no');
    const [tcgaSelectedOption, setTcgaSelectedOption] = useState('no');

    const handleSubmit = event => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    const handleProviderOptionChange = (changeEvent) => {
        setProviderSelectedOption(changeEvent.target.value)
    };

    const handleTcgaOptionChange = (changeEvent) => {
        setTcgaSelectedOption(changeEvent.target.value)
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
                        <h2>Ingrese la información del Proveedor</h2>
                    </Col>
                </Row>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Rol Unico Tributario</Form.Label>
                                <Form.Control type="text" required/>
                                <Form.Text className="text-muted">
                                    ######## - K (0-9 / K)
                                </Form.Text>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Nombre o Razon Social</Form.Label>
                                <Form.Control type="text" required/>
                                <Form.Text className="text-muted">
                                    0 / 100
                                </Form.Text>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Giro Comercial</Form.Label>
                                <Form.Control type="text" required/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Direccion de Proveedor</Form.Label>
                                <Typeahead required
                                           onChange={(selected) => {
                                           }}
                                           options={[
                                               "Avenida Arzobispo Valdivieso 0284, Av Perurecoleta",
                                               "Prat 814 Of.303",
                                               "Miraflores 8390 Renca – Santiago (2)5847676 Chile , Vitacura",
                                               "Presidente José Pedro Alessandri 14 Ñuñoa - Santiago(2)2237585 Chile , Providencia",
                                           ]}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                            <Form.Group required>
                                <Form.Label>Comuna</Form.Label>
                                <Typeahead
                                    onChange={(selected) => {
                                    }}
                                    options={["Santiago",
                                        "Ñuñoa",
                                        "Maipu",
                                        "Quilicura",
                                        "Peñalolén",
                                        "Huechuraba"
                                    ]}
                                />
                            </Form.Group>
                            <Form.Group required>
                                <Form.Label>Region</Form.Label>
                                <Typeahead
                                    onChange={(selected) => {
                                    }}
                                    options={["Metropolitana",
                                        "Biobío",
                                        "Coquimbo",
                                        "La Araucanía",
                                        "Valparaíso",
                                        "Maule",
                                        "Atacama",
                                    ]}
                                />
                            </Form.Group>
                        </Col>
                        <Col xs={6}>
                            <Form.Group>
                                <Form.Label>Ciudad</Form.Label>
                                <Typeahead required={true}
                                           onChange={(selected) => {
                                           }}
                                           options={["Santiago",
                                               "Valparaíso",
                                               "Concepción",
                                               "Antofagasta",
                                               "Puerto Montt"]}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                            <Form.Group>
                                <Form.Label>Numero de Telefono</Form.Label>
                                <Form.Control type="text" required/>
                            </Form.Group>
                        </Col>
                        <Col xs={6}>
                            <Form.Group>
                                <Form.Label>Email Generico</Form.Label>
                                <Form.Control type="email" required/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <Dropdown.Divider/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Rol Único Tributario del Representante Legal </Form.Label>
                                <Form.Control type="text" required/>
                                <Form.Text className="text-muted">
                                    ######## - K (0-9 / K)
                                </Form.Text>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Nombre de Representante Legal </Form.Label>
                                <Form.Control type="text" required/>
                                <Form.Text className="text-muted">
                                    0 / 100
                                </Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <Dropdown.Divider/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label>Proveedor de Menor Tamaño</Form.Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={3}>
                            <Form.Check inline type="radio" label="Si" value="si" required
                                        checked={providerSelectedOption === 'si'}
                                        onChange={handleProviderOptionChange}/>
                        </Col>
                        <Col xs={3}>
                            <Form.Check inline type="radio" label="No" value="no"  required
                                        checked={providerSelectedOption === 'no'}
                                        onChange={handleProviderOptionChange}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label>Proveedor ejerce opción claúsula 11.3 de los TCGA </Form.Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={3}>
                            <Form.Check inline type="radio" label="Si" value="si" required
                                        checked={tcgaSelectedOption === 'si'}
                                        onChange={handleTcgaOptionChange}/>
                        </Col>
                        <Col xs={3}>
                            <Form.Check inline type="radio" label="No" value="no" required
                                        checked={tcgaSelectedOption === 'no'}
                                        onChange={handleTcgaOptionChange}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={{span: 3, offset: 10}}>
                            <Button variant="primary" type="submit">SIGUIENTE</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </React.Fragment>
    );

}
