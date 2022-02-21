import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Header from '../components/Header'
import Meta from '../components/Meta'
import Partner from '../components/Partner'
import PopupButton from '../components/PopupButton'
import { getAllPartners, getInvitationPartners } from '../services/index'
import InvitationPopup from '../components/InvitationPopup'
import SendPopup from '../components/SendPopup'

const Home = () => {
  const [serviceData, setServiceData] = useState(null);
  const [show, setShow] = useState(false);
  const [sendForm, setSendForm] = useState(false);

  const handleClose = (type) => {
          setShow(false);
          setSendForm(false);
  }
  const handleShow = () => setShow(true);

  const handlePopState = (type) => {
    if(type === 'searchForm'){
      !show ? setShow(true) : setShow(false);
    }
    if(type === 'sendForm'){
      !sendForm ? setSendForm(true) : setSendForm(false);
    }
  }

  useEffect(() => {
    getAllPartners().then((res) => {
      const { partners } = res.data
      setServiceData(partners)
    })
  }, [])

  const getPartnersForInvitation = async(data) => {
    await getInvitationPartners(data).then((res) => {
      const { partners } = res.data
      handlePopState();
      setServiceData(partners)

    })
  }

  // page content
  const pageTitle = 'Home'
  const pageDescription = 'List Of Partners';

  return (
    <Container fluid>
      <Meta title={pageTitle} />
      <Header head={pageTitle} description={pageDescription} />
      <PopupButton handlePopup={handlePopState} />
      <InvitationPopup showModal={show} handleClose={handleClose} handleSearchForm={getPartnersForInvitation}/>
      <SendPopup showModal={sendForm} handleClose={handleClose} />
      <Partner partners={serviceData} />
    </Container>
  )
}

export default Home