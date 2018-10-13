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
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                </FormGroup>
                <Button>Click here</Button>
            </Form>
        )
    }
}

export default ContactForm;