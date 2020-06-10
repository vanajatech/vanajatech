import React from "react"

import { Input, FormButton } from "../components/inputs"
import { Card, CardHeader } from "../components/card"
import Dots from "../images/dots.svg"

const ContactForm = ({ name, title, submitText }) => (
  <Card className="relative text-center">
    <Dots className="absolute left-0 top-0 w-16 m-4" />
    <CardHeader>{title}</CardHeader>
    <form
      name={name}
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name={name} value="contact" />
      <Input
        type="email"
        name="email"
        placeholder="john.doe@email.com"
        className="mr-2"
      />
      <FormButton type="submit">{submitText}</FormButton>
    </form>
    <Dots className="absolute right-0 bottom-0 w-16 m-4" />
  </Card>
)

export default ContactForm
