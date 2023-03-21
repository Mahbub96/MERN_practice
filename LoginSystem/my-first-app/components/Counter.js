import { Button, Text, VStack } from 'native-base';
import { useState } from 'react';

const Counter = () => {
    const [count,setCount] = useState(0);
  return (
    
    <VStack flex={1} alignItems='center' justifyContent='center'>
        
        <Text>This is a div</Text>
        <Button colorScheme={'error'} variant={'outline'} borderRadius={25}>
            Click me
        </Button>
    </VStack>
  )
}




export default Counter
