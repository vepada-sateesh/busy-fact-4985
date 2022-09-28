import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function RowColLayoutColWidthBreakpointExample() {
  return (
    <Container style={{marginTop:"20px"}}>
      <Row md={6}>
        <Col>
            <img src="https://www.bigbasket.com/media/uploads/banner_images/hp_eggs-topstrip_m_250922_01.png" alt="pic" />
        </Col>
        <Col>
            <img src="https://www.bigbasket.com/media/uploads/banner_images/hp_neupass-topstrip_m_250922_02.png " alt="pic" />
        </Col>
        <Col>
            <img src="https://www.bigbasket.com/media/uploads/banner_images/hp_ayurveda-topstrip_m_250922_03.png" alt="pic" />
        </Col>
        <Col>
            <img src="https://www.bigbasket.com/media/uploads/banner_images/hp_eggs-topstrip_m_250922_01.png" alt="pic" />
        </Col>
        <Col>
            <img src="https://www.bigbasket.com/media/uploads/banner_images/hp_dow-topstrip_m_250922_05.png" alt="pic" />
        </Col>
        <Col>
            <img src="https://www.bigbasket.com/media/uploads/banner_images/hp_combo-storetopstrip_m_250922_06.png" alt="pic" />
        </Col>
        
      </Row>
    </Container>
  );
}

export default RowColLayoutColWidthBreakpointExample;