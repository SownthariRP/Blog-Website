
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';
import CakeIcon from '@mui/icons-material/Cake';

const Banner = styled(Box)`
    background-image: url(https://res.cloudinary.com/sownthari/image/upload/v1669870592/test/blog/CookBook_1_k9wepe.png);
    width: 100%;
    height: 60vh;
    background-position: center;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 30px;
    }
    & > h3{
        color:#f2b233;
        fontWeight:600;
    }
    
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">Cook<span style={{color: '#e76665', fontWeight:'600'}}>Book</span></Typography>
                <Text variant="h5">A recipies blog where you can read baking recipies <br /><br/>
                    I am a baker with an huge interest in baking cakes and providing <br/>
                    peoples with good healty and wonderful recipes.<br />
                    If you are interested, you can also post your favourite baking recipies
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="/" color="inherit" target="_blank"><CakeIcon /></Link>
                    </Box>
                </Text>
                <Text variant="h5">
                    Need something built or simply want to have chat? Reach out to me on
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.instagram.com/sownthari01/" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>  
                        or send me an Email 
                        <Link href="mailto:sownthari01052003@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Link>.
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;