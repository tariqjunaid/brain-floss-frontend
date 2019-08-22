import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Col, Row, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class ProfileForm extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         modal: false
      };
      this.toggle = this.toggle.bind(this);
   }
   toggle() {
      this.setState(prevState => ({
         modal: !prevState.modal
      }));
   }

   render() {
      return (
         <div>
            <Button color="danger" onClick={this.toggle}>Account Settings</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
               <ModalHeader toggle={this.toggle}>Update Profile</ModalHeader>
               <ModalBody>
                  <Form onChange={this.props.getInput}>
                     <Row form>
                        <Col md={6}>
                           <FormGroup>
                              <Label for="firstname">First Name</Label>
                              <Input type="text" name="firstname" id="firstname" placeholder="firstname" />
                           </FormGroup>
                        </Col>
                        <Col md={6}>
                           <FormGroup>
                              <Label for="lastname">Last Name</Label>
                              <Input type="text" name="lastname" id="lastname" placeholder="lastname" />
                           </FormGroup>
                        </Col>
                     </Row>
                     <Row form>
                        <Col md={6}>
                           <FormGroup>
                              <Label for="username">Username</Label>
                              <Input type="text" name="username" id="username" placeholder="username" />
                           </FormGroup>
                        </Col>
                        <Col md={6}>
                           <FormGroup>
                              <Label for="password">Password</Label>
                              <Input type="password" name="password" id="password" placeholder="password" />
                           </FormGroup>
                        </Col>
                     </Row>
                     <Row form>
                        <Col md={6}>
                           <FormGroup>
                              <Label for="email">Email</Label>
                              <Input type="email" name="email" id="email" placeholder="email" />
                           </FormGroup>
                        </Col>
                        <Col md={4}>
                           <FormGroup>
                              <Label for="phone">Phone</Label>
                              <Input type="tel" name="phone" id="phone" placeholder="(555)555-5555" maxLength='10' />
                           </FormGroup>
                        </Col>
                        <Col md={2}>
                           <FormGroup>
                              <Label for="age">Age</Label>
                              <Input type="number" name="age" id="age" placeholder="age" />
                           </FormGroup>
                        </Col>
                     </Row>
                     <FormGroup row>
                        <Label for="avatar" sm={2}>Avatar</Label>
                        <Col sm={10}>
                           <Input type="file" name="avatar" id="avatar" />
                           <FormText color="muted">Upload Profile Avatar</FormText>
                        </Col>
                     </FormGroup>
                  </Form>
          </ModalBody>
               <ModalFooter>
                  <Button color="primary" onClick={this.toggle}>Submit</Button>{' '}
                  <Button color="secondary" onClick={this.toggle}>Cancel</Button>
               </ModalFooter>
            </Modal>
         </div>
      );
   }
}

export default ProfileForm;