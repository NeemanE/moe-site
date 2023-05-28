import React from 'react';
import { createClient } from '@sanity/client';
import { Card, CardGroup, Modal, Button } from 'react-bootstrap';

const client = createClient({
  projectId: '9z50pvjd',
  dataset: 'production',
  apiVersion: '2021-08-31', // use a UTC date string
  useCdn: true, // `false` if you want to ensure fresh data
});

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serviceCards: [],
      serviceModals: [],
      selectedModal: null,
    };
  }

  componentDidMount() {
    this.fetchServiceCards();
    this.fetchServiceModals();
  }

  fetchServiceCards = () => {
    client.fetch('*[_type == "serviceCard"]{ id, title, "imageUrl": image.asset->url } | order(id asc)').then((data) => {
      const serviceCards = data.map((card) => {
        return {
          id: card.id,
          title: card.title,
          image: card.imageUrl,
        };
      });
      this.setState({ serviceCards });
    });
  };



  fetchServiceModals = () => {
    client.fetch('*[_type == "serviceModal"]').then((data) => {
      const serviceModals = data.map((modal) => {
        const body = modal.body.map((block) => {
          if (block._type === 'block') {
            return {
              ...block,
              children: [
                ...block.children,
                {
                  _type: 'span',
                  text: '\n' // Add line break character for "line-break" decorator
                }
              ]
            };
          }
          return block;
        });
  
        return {
          id: modal.id,
          title: modal.title,
          body: body
        };
      });
  
      this.setState({ serviceModals });
    });
  };
  

  handleModalShow = (modalId) => {
    this.setState({ selectedModal: modalId });
  };

  handleModalClose = () => {
    this.setState({ selectedModal: null });
  };

  getModalTitle = (modalId) => {
    const { serviceModals } = this.state;
    const modal = serviceModals.find((modal) => modal.id === modalId);
    const title = modal ? modal.title : '';
    return title;
  };

  getModalBody = (modalId) => {
    const { serviceModals } = this.state;
    const modal = serviceModals.find((modal) => modal.id === modalId);
    const body = modal ? modal.body : '';
    return body;
  };



  render() {
    const { serviceCards, serviceModals, selectedModal } = this.state;

    const selectedModalData = serviceModals.find((modal) => modal.id === selectedModal);

    const groups = [];
    const cardsPerGroup = 3;
    for (let i = 0; i < serviceCards.length; i += cardsPerGroup) {
      groups.push(serviceCards.slice(i, i + cardsPerGroup));
    }


    return (
      <div>
        {groups.map((group, index) => (
          <CardGroup key={index} className={`service-cardgroup${index + 1}`}>
            {group.map((card, cardIndex) => (
              <Card
                key={card.id}
                className={`service-card${cardIndex < 2 ? ' card-margin' : ''}`}
                onClick={() => this.handleModalShow(card.id)}
              >
                <Card.Img
                  variant="top"
                  src={card.image}
                  style={{ height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    backgroundColor: '#0f3d62',
                    width: '100%',
                    position: 'absolute',
                    bottom: '0',
                  }}
                >
                  <Card.Title
                    style={{ textAlign: 'center', color: 'white', padding: '0.5rem' }}
                  >
                    {card.title}
                  </Card.Title>
                </div>
              </Card>
            ))}
          </CardGroup>
        ))}
        {selectedModal && (
          <Modal show={selectedModal !== null} onHide={this.handleModalClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                {this.getModalTitle(selectedModal)}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
  {serviceModals.find((modal) => modal.id === selectedModal)?.body.map((block, index) => (
    <p key={index}>{block.children.map((child, childIndex) => (
      <React.Fragment key={childIndex}>
        {child.text}
        {childIndex < block.children.length - 1 && <br />} {/* Add line break after each child */}
      </React.Fragment>
    ))}</p>
  ))}
</Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleModalClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )}

      </div>
    );
  }
}

export default Services;
