import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import { useEffect, useState } from "react";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate =["Web Developer", "I build things for web", "Android Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period =2000;

    useEffect(() => {   
      let ticker = setInterval(() => {
        tick();
      }, delta)

      return () => { clearInterval(ticker)};
    }, [text])

    const tick =() => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta /2);
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        } 
    }
    


    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col id="leftside" xs={12} md={6} xl={6}>
                        {/* <span className="tagline">Welcome to my Portfolio</span> */}
                        <h1>{`Hi I'm Nishant/Noddy`}<br></br><span className="wrap">{text}</span></h1>
                        <p>A passionate and versatile software developer proficient in Javascript, Java, Kotlin, and Android development.
                            I bring a blend of creativity and technical expertise to my work.<br/><br/>
                            Let's connect and explore the possibilities of innovation together.</p>
                        <a id="letsConnectBanner" href="#connect" onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25}/> </a>
                    </Col>
                    <Col xs={12} md={6} xl={6}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}