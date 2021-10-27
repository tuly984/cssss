import React, {useState, useEffect} from "react";
import 'antd/dist/antd.css';
import {Card} from 'antd';
//eslint-disable-next-line
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// eslint-disable-next-line
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'

//import { useEffect } from "react/cjs/react.development";
//import { Button } from "bootstrap";

function App() {


  const dataPaises = [
    { id: 1, nomber: "1", minutos: 241 },
    { id: 2, nomber: "2", minutos: 225 },
    { id: 3, nomber: "3", minutos: 216 },
    { id: 4, nomber: "4", minutos: 216 },
    { id: 5, nomber: "5", minutos: 207},
    { id: 6, nomber: "6", minutos: 191 },
    { id: 7, nomber: "7", minutos: 191 },
    { id: 8, nomber: "8", minutos: 191 },
    { id: 9, nomber: "9", minutos: 191 },
    { id: 10, nomber: "10", minutos: 191 },
  ];
  // eslint-disable-next-line
  const [data, setData] = useState(dataPaises);
//eslint-disable-next-line
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
     setTimeout(()=>{
       setLoading(false);

     },5000);
  },[])
  
  
    
  
  
  //eslint-disable-next-line  
 const loader = ()=>{
   let filas=[];
   for (let index = 0; index < 10; index++){
     filas.push(
      <tr key={index}>
      <td><Skeleton /></td>
      <td><Skeleton /></td>
      <td><Skeleton /></td>
      <td><Skeleton /></td>
   <td><Skeleton /></td>
   <td><Skeleton /></td>
   <td><Skeleton /></td>
   <td><Skeleton /></td>
   <td><Skeleton /></td>
   <td><Skeleton /></td>
   
    </tr>

     );
   }
   return(
     <SkeletonTheme color="gray" highlightColor="black">

  <div className="App">
          
  <br />
  

       <table className="table table-bordered">
    
      <thead>
        <tr>
          <th>সিরিয়াল</th>
          <th>ঋণ নং</th>
          <th>সদস্যদের নাম</th>
          <th>স্কিম</th>
          <th>কিস্তি(পরিশোধ/বকেয়া)</th>
          <th>কিস্তির পরিমান</th>
          <th>মোট</th>
          <th>পরিশোধ</th>
          <th>বকেয়া</th>
          <th>একশন</th>

        </tr>
      </thead>

      <tbody>
       {filas}
      </tbody>
      </table>
      </div>
      </SkeletonTheme>
   )

 }     

 if (loading){
return(
  loader()
  )
 }
 else{

 return (
        <div className="App">
          <Card title="ঋণের তালিকা">
        
          </Card>

          
          <br/>
      
          
          
           <table className="table table-border">
            
              <thead>
                <tr>
                  <th>সিরিয়াল</th>
                  <th>ঋণ নং</th>
                  <th>সদস্যদের নাম</th>
                  <th>স্কিম</th>
                  <th>কিস্তি(পরিশোধ/বকেয়া)</th>
                  <th>কিস্তির পরিমান</th>
                  <th>মোট</th>
                  <th>পরিশোধ</th>
                  <th>বকেয়া</th>
                  <th>একশন</th>
                </tr>
              </thead>
  
              <tbody>
                {data.map(elemento => (
                  <tr>
                    <td>{elemento.id}</td>
                    <td>{elemento.nomber}</td>
                    <td>{elemento.minutos}</td>
                    <td>{elemento.minutos}</td>
                    <td>{elemento.minutos}</td>
                    <td>{elemento.minutos}</td>
                    <td>{elemento.minutos}</td>
                    <td>{elemento.minutos}</td>
                    <td>{elemento.minutos}</td>
                    <td>{elemento.minutos}</td>

                 <td><button className="btn btn-primary">Edit</button> {"  "}
                 <button className="btn btn-danger">Delete</button></td>
                  </tr>
                ))
                }
              </tbody>
              </table>
  
          
  
          {/*<Modal isOpen={this.state.modalActualizar}>
            <ModalHeader>
             <div><h3>Editar Registro</h3></div>
            </ModalHeader>
  
            <ModalBody>
              <FormGroup>
                <label>
                 Id:
                </label>
              
                <input
                  className="form-control"
                  readOnly
                  type="text"
                  value={this.state.form.id}
                />
              </FormGroup>
              
              <FormGroup>
                <label>
                  Personaje: 
                </label>
                <input
                  className="form-control"
                  name="personaje"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.form.personaje}
                />
              </FormGroup>
              
              <FormGroup>
                <label>
                  Anime: 
                </label>
                <input
                  className="form-control"
                  name="anime"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.form.anime}
                />
              </FormGroup>
            </ModalBody>
  
            <ModalFooter>
              <Button
                color="primary"
                onClick={() => this.editar(this.state.form)}
              >
                Editar
              </Button>
              <Button
                color="danger"
                onClick={() => this.cerrarModalActualizar()}
              >
                Cancelar
              </Button>
            </ModalFooter>
          </Modal>
  
  
  
          <Modal isOpen={this.state.modalInsertar}>
            <ModalHeader>
             <div><h3>Insertar Personaje</h3></div>
            </ModalHeader>
  
            <ModalBody>
              <FormGroup>
                <label>
                  Id: 
                </label>
                
                <input
                  className="form-control"
                  readOnly
                  type="text"
                  value={this.state.data.length+1}
                />
              </FormGroup>
              
              <FormGroup>
                <label>
                  Personaje: 
                </label>
                <input
                  className="form-control"
                  name="personaje"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>
              
              <FormGroup>
                <label>
                  Anime: 
                </label>
                <input
                  className="form-control"
                  name="anime"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>
            </ModalBody>
  
            <ModalFooter>
              <Button
                color="primary"
                onClick={() => this.insertar()}
              >
                Insertar
              </Button>
              <Button
                className="btn btn-danger"
                onClick={() => this.cerrarModalInsertar()}
              >
                Cancelar
              </Button>
            </ModalFooter>
              </Modal>*/}
   
   </div>
      );
            }
    }

  
    
  
  export default App;
  


