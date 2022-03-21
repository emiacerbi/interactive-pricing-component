import { extendTheme } from '@chakra-ui/react'

const colors = {

    styles: {
        global: {
          body: {
            backgroundColor: 'red',
          },
        },
    },

    primary: {
        100: 'hsl(174, 77%, 80%)',
        200: 'hsl(174, 86%, 45%)',
        300: 'hsl(14, 92%, 95%)',
        400: 'hsl(15, 100%, 70%)',
        500: 'hsl(226, 100%, 87%)'
    }, 

    neutral: {
        100: 'hsl(230, 100%, 99%)',
        200: 'hsl(224, 65%, 95%)',
        300: 'hsl(223, 50%, 87%)',
        400: 'hsl(225, 20%, 60%)',
        500: 'hsl(227, 35%, 25%)'
    }
}

const components = {
    Divider: {

    }
}

const theme = extendTheme({ colors })

export default theme
