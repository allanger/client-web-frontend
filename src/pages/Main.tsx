import {
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import FeedbackForm from '../components/FeedbackForm';
import photo from '../assets/Avatar.jpeg';
import { Colors } from '../consts';

export default function SplitScreen() {
    return (
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} backgroundColor={Colors.darkPurple}>
            <Helmet>
                <title>Bad Houseplants</title>
                <meta name="main" content="Oi!" />
                <meta name="theme-color" content="#008f68" />
            </Helmet>

            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={6} w={'full'} maxW={'lg'}>
                    <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                        <Text
                            as={'span'}
                            position={'relative'}
                            color={Colors.aqua}
                        >
                            Bad Houseplants
                        </Text>
                        <br />{' '}
                        <Text color={Colors.springBud} as={'span'}>
                            Mixing and production
                        </Text>{' '}
                    </Heading>
                    <Center w='100%' textColor={Colors.aqua}>
                        <div>
                            <Text>I am allanger: musician, sound engineer, beatmaker, and producer.</Text>
                            <br />
                            <Text>Since I don't have a huge portfolio and rich experience, I will do the first work for any artist for donation. That means, that if you're not happy with what I've done, you don't have to pay. Even if you are happy, you won't have to pay, so it's a win-win for you</Text>
                            <br />
                            <Text>If you want me to mix you track, use the form bellow.</Text>
                            <br />
                            <Text fontSize="14px">* I'm asking to share a demo recording, so I can understand the amount of work. After listening, I will get back to you, and we will take care about anything else</Text>
                        </div>
                    </Center>
                    <FeedbackForm />

                </Stack>
            </Flex>
            <Flex flex={1}>
                <Image
                    alt={'Login Image'}
                    fit={'cover'}
                    src={photo}
                    h="100vh"
                    w="100%"
                />
            </Flex>
        </Stack>
    );
}
