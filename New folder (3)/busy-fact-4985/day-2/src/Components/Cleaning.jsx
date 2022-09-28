import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Cleaning() {
  return (
    <Container style={{marginTop:"20px"}}>
      <Row md={4}>
        <Col>
            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c8c0b982-8bbf-434f-aeac-cc9c07a7029a/395b128c-17b4-4aca-97b8-8fdf91887c9e/hp_cleaners-disinfectcleaningStorefront_m_480_250922_01.jpg" alt="pic" />
        </Col>
        <Col>
            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c8c0b982-8bbf-434f-aeac-cc9c07a7029a/395b128c-17b4-4aca-97b8-8fdf91887c9e/hp_setergents-fab-cleaningStorefront_m_480_250922_02.jpg " alt="pic" />
        </Col>
        <Col>
            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c8c0b982-8bbf-434f-aeac-cc9c07a7029a/395b128c-17b4-4aca-97b8-8fdf91887c9e/hp_kitchen-wipe-cleaningStorefront_m_480_250922_03.jpg" alt="pic" />
        </Col>
        <Col>
            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c8c0b982-8bbf-434f-aeac-cc9c07a7029a/395b128c-17b4-4aca-97b8-8fdf91887c9e/hp_fresheners-repellcleaningStorefront_m_480_250922_04.jpg" alt="pic" />
        </Col>
        
      </Row>
    </Container>
  );
}

export default Cleaning;