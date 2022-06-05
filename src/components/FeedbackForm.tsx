import { Center, Input, InputGroup, Textarea, Text, VStack, Select, Button, Tooltip, useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import PostmanClientApi from '../api/client';
import { Colors } from '../consts';
import { Email } from '../proto/proto/postman_v1_pb';

function FeedbackForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [link, setLink] = useState("");
  const [toastError, setToastError] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const toast = useToast()

  useEffect(() => {
    if (toastError) {
      toast({
        title: "Something went wrong",
        description: toastError,
        status: 'error',
        duration: 9000,
        isClosable: true
      });
    }
    if (toastMessage) {
      toast({
        title: "Big ups!",
        description: toastMessage,
        status: 'success',
        duration: 9000,
        isClosable: true

      })
    }
  }, [toastError, toastMessage, toast]);
  const handleSubmit = async (evt: any) => {
    evt.preventDefault()
    let res = await PostmanClientApi.create(name, email, "Mixing", message, link);
    if (res.err.length > 0) {
      console.log(res.err)
      setToastError(res.err)
    } else {
      setToastMessage("The email has been sent! I'll get back to you very soon")
    }
    setToastError("")
    setToastMessage("")
  }

  return (
    <Center h='100%' w="100%">
      <VStack w="80%">
        <Tooltip label='I will use it to answer only'>
          <VStack
            align='stretch'
            w="100%"
          >
            <Text mb='5px'>Your Email:</Text>
            <InputGroup size='md'>
              <Input placeholder='Your Email' value={email} onChange={e => setEmail(e.target.value)} borderColor={Colors.silver} textColor={Colors.springBud} _placeholder={{ color: Colors.silver }} focusBorderColor={Colors.springBud} />
            </InputGroup>
          </VStack>
        </Tooltip>

        <VStack
          align='stretch'
          w="100%"
        >
          <Text mb='5px'>Your name:</Text>
          <InputGroup size='md'>
            <Input placeholder='Your Name' value={name} onChange={e => setName(e.target.value)} borderColor={Colors.silver} textColor={Colors.springBud} _placeholder={{ color: Colors.silver }} focusBorderColor={Colors.springBud} />
          </InputGroup>
        </VStack>

        {/* <VStack align='stretch' w="100%"> */}
        {/* <Text mb='5px'>What would you like?</Text> */}
        {/* <Select size='md' onChange={e => setService(e.target.value)}> */}
        {/* <option value="Normal Mixing">Normal Mixing</option> */}
        {/* <option value="Fast Mixing">Fast Mixing</option> */}
        {/* <option value="Beat from the stock">Beat from the stock</option> */}
        {/* <option value="Custom beat/arrangement">Custom beat/arrangement</option> */}
        {/* </Select> */}
        {/* </VStack> */}

        <VStack
          align='stretch'
          w="100%"
        >
          <Text mb='5px'>Link to demo:</Text>
          <InputGroup size='md'>
            <Input placeholder='For example, a link to a private SoundCloud track' value={link} onChange={e => setLink(e.target.value)} borderColor={Colors.silver} textColor={Colors.springBud} _placeholder={{ color: Colors.silver }} focusBorderColor={Colors.springBud} />
          </InputGroup>
        </VStack>

        <VStack
          align='stretch'
          w="100%"
        >
          <Text mb='5px'>Message:</Text>
          <InputGroup size='md'>
            <Textarea resize="none" placeholder='Provide some information about what you want me to do' value={message} onChange={e => setMessage(e.target.value)} borderColor={Colors.silver} textColor={Colors.springBud} _placeholder={{ color: Colors.silver }} focusBorderColor={Colors.springBud} />
          </InputGroup>
        </VStack>
        <Button size='md' width='100%' onClick={handleSubmit}>
          Send email
        </Button>
      </VStack>
    </Center>
  )
}

export default FeedbackForm;