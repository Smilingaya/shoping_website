import React from 'react';
import {FaSmileBeam} from 'react-icons/fa';
import {FaSearch} from 'react-icons/fa';
import {FaShoppingCart} from 'react-icons/fa';
import {FaShoppingBag} from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaPinterest} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';

import{
  Box,
  Text,
  Image,
  Heading, 
  ChakraProvider,
  theme,
  Button,
  Progress,
  Container,
  Center,
  
  
}  from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={theme} bg='white'>     
    <box >
    <Heading w="100%" h="60px" bg= "black"  color='grey' textAlign="center" placeItems="center "py="5px" fontFamily={'cursive'} >Smiling Style</Heading>
    </box>
    <Box w="100%" h="80px" bg= "white" display="grid" placeItems="start"  gridTemplateColumns={7}  marginY="1%"  bg="gray.100">
    <Box gridColumn={1} >
    <Text  mt="20px" ml="10px" fontSize='xl' color="gray" fontFamily="cursive" color="black" fontSize="30px">Smiling</Text>
    </Box>
   
    <Box gridColumn={2} ml="110px" marginY="30px">
      <FaSmileBeam  fontSize="30px"/> 
    
    </Box>
    <Box gridColumn={3} >
    <Text  mt="20px"   marginY="30px" color="gray"   color="black">Home</Text>
    </Box>
    <Box gridColumn={4} >
    <Text  mt="20px" marginY="30px" color="gray"   color="black">Blog</Text>
    </Box>
    <Box gridColumn={5} >
    <Text  mt="20px"  color="gray"marginY="30px"   color="black">Contact</Text>
    </Box>
    <Box gridColumn={6} >
    <Text  mt="20px"   color="gray" marginY="30px"   color="black">Contact</Text>
    </Box>
    <Box gridColumn={7} >
    <Button p="30px" colorScheme='blue' bg="blackAlpha.800" color="white" variant='outline' ml="600px" mt="10px" ><FaSearch/>    <FaShoppingCart/> Shoping Now!!</Button>
    </Box>
  </Box>

  <Box gridTemplateColumns={2}     w="100%" h="600px"  bg= "gray.100" display="grid" placeItems="start center ">
  <Box gridColumn={2} pt="180px">
         
          <Heading color="black" ml="650px" as='h2' size='3xl' noOfLines={1}>
            TRENDY SKIRTS
          </Heading>
          <Text ml="750px" mt="3%" color="black" > App To 50% Off On top Brands</Text>
          <Button p="30px" colorScheme='blue' bg="blackAlpha.800" color="white" variant='outline' ml="750px" mt="50px" >Shoping Now!!</Button>
        </Box> 
        <Box gridColumn={1}>
          <Image mt="-80%" ml="550px"  h="400px" src='https://img1.picmix.com/output/stamp/normal/0/7/3/3/2413370_13fcf.png'></Image>
          <Progress mb="10px" size='md' isIndeterminate />
        </Box>
      </Box>
      <Box w="100%" h="400px" bg= "white" display="grid" placeItems="start"  mt="1%" gridTemplateColumns={3}   marginY="4%" >
           <Box gridColumn={1} bg="gray.100" h="350px" w="450px" ml="30px">  
                <Box h="50px"  w="1000px" gridColumn={ 1/6} gridRow={1}>
          <Heading mt="5px" ml="5%" color="black"  as='h2' size='xl' noOfLines={1}>
            DESIGNER BAGS
          </Heading>
          <Image  ml="8%" w="22%" src="https://png.pngtree.com/png-vector/20201128/ourlarge/pngtree-fashion-female-bag-png-image_2393138.jpg"/>
          <Text mt="15px" ml="41%" color="gray"></Text>
                     <Button ml="11%" bg="blackAlpha.800" color="white"> SHOW MORE! </Button>
                </Box>
             </Box>
              <Box ml="500px" gridColumn={2} bg="gray.100" h="350px" w="390px">
                <Heading ml="9%">BRANDS WATCHE</Heading>
                <Image  ml="25%" w="45%" mt="3%" src='https://img.favpng.com/11/16/19/armani-fashion-design-chronograph-watch-png-favpng-UcEXaR1kAxG9RrdH9ArEZZcrp.jpg'/>
                <Button mt="3%" ml="28%" bg="blackAlpha.800" color="white"> SHOW MORE! </Button>
                </Box>
                <Box  gridColumn={3} bg="gray.100" h="350px" w="390px">
                 <Heading ml="9%">CASUAL SHOES</Heading> 
                  <Image  mt="5%"  ml="17%" w="70%" src='https://img.freepik.com/premium-photo/new-pair-white-sneakers-isolated-white_93675-133979.jpg'/>
                  <Button  ml="30%" mt="3%" bg="blackAlpha.800" color="white"> SHOW MORE! </Button>
                  </Box>
               </Box>  
             
               <Heading textAlign="center"mt="-4%" placeItems="Center"> WE LOVED TREND</Heading>
               <Box  ml="48%" mt="1%">
                < FaShoppingBag   ml="40%" fontSize="40px"></FaShoppingBag>

               </Box>
               <Box display="grid" placeItems="start"  mt="2%" gridTemplateColumns={3}>
                      <Box gridColumn={1} >
                          <Button ml="250%" bg="blackAlpha.800" color="white">  cdsfuhn,kwxcvj</Button>
                      </Box>
                      <Box gridColumn={2}>
                          <Button ml="400%" bg="blackAlpha.800" color="white"> dk,nchusJx,kcvjb </Button>
                      </Box>
                      <Box gridColumn={3} ml="25%">
                          <Button bg="blackAlpha.800" color="white">ezfldkjifsklxdm</Button>
                      </Box>

               </Box>
               <Box w="100%" h="400px" bg= "white" display="grid" placeItems="start"  mt="1%" gridTemplateColumns={4}  marginX="1%"  marginY="1%" marginTop="3%" >
                       <Box  gridColumn={1} ml="2%" bg="gray.100" w="300px" h="400px">
                          <Image src='https://i.pinimg.com/564x/7a/48/67/7a486707f2282c2b1950b0469a9aa612.jpg'></Image>
                         
                       </Box>
                       <Box  gridColumn={2}  ml='75%' bg="gray.100" w="300px" h="400px">
                          <Image h="400" src="https://i.pinimg.com/564x/73/98/d1/7398d10c26ed6dfb398754f215372ac9.jpg"></Image>
                          </Box>
                          <Box  gridColumn={3} ml="50%"  bg="gray.100" w="300px" h="400px">
                          <Image   src="https://i.pinimg.com/564x/d1/86/d6/d186d6c8ce606e707f170a5f6157b0ac.jpg" ></Image>
                          </Box>
                          <Box  gridColumn={4}  bg="gray.100" ml="30%" w="300px" h="400px">
                          <Image src="https://i.pinimg.com/564x/6a/8d/df/6a8ddff7504d0b6b1716736266c5b172.jpg"></Image>
                          </Box>
                </Box>
                <Box w="100%" h="200px" bg= "white" display="grid" placeItems="start"  mt="1%" gridTemplateColumns={4}  marginX="1%"  marginY="1%" marginTop="1%" >
                 <Box ml="20" gridColumn="1" display="grid" gridTemplateRows={3}>
                  <Text  gridRow={1}   fontSize="2xl">  SmilingMode </Text> 
                  <Text gridRow={2}    fontSize="xl" fontFamily="fantasy" marginTop="8"> 6.50$</Text>
                  <Text gridRow={3}>Add To Cart</Text>  
                 </Box>
                 <Box gridColumn="2" ml="90%">
                 <Text  gridRow={1}   fontSize="2xl">  SmilingMode </Text> 
                  <Text gridRow={2}    fontSize="xl" fontFamily="fantasy" > 16$</Text>
                  <Text gridRow={3}>Add To Cart</Text>  
                 </Box>
                 <Box gridColumn="3" ml="70%">
                 <Text  gridRow={1}   fontSize="2xl">  SmilingMode </Text> 
                  <Text gridRow={2}    fontSize="xl" fontFamily="fantasy" > 12.50$</Text>
                  <Text gridRow={3}>Add To Cart</Text>  
                 </Box>
                 <Box gridColumn="4" ml="45%">
                 <Text  gridRow={1}   fontSize="2xl">  SmilingMode </Text> 
                  <Text gridRow={2}    fontSize="xl" fontFamily="fantasy" > 25.30$</Text>
                  <Text gridRow={3}>Add To Cart</Text>   
                 </Box>
                </Box>
                <Box w="100%" h="400px" bg= "white" display="grid" placeItems="start"  mt="1%" gridTemplateColumns={4}  marginX="1%"   >
                       <Box  gridColumn={1} ml="2%" bg="gray.100" w="300px" h="400px">
                          <Image src='https://i.pinimg.com/564x/42/72/50/4272504e3b83e0c9ee677097560fed2b.jpg'></Image>
                         
                       </Box>
                       <Box  gridColumn={2}  ml='75%' bg="gray.100" w="300px" h="400px">
                          <Image h="400" src="https://i.pinimg.com/564x/bc/23/82/bc2382968189b1131952519fb68f189f.jpg"></Image>
                          </Box>
                          <Box  gridColumn={3} ml="50%"  bg="gray.100" w="300px" h="400px">
                          <Image   src="https://i.pinimg.com/736x/b3/95/00/b3950089972a3303e6165149fd196138.jpg" ></Image>
                          </Box>
                          <Box  gridColumn={4}  bg="gray.100" ml="30%" w="300px" h="400px">
                          <Image h="400px" src="https://i.pinimg.com/564x/c2/4d/37/c24d371ac9e0a894fe73f0dd7887df93.jpg"></Image>
                          </Box>
                </Box>
                <Box w="100%" h="200px" bg= "white" display="grid" placeItems="start"  mt="1%" gridTemplateColumns={4}  marginX="1%"  marginY="1%" marginTop="1%" >
                 <Box ml="20" gridColumn="1" display="grid" gridTemplateRows={3}>
                  <Text  gridRow={1}   fontSize="2xl">  SmilingMode </Text> 
                  <Text gridRow={2}    fontSize="xl" fontFamily="fantasy" marginTop="8"> 3$</Text>
                  <Text gridRow={3}>Add To Cart</Text>  
                 </Box>
                 <Box gridColumn="2" ml="90%">
                 <Text  gridRow={1}   fontSize="2xl">  SmilingMode </Text> 
                  <Text gridRow={2}    fontSize="xl" fontFamily="fantasy" > 21$</Text>
                  <Text gridRow={3}>Add To Cart</Text>  
                 </Box>
                 <Box gridColumn="3" ml="70%">
                 <Text  gridRow={1}   fontSize="2xl">  SmilingMode </Text> 
                  <Text gridRow={2}    fontSize="xl" fontFamily="fantasy" > 20$</Text>
                  <Text gridRow={3}>Add To Cart</Text>  
                 </Box>
                 <Box gridColumn="4" ml="45%">
                 <Text  gridRow={1}   fontSize="2xl">  SmilingMode </Text> 
                  <Text gridRow={2}    fontSize="xl" fontFamily="fantasy" > 9.30$</Text>
                  <Text gridRow={3}>Add To Cart</Text>   
                 </Box>
                </Box>
                <Box w="100%" h="400px" bg= "white" display="grid" placeItems="start"  mt="1%" gridTemplateColumns={4}  marginX="1%"   >
                       <Box  gridColumn={1} ml="2%" bg="gray.100" w="300px" h="400px">
                          <Image src='https://i.pinimg.com/564x/5a/ce/04/5ace040f8af804a7340de4a85853afd4.jpg'></Image>
                         
                       </Box>
                       <Box  gridColumn={2}  ml='75%' bg="gray.100" w="300px" h="400px">
                          <Image h="400" src="https://i.pinimg.com/564x/9a/27/4c/9a274c47f3d733b27a95b079ec61407d.jpg"></Image>
                          </Box>
                          <Box  gridColumn={3} ml="50%"  bg="gray.100" w="300px" h="400px">
                          <Image h="400" w="300px"  src="https://i.pinimg.com/564x/2d/8a/52/2d8a52749b1464ec54c1df505adb2d0f.jpg" ></Image>
                          </Box>
                          <Box  gridColumn={4}  bg="gray.100" ml="30%" w="300px" h="400px">
                          <Image h="400px" src="https://i.pinimg.com/564x/4a/e7/8d/4ae78d3db052f2a053cf0b72ef5d9d79.jpg"></Image>
                          </Box>
                </Box>
                <Box w="100%" h="200px" bg= "white" display="grid" placeItems="start"  mt="1%" gridTemplateColumns={4}  marginX="1%"  marginY="1%" marginTop="1%" >
                 <Box ml="20" gridColumn="1" display="grid" gridTemplateRows={3}>
                  <Text  gridRow={1}   fontSize="2xl">  SmilingMode </Text> 
                  <Text gridRow={2}    fontSize="xl" fontFamily="fantasy" marginTop="8"> 9.50$</Text>
                  <Text gridRow={3}>Add To Cart</Text>  
                 </Box>
                 <Box gridColumn="2" ml="90%">
                 <Text  gridRow={1}   fontSize="2xl">  SmilingMode </Text> 
                  <Text gridRow={2}    fontSize="xl" fontFamily="fantasy" > 18$</Text>
                  <Text gridRow={3}>Add To Cart</Text>  
                 </Box>
                 <Box gridColumn="3" ml="70%">
                 <Text  gridRow={1}   fontSize="2xl">  SmilingMode </Text> 
                  <Text gridRow={2}    fontSize="xl" fontFamily="fantasy" > 10.50$</Text>
                  <Text gridRow={3}>Add To Cart</Text>  
                 </Box>
                 <Box gridColumn="4" ml="45%">
                 <Text  gridRow={1}   fontSize="2xl">  SmilingMode </Text> 
                  <Text gridRow={2}    fontSize="xl" fontFamily="fantasy" > 20.30$</Text>
                  <Text gridRow={3}>Add To Cart</Text>   
                 </Box>
                </Box>
              <Box w="100%" h="300px" bg="blackAlpha.800" display="grid"  placeItems="center" gridTemplateRows={3}>
                <Box gridRow={1}>
                <Heading  mt="50%" textAlign="center" color="white"> JOIN US</Heading>
                </Box>
                 
                 <Box gridRows={2} display="flex" gap={6}  flexDirection="row"   mt="1%"   marginX="1%"  marginY="1%" marginTop="3%">
                   <FaFacebook fontSize="40"  color="white"  />
                   <FaTwitter fontSize="40"  color="white"  />
                   <FaPinterest fontSize="40" color="white" />
                   <FaInstagram fontSize="40" color="white" />
                 </Box>
                   
                  <Box gridRow={3}>
                          
                  </Box>

              </Box>


               
                
    </ChakraProvider>
      
  );
}

export default App;
