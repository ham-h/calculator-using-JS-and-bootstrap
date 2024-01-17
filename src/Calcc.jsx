import { Container, Row, Col,Form,InputGroup, FormControl } from 'react-bootstrap';
// import { Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
    
       
  


const Calc = () => {

    const  num =(c)=>{
            document.getElementById('h').value=document.getElementById('h').value+c
        }
        const  clr=()=>{
            document.getElementById('h').value=''
        }
        let g;
let z; 

const op = (y) => {
    z = document.getElementById('h').value;
    document.getElementById('h').value = '';
    g = y;
};

const eql = () => {
    const b = document.getElementById('h').value;
    let e;

    if (g === '+') {
        e = eval(z) + eval(b);
    } else if (g === '-') {
        e = eval(z) - eval(b);
    } else if (g === 'x') {
        e = eval(z) * eval(b);
    } else if (g === '/') {
        e = eval(z) / eval(b);
    } else {
        e = (eval(z) * eval(b)) / 100;
    }

    document.getElementById('h').value = e;
};
      return (
        <Container className='bgg'>
        <Row className="justify-content-md-center">
          <Col md={4} className="mx-auto w-100 bg-dark bg-opacity-25 border border-white rounded p-2" style={{maxWidth:'405px', marginTop: '100px',marginBottom:'100px'}}>
           
          <div className="cls1">
     
          <Container>
      <Form>
        <InputGroup className="mb-3">
          <FormControl
            id="h"
            type="text"
            placeholder="calculator"
            className="w-100 fs-3 text-end bg-white border-0 rounded"
            readOnly
          />
        </InputGroup>
      </Form>

      <Row className="mt-3 g-2 row-cols-4">
        
     <Col> <div className="col">
            <button onClick={()=>op('%')} className="btn w-100 bg-white ">%</button>
        </div></Col>
        
        <Col>  <div className="col"> 
            <button onClick={()=>clr()} className="btn w-100 bg-white">AC</button>
        </div> </Col>
        <Col> <div className="col">
            <button onClick={()=>op('/')} className="btn w-100 bg-white">&divide;</button>
        </div></Col>
       <Col><div className="col">
            <button onClick={()=>num('7')} className="btn w-100 bg-white">7</button>
        </div></Col>
        <Col><div className="col">
            <button onClick={()=>num('8')} className="btn w-100 bg-white">8</button>
        </div></Col>
        <Col><div className="col">
            <button onClick={()=>num('9')} className="btn w-100 bg-white">9</button>
        </div></Col>
        <Col><div className="col">
            <button onClick={()=>op('+')} className="btn w-100 bg-white">+</button>
        </div></Col>
        
        <Col><div className="col">
            <button onClick={()=>num('4')} className="btn w-100 bg-white">4</button>
        </div></Col>
        
        <Col><div className="col">
            <button onClick={()=>num('5')} className="btn w-100 bg-white">5</button>
        </div></Col>
        <Col><div className="col">
            <button onClick={()=>num('6')} className="btn w-100 bg-white">6</button>
        </div></Col>
        
        <Col><div className="col">
            <button onClick={()=>op('-')} className="btn w-100 bg-white">-</button>
        </div></Col>
        <Col><div className="col">
            <button onClick={()=>num('1')} className="btn w-100 bg-white">1</button>
        </div></Col>
        <Col><div className="col">
            <button onClick={()=>num('2')}  className="btn w-100 bg-white">2</button>
        </div></Col>
        
        <Col><div className="col">
            <button onClick={()=>num('3')} className="btn w-100 bg-white">3</button>
        </div></Col>
        
      <Col>  <div className=" col">
            <button  onClick={()=>op('x')} className="btn w-100 bg-white">&times;</button>
        </div></Col>
       <Col> <div className="col">
            <button  onClick={()=>num('.')} className="btn w-100 bg-white">.</button>
        </div></Col>
       <Col><div className="col">
            <button  onClick={()=>num('0')} className="btn w-100 bg-white">0</button>
        </div></Col>
       <Col><div className="col">
            <button  onClick={eql} className="btn w-100 bg-white" >=</button>
        </div></Col> 
        
      </Row>
    </Container>
      
        {/* <input id="h" type="text" placeholder="calculator" className="w-100 fs-3 text-end bg-white border-0 rounded"></input> */}
    {/* <div className="row mt-3 g-2 row-cols-4"> */}
      
        
    {/* </div> */}
    </div>
    </Col>
      </Row>
    </Container> 
      )
    }
    
    export default Calc
    