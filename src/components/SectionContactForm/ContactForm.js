import React, { Component } from 'react';

import Form from '@bootstrap-styled/v4/lib/Form';
import FormGroup from '@bootstrap-styled/v4/lib/Form/FormGroup';
import Button from '@bootstrap-styled/v4/lib/Button';
import Input from '@bootstrap-styled/v4/lib/Input';
import Label from '@bootstrap-styled/v4/lib/Label';



class ContactForm extends Component {

    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="exampleEmail" className="mb-0">Name</Label>
                    <Input type="text" name="email" id="exampleEmail" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail" className="mb-0">Email address</Label>
                    <Input type="email" name="email" id="exampleEmail" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail" className="mb-0">Message</Label>
                    <Input type="textarea" name="message" id="message" rows={10} />
                </FormGroup>
                <Button className="w-100">Send Message</Button>
            </Form>
        )
    }
}

export default ContactForm;