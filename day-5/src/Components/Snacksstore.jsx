import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Snackstore() {
  return (
    <Container style={{marginTop:"20px"}}>
      <Row md={4}>
        <Col>
            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c8c0b982-8bbf-434f-aeac-cc9c07a7029a/e4cc856f-7256-455a-bedb-8b661a921efc/hp_namkeens-snacksStorefront_m_480_250922_01.jpg" alt="pic" />
        </Col>
        <Col>
            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c8c0b982-8bbf-434f-aeac-cc9c07a7029a/e4cc856f-7256-455a-bedb-8b661a921efc/hp_frozon-snacks-snacksStorefront_m_480_250922_02.jpg " alt="pic" />
        </Col>
        <Col>
            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c8c0b982-8bbf-434f-aeac-cc9c07a7029a/e4cc856f-7256-455a-bedb-8b661a921efc/hp_soups-noodles-snacksStorefront_m_480_250922_03.jpg" alt="pic" />
        </Col>
        <Col>
            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c8c0b982-8bbf-434f-aeac-cc9c07a7029a/e4cc856f-7256-455a-bedb-8b661a921efc/hp_biscuits-cookies-snacksStorefront_m_480_250922_04.jpg" alt="pic" />
        </Col>
        
      </Row>
    </Container>
  );
}

export default Snackstore;