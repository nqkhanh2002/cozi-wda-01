import {
    Flex,
    Text,
    Button,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import MenuLink from './menuLink';

export default function Menu() {
    return (
        <Flex sx={styles.menu}>
            <MenuLink to='home' text='Bể thư thế giới' />
            <Text>Bể thư tâm tình</Text>
            <MenuLink to='inbox' text='Hộp thư đến' />
            <MenuLink to='outbox' text='Hộp thư đi' />
            <Text>Thư quan trọng</Text>
            <Text>Thư nháp</Text>
            <Link to='/edit'>
                <Button variant='filled' sx={styles.btnCompose}>
                    Viết thư
                </Button>
            </Link>
        </Flex>
    )
}

const styles = {
    menu: {
        w: '12rem',
        flexDirection: 'column',
        pl: {
            md: 8,
            lg: 16,
        },
        p: {
            mb: 4,
        },
        a: {
            mb: 4,
            _hover: {
                color: 'blue.600',
            }
        },
    },
}