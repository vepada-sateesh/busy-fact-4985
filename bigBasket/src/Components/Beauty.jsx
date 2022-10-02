import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import "./Beauty.css"

function Beauty() {
  return (
    <Container style={{ marginTop:"15px"}}>
      <div className='makeup'>
        <div>
            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c8c0b982-8bbf-434f-aeac-cc9c07a7029a/de7a477b-15c2-4da1-92b2-5ce3830565f1/hp_everyday-make-beautyStorefront_m_250922_560x378_01.jpg" alt="lemon" />
        </div>
        <div className='liquid'>
            <div>
                <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c8c0b982-8bbf-434f-aeac-cc9c07a7029a/de7a477b-15c2-4da1-92b2-5ce3830565f1/hp_min-40-beautyStorefront_m_250922_275x184_02.jpg" alt="" />
            </div>
            <div>
                <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c8c0b982-8bbf-434f-aeac-cc9c07a7029a/de7a477b-15c2-4da1-92b2-5ce3830565f1/hp_scent-ful-beautyStorefront_m_250922_275x184_03.jpg" alt="" />
            </div>
            <div>
                <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c8c0b982-8bbf-434f-aeac-cc9c07a7029a/de7a477b-15c2-4da1-92b2-5ce3830565f1/hp_under-199--beautyStorefront_m_250922_275x184_04.jpg" alt="" />
            </div>
            <div>
                <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c8c0b982-8bbf-434f-aeac-cc9c07a7029a/de7a477b-15c2-4da1-92b2-5ce3830565f1/hp_bathing-beautyStorefront_m_250922_275x184_05.jpg" alt="" />
            </div>
        </div>
      </div>
    </Container>
  );
}

export default Beauty;