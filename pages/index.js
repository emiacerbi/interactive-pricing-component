import { useState } from 'react'

import { 
  Box, 
  Button, 
  Container, 
  Divider,
  Heading, 
  Image, 
  Slider, 
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Stack, 
  Switch,
  Text} from '@chakra-ui/react'
  
import Head from 'next/head'

export default function Home() {

  // Value of slider
  const [sliderValue, setSliderValue] = useState(16)
  
  const [pageViews, setPageViews] = useState("100K")
  const [amountValue, setAmountValue] = useState(16)
  const [isDiscountOn, setIsDiscountOn] = useState(0)


  const checkSliderValue = (val) => {

    // The app will render different values depending on the value of the slider. 

    setSliderValue(val)

    if(sliderValue <= 100 && sliderValue >= 81) {
      setPageViews("1M")
      setAmountValue(36)
    } 
    else if (sliderValue <= 80 && sliderValue >= 61){
      setPageViews("500k")
      setAmountValue(24)
    }
    else if (sliderValue <= 60 && sliderValue >= 41){
      setPageViews("100k")
      setAmountValue(16)
    }
    else if (sliderValue <= 40 && sliderValue >= 21){
      setPageViews("50k")
      setAmountValue(12)
    }
    else {
      setPageViews("10k")
      setAmountValue(8)
    }
  }

  return (

    <>
      <Head>
        <title>Interactive pricing component</title>
      </Head>

      <Container 
        alignItems='center' 
        backgroundImage='url(/images/bg-pattern.svg)' 
        backgroundPosition={['0px 0px', '0px 0px', '0px 0px', '-75px -400px']} 
        backgroundRepeat='no-repeat' 
        backgroundSize={['auto','auto', 'auto', 'cover']} 
        display='flex'  
        flexDir='column' fontFamily="'Manrope', sans-serif" 
        gap={10} 
        height='100vh' justifyContent='center'
        margin={0}
        maxWidth='100%'
        padding={6}
        paddingY={20}
      >

        <Stack 
          alignItems='center' 
          backgroundImage="url('/images/pattern-circles.svg')" 
          backgroundPosition='center'
          backgroundRepeat='no-repeat'
          backgroundSize='contain'
          display='flex'
          flexDirection={['row']}
          flexWrap='wrap'
          gap={1}
          justifyContent='center'
          paddingY={7}
          textAlign='center'
        >
            
          <Heading color='neutral.500' 
            fontFamily={"'Manrope', sans-serif"} 
            fontSize={['xl', '2xl', '3xl']} 
            fontWeight={700} 
            width='100%'
          >
            Simple, traffic-based pricing
          </Heading>
          <Text color='neutral.400' fontSize='md' maxWidth='fit-content'>Sign-up for our 30 day trial.</Text>
          <br  />
          <Text color='neutral.400' fontSize='md' maxWidth='fit-content'>No credit card required.</Text>
        </Stack>

        <Stack 
          background='#fff' 
          borderRadius={10} 
          boxShadow='2xl' 
          display='grid' 
          gap={[6, 6, 7]} 
          gridTemplateColumns={['1fr', '1fr', '1fr 1fr']} 
          maxWidth='540px'
          paddingY={10} 
          width='100%' 
        >

          <Heading 
            alignSelf='center' 
            color='neutral.400' 
            fontFamily={"'Manrope', sans-serif"}
            fontSize='sm' 
            fontWeight={700} 
            gridColumn={['span 2', 'span 2', '1 / 2']} 
            letterSpacing={2}
            order='-1'
            textAlign='center'
            textTransform='uppercase'
            >
              {pageViews} pageviews
          </Heading>

          <Slider 
            aria-label='slider-ex-1' 
            defaultValue={50} 
            gridColumn='span 2' 
            justifySelf='center' 
            maxW='445px' 
            order='0' 
            width='80%'
            onChange={(val) => checkSliderValue(val)}
          >

            <SliderTrack borderRadius={10} boxSize={2.5}>
              <SliderFilledTrack bg='primary.100' />
            </SliderTrack>
            
            <SliderThumb 
              _focus={
                {
                  boxShadow: 'rgba(93, 234, 220, .3) 0px 10px 20px 25px, rgba(93, 234, 220, .3) 0px 25px 12px;',
                  boxSize: '10',
                }
              }
              _hover={
                {
                  backgroundImage: "url('/images/icon-slider.svg')",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: '60%',
                  bg: '#78ebdc',
                }
              }
              _selected={
                {
                  bg: 'red',
                  boxShadow: 'rgba(93, 234, 220, .3) 0px 10px 20px 25px, rgba(93, 234, 220, .3) 0px 25px 12px;',
                }
              }
              backgroundImage="url('/images/icon-slider.svg')"
              backgroundPosition='center'
              backgroundRepeat='no-repeat'
              backgroundSize='60%'
              bg='primary.200'
 
              boxShadow='rgba(93, 234, 220, .3) 0px 10px 20px 25px, rgba(93, 234, 220, .3) 0px 25px 12px;'

              boxSize={10}

              overflow='hidden'

            />
          </Slider>
            
          <Text 
            alignItems='center' 
            color='neutral.500' 
            display='flex' 
            fontSize='4xl' 
            fontWeight={700} 
            gap={2} 
            gridColumn={['span 2', 'span 2', '2 / 3']} 
            justifyContent='center' 
            order={['0', '0', '-1']}
          >


            ${!isDiscountOn ? amountValue.toString().concat('.00') : (amountValue -= (amountValue * 0.25)).toString().concat('.00')} 
            
            <Text as='span' color='neutral.400' fontSize='md' fontWeight={500}>/ month</Text>

          </Text>

          <Box 
            alignItems='center' 
            color='neutral.400' 
            direction='row' 
            display='flex'
            fontSize={['xs']} 
            fontWeight={500} 
            gap={[2, 4, 5, 6]} 
            gridColumn='span 2' 
            justifyContent='center' 
            justifySelf='end' 
            marginY={12} 
            width='90%' 
          > 
          
            <Text>Monthly Billing</Text>
            <Switch 
              colorScheme='teal' 
              opacity='.7'
              size='lg'
              value={isDiscountOn}
              onChange={() => setIsDiscountOn(isDiscountOn === 1 ? 0 : 1)}
            />
            <Text alignItems='center' display='flex' gap={2}>
              Yearly Billing
              <Text as='span' background='primary.300' borderRadius='xl' color='primary.400' display={['block', 'block', 'none']} fontWeight={700} padding={1}>-25%</Text>
              <Text as='span' background='primary.300' borderRadius='xl' color='primary.400' display={['none', 'none', 'block']} fontWeight={700} padding={1}>-25% discount</Text>
            </Text>
            
          </Box>

          <Divider borderColor='lightgray' gridColumn='span 2'/>
          
          <Box alignItems='center' color='neutral.400' display={['flex', 'flex', 'grid']} flexDir='column' fontSize='sm' gap={3} gridColumn='span 2' gridTemplateColumns={'1fr 1fr'} justifyContent='center' paddingX={12} textAlign='center'>

            <Stack>
              <Text alignItems='center' display='flex' gap={2}>
                <Image alt='check icon' display='inline' src='/images/icon-check.svg'/>
                Unlimited websites
              </Text>
              <Text alignItems='center' display='flex' gap={2}>
                <Image alt='check icon' display='inline' src='/images/icon-check.svg'/>
                100% data ownership
              </Text>
              <Text alignItems='center' display='flex' gap={2}>
                <Image alt='check icon' display='inline' src='/images/icon-check.svg'/>
                Email reports
              </Text>
            </Stack>

            <Button
              _hover= {
                {
                  opacity: .8
                }
              }
              backgroundColor='neutral.500'
              borderRadius='2rem'
              color='neutral.300'
              fontSize='xs'
              marginLeft={['0', '0', 'auto']}
              marginTop={5}
              maxW='170px'
              paddingX={10}
              
              paddingY={5}
            >Start my trial</Button>
          </Box>
        </Stack>
      </Container>
    </>

  )
}
