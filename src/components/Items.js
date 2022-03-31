import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Accordion } from 'react-bootstrap';

class Items extends Component {

  render() {
    console.log('items list', this.props.itemsList);
    return (
      <section>
        <h2>Items...</h2>
        <Accordion defaultActiveKey="0">
          
          {
            this.props.itemsList.map((item, idx) =>
            <>
              <Accordion.Item eventKey={idx} key={item._id}>
                <Accordion.Header>{item.name}</Accordion.Header>
                <Accordion.Body>
                  {item.description}
                </Accordion.Body>
              </Accordion.Item>
              <Button  onClick={ ()=> this.props.delete(item._id)}>Delete Item</Button>
              </>
            )
          }
        </Accordion>

      


      </section>
    );
  }
}



export default Items;
