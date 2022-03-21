import { 
  Box, 
  Container, 
  Divider, 
  Image,
  Heading, 
  Stack, 
  Switch, 
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Text, 
  propNames,
  Button} from '@chakra-ui/react'


export default function Home() {
  return (

    <>
      <Container display='flex' flexDir='column' height='100vh' maxWidth='100%' alignItems='center' justifyContent='center'  gap={14} fontFamily="'Manrope', sans-serif" padding={6} paddingY={20} margin={0}
      backgroundImage='url(/images/bg-pattern.svg)'
      backgroundRepeat='no-repeat'
      backgroundSize='contain'
      >

        <Stack 
          // padding={4} 
          backgroundImage="url('/images/pattern-circles.svg')" 
          backgroundPosition='center'
          backgroundSize='contain'
          backgroundRepeat='no-repeat'
          height='15rem'

          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
        >
          <Heading color='neutral.500' fontSize='2xl' >
            Simple, traffic-based pricing
          </Heading>
          <Text color='neutral.400' fontSize='xl'>Sign-up for our 30 day trial.</Text>
          <Text color='neutral.400' fontSize='xl'>No credit card required.</Text>
        </Stack>

        <Stack width='100%' maxWidth='450px' background='#fff' paddingY={10} borderRadius={10} display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap={6} boxShadow='lg'>
          <Heading 
            textTransform='uppercase' 
            color='neutral.400' 
            fontSize='xl' 
            letterSpacing={2} 
            fontWeight={700} 
            textAlign='center'>100k pageviews
          </Heading>

          <Slider aria-label='slider-ex-1' defaultValue={30} minH='16' maxW='85%'>
            <SliderTrack
              borderRadius={10}
              boxSize={3}
            >
              <SliderFilledTrack 
                bg='primary.100'
              />
            </SliderTrack>
            <SliderThumb 
              boxSize={10}
              bg='primary.200'
              backgroundImage="url('/images/icon-slider.svg')"
              backgroundRepeat='no-repeat'
              backgroundPosition='center'
              backgroundSize='60%'
              boxShadow='rgba(93, 234, 220, .3) 0px 10px 20px 25px, rgba(93, 234, 220, .3) 0px 25px 12px;'
              overflow='hidden'
 
              _focus={
                {
                  boxShadow: 'rgba(93, 234, 220, .3) 0px 10px 20px 25px, rgba(93, 234, 220, .3) 0px 25px 12px;',
                  boxSize: '10',
                }
              }

              _hover={
                {
                  bg: '#78ebdc',
                  backgroundImage: "url('/images/icon-slider.svg')",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: '60%',
                }
              }

              _selected={
                {
                  boxShadow: 'rgba(93, 234, 220, .3) 0px 10px 20px 25px, rgba(93, 234, 220, .3) 0px 25px 12px;',
                  bg: 'red',
                }
              }

            />
          </Slider>


          <Text display='flex' alignItems='center' gap={2} fontSize='4xl' fontWeight={700} color='neutral.500' justifyContent='center'>
            $16.00 
            <Text color='neutral.400' fontWeight={500} fontSize='lg' as='span'>/month</Text>
          </Text>

          <Box display='flex' direction='row' justifyContent='center' gap={3} color='neutral.400' fontWeight={500} alignItems='center' fontSize={14}>
            <Text>Monthly Billing</Text>
            <Switch 
              size='lg' 
              colorScheme='teal'
              opacity='.7'
            />
            <Text>Yearly Billing</Text>
            <Text as='span' color='primary.400' background='primary.300' borderRadius='xl' padding={1} fontWeight={700}>-25%</Text>
          </Box>

          <Divider borderColor='lightgray' />
          
          <Box color='neutral.400' display='flex' flexDir='column' gap={3} justifyContent='center' alignItems='center'>
            <Text display='flex' alignItems='center' gap={2}>
              <Image src='/images/icon-check.svg' display='inline'/>
              Unlimited websites
            </Text>
            <Text display='flex' alignItems='center' gap={2}>
              <Image src='/images/icon-check.svg' display='inline'/>
              100% data ownership
            </Text>
            <Text display='flex' alignItems='center' gap={2}>
              <Image src='/images/icon-check.svg' display='inline'/>
              Email reports
            </Text>

            <Button
              borderRadius='2rem'
              backgroundColor='neutral.500'
              color='neutral.300'
              fontSize='xs'
              paddingX={10}
              paddingY={5}
              marginTop={5}
              
              _hover= {
                {
                  opacity: .8
                }
              }

            >Start my trial</Button>
          </Box>
        </Stack>



        

      </Container>
    </>

  )
}
