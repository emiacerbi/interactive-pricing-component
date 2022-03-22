import { useState, useEffect } from 'react'

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
  Text, 
  Button,
  SliderMark} from '@chakra-ui/react'
  
import Head from 'next/head'


export default function Home() {

  // Value of slider
  const [sliderValue, setSliderValue] = useState(50)
  
  const [pageViews, setPageViews] = useState("")
  const [amountValue, setAmountValue] = useState("50")
  const [isDiscountOn, setIsDiscountOn] = useState(0)


  const checkSliderValue = () => {

    // The app will render different values depending on the value of the slider. 

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

  // Only re renders the app when sliderValue changes.
  // useEffect(() => {

    
  // }, [sliderValue])
  
  useEffect(() => {
    
      checkSliderValue()

  }, [sliderValue])
  

  
  return (

    <>
      <Head>
        <title>Interactive pricing component</title>
      </Head>

      <Container 
        display='flex' 
        flexDir='column' 
        height='100vh' 
        maxWidth='100%' 
        alignItems='center' 
        justifyContent='center'  
        gap={10} fontFamily="'Manrope', sans-serif" 
        padding={6} 
        paddingY={20} margin={0}
        backgroundImage='url(/images/bg-pattern.svg)'
        backgroundRepeat='no-repeat'
        backgroundSize={['auto','auto', 'auto', 'cover']}
        backgroundPosition={['0px 0px', '0px 0px', '0px 0px', '-75px -400px']}
      >

        <Stack 
          paddingY={7} 
          backgroundImage="url('/images/pattern-circles.svg')" 
          backgroundPosition='center'
          backgroundSize='contain'
          backgroundRepeat='no-repeat'
          display='flex'
          flexDirection={['row']}
          flexWrap='wrap'
          alignItems='center'
          justifyContent='center'
          textAlign='center'
          gap={1}
        >
            
          <Heading color='neutral.500' 
            fontSize={['xl', '2xl', '3xl']} 
            fontWeight={700} 
            fontFamily={"'Manrope', sans-serif"} 
            width='100%'
          >
            Simple, traffic-based pricing
          </Heading>
          <Text color='neutral.400' fontSize='md' maxWidth='fit-content'>Sign-up for our 30 day trial.</Text>
          <br  />
          <Text color='neutral.400' fontSize='md' maxWidth='fit-content'>No credit card required.</Text>
        </Stack>

        <Stack 
          width='100%' 
          maxWidth='540px' 
          background='#fff' 
          paddingY={10} 
          borderRadius={10} 
          display='grid' 
          gridTemplateColumns={['1fr', '1fr', '1fr 1fr']}
          gap={[6, 6, 7]} 
          boxShadow='2xl' 
        >

          <Heading 
            textTransform='uppercase' 
            color='neutral.400' 
            fontFamily={"'Manrope', sans-serif"}
            fontSize='sm' 
            letterSpacing={2} 
            fontWeight={700} 
            textAlign='center'
            order='-1'
            gridColumn={['span 2', 'span 2', '1 / 2']}
            alignSelf='center'
            >
              {pageViews} pageviews
          </Heading>

          <Slider 
            aria-label='slider-ex-1' 
            defaultValue={50} 
            width='80%' 
            maxW='445px' 
            order='0' 
            gridColumn='span 2' 
            justifySelf='center'
            onChange={(val) => setSliderValue(val)}
          >

            <SliderTrack borderRadius={10} boxSize={2.5}>
              <SliderFilledTrack bg='primary.100' />
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
            
          <Text 
            display='flex' 
            alignItems='center' 
            gap={2} 
            fontSize='4xl' 
            fontWeight={700} 
            color='neutral.500' 
            justifyContent='center' 
            order={['0', '0', '-1']} 
            gridColumn={['span 2', 'span 2', '2 / 3']}
          >


            ${!isDiscountOn ? amountValue.toString().concat('.00') : (amountValue -= (amountValue * 0.25)).toString().concat('.00')} 
            
            <Text color='neutral.400' fontWeight={500} fontSize='md' as='span'>/ month</Text>

          </Text>

          <Box 
            display='flex' 
            direction='row' 
            justifyContent='center' 
            gap={[2, 4, 5, 6]} c
            olor='neutral.400' 
            fontWeight={500} 
            alignItems='center' 
            fontSize={['xs']} 
            width='90%' 
            gridColumn='span 2' 
            justifySelf='end' 
            marginY={12} 
          > 
          
            <Text>Monthly Billing</Text>
            <Switch 
              size='lg' 
              colorScheme='teal'
              opacity='.7'
              value={isDiscountOn}
              onChange={() => setIsDiscountOn(isDiscountOn === 1 ? 0 : 1)}
            />
            <Text display='flex' alignItems='center' gap={2}>
              Yearly Billing
              <Text as='span' color='primary.400' background='primary.300' borderRadius='xl' padding={1} fontWeight={700} display={['block', 'block', 'none']}>-25%</Text>
              <Text as='span' color='primary.400' background='primary.300' borderRadius='xl' padding={1} fontWeight={700} display={['none', 'none', 'block']}>-25% discount</Text>
            </Text>
            
          </Box>

          <Divider borderColor='lightgray' gridColumn='span 2'/>
          
          <Box color='neutral.400' display={['flex', 'flex', 'grid']} gridTemplateColumns={'1fr 1fr'} textAlign='center' flexDir='column' gap={3} justifyContent='center' alignItems='center' fontSize='sm' gridColumn='span 2' paddingX={12}>

            <Stack>
              <Text display='flex' alignItems='center' gap={2}>
                <Image src='/images/icon-check.svg' alt='check icon' display='inline'/>
                Unlimited websites
              </Text>
              <Text display='flex' alignItems='center' gap={2}>
                <Image src='/images/icon-check.svg' alt='check icon' display='inline'/>
                100% data ownership
              </Text>
              <Text display='flex' alignItems='center' gap={2}>
                <Image src='/images/icon-check.svg' alt='check icon' display='inline'/>
                Email reports
              </Text>
            </Stack>

            <Button
              borderRadius='2rem'
              backgroundColor='neutral.500'
              color='neutral.300'
              fontSize='xs'
              paddingX={10}
              paddingY={5}
              marginTop={5}
              maxW='170px'
              marginLeft={['0', '0', 'auto']}
              
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
