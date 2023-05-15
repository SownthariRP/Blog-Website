
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    background-image: url(https://res.cloudinary.com/sownthari/image/upload/v1669864777/test/blog/pexels-cats-coming-1359330_11_htheyq.jpg);
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-repeat:   no-repeat;
    background-position: center center;
`;

const Heading = styled(Typography)`
    font-size: 90px;
    color: #f2b233;
    line-height: 1
`;


const SubHeading = styled(Typography)`
    font-size: 30px;
    color: #FFFFFF;
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading >Cook<span style={{ color: '#e76665' }}>Book</span></Heading>
            <SubHeading>Bake with your own style</SubHeading>
        </Image>
    )
}

export default Banner;