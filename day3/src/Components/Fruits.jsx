 import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import "./Fruits.css"

function Fruits() {
  return (
    <Container style={{ marginTop:"15px"}}>
      <div className='fruits'>
        <div>
            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c8c0b982-8bbf-434f-aeac-cc9c07a7029a/2efebc20-3218-41ae-8317-df5903d4901d/hp_soft-drinks-beveragesStorefront_m_250722_560x378_01.jpg" alt="lemon" />
        </div>
        <div className='otherfruits'>
            <div>
                <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c8c0b982-8bbf-434f-aeac-cc9c07a7029a/2efebc20-3218-41ae-8317-df5903d4901d/hp_juices-beveragesStorefront_m_250722_02.jpg" alt="" />
            </div>
            <div>
                <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c8c0b982-8bbf-434f-aeac-cc9c07a7029a/2efebc20-3218-41ae-8317-df5903d4901d/hp_health-drink-beveragesStorefront_m_250722_03.jpg" alt="" />
            </div>
            <div>
                <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c8c0b982-8bbf-434f-aeac-cc9c07a7029a/2efebc20-3218-41ae-8317-df5903d4901d/hp_energy-driks-beveragesStorefront_m_250722_04.jpg" alt="" />
            </div>
            <div>
                <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c8c0b982-8bbf-434f-aeac-cc9c07a7029a/2efebc20-3218-41ae-8317-df5903d4901d/hp_coffee-beveragesStorefront_m_250722_05.jpg" alt="" />
            </div>
        </div>
      </div>
    </Container>
  );
}

export default Fruits;