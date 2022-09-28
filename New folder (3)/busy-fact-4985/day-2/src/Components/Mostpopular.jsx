import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Mostpopular() {
  return (
    <Container style={{ marginTop:"15px"}}>
      <Row md={4} >
      <Col >
            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c8c0b982-8bbf-434f-aeac-cc9c07a7029a/9f16f7a4-73e4-425e-9fe0-cf222d1ff46b/hp_supplements-stro-mostpopularStorefront_m_480_250922_01.jpg" alt="pic" />
        </Col>
        <Col>
            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c8c0b982-8bbf-434f-aeac-cc9c07a7029a/9f16f7a4-73e4-425e-9fe0-cf222d1ff46b/hp_ayurveda-mostpopularStorefront_m_480_250922_02.jpg" alt="pic" />
        </Col>
        <Col>
            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c8c0b982-8bbf-434f-aeac-cc9c07a7029a/9f16f7a4-73e4-425e-9fe0-cf222d1ff46b/hp_festive-prep-mostpopularStorefront_m_480_250922_03.jpg" alt="pic" />
        </Col>
        <Col>
            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c8c0b982-8bbf-434f-aeac-cc9c07a7029a/9f16f7a4-73e4-425e-9fe0-cf222d1ff46b/hp_early-wintermostpopularStorefront_m_480_250922_04.jpg" alt="pic" />
        </Col>
        
      </Row>
    </Container>
  );
}

export default Mostpopular;