import Envelope from './envelope';
import {
    Flex,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';

export default function WorldMailbox() {
    const letters = useSelector((state) => state.letters);

    return (
        <Flex sx={styles.mailbox}>
            {letters.map((letter) => (
                <Envelope key={letter._id} letter={letter} />
            ))}
        </Flex>
    )
}

const styles = {
    mailbox: {
        minH: 'xl',
        bg: 'gray.50',
        py: 8,
        mx: 4,
        flex: 1,
        flexFlow: 'wrap',
        justifyContent: 'space-around',
    }
  }
  