import React from 'react';
import './App.css';
class App extends React.Component{

   state = {
        existingArray: [7000, 7001, 7002, 7003, 7004, 7005],
        initialArray: [7000, 7001, 7002, 7003, 7004, 7005],
        duplicatesArray: [],
        initial : true
      };
    
    filterRange = () => {
      if(this.state.initial){
        this.setState({
          initial:false
        })
      }
       let {existingArray} = this.state;
       let duplicatesArray = [];
       let userInput = this.state.range.trim();
       if (userInput === "") {
         alert("Enter Valid Value");
        } else {
        
          let userValues = userInput.split(",");
          userValues.forEach(element => {
            if (element.indexOf("-") === -1) {
              if (existingArray.indexOf(Number(element)) === -1){
                existingArray.push(Number(element))
              }
                
              else{
                duplicatesArray.push(Number(element))
              } 
            } else {
              let lowerLimit = Number(element.split("-")[0]);
              let upperLimit = Number(element.split("-")[1]);
              if (lowerLimit <= upperLimit) {
                for (let i = lowerLimit; i <= upperLimit; i++) {
                  if (existingArray.indexOf(Number(i)) === -1) {
                    existingArray.push(Number(i));
                  } else {
                    duplicatesArray.push(Number(i));
                  }
                }
              } else {
                for (let i = upperLimit; i <= lowerLimit; i++) {
                  if (existingArray.indexOf(Number(i)) === -1) {
                    existingArray.push(Number(i));
                  } else {
                    duplicatesArray.push(Number(i));
                  }
                }
              }
            }
          });
        
        }
        this.setState({ existingArray, duplicatesArray });
      }
    
      allowNumerals = event => {
        var regex = /[0-9,\s-]/;
        if (!regex.test(event.key)) event.preventDefault();
      };
    
     handleChange = (e) =>{
        this.setState({
          [e.target.name] : e.target.value
        })
      }
      render() {
        return (
          <div className="container-1">
           
            <main>
              <div className="card">
                <h3> Assignement 1 </h3>
                
              </div>
    
              <div className="solution">
                <input
                  type="text"
                  name="range"
                  id="range"
                  onKeyPress={this.allowNumerals}
                  onChange={this.handleChange}
                  placeholder="Enter number/s or range"
                />
                <button onClick={this.filterRange}>Filter</button>
                {this.state.initialArray.length > 0 && (
                  <div>
                    <strong> Initial Values: </strong>
                    {this.state.initialArray.join(", ")}
                  </div>
                )}
    
                {this.state.duplicatesArray.length > 0  &&
                  <div>
                    <strong>Duplicates Found: </strong> 
                   {this.state.duplicatesArray.join(", ")}
                    
                  
                  </div>
                }
    
                
    
                {(this.state.existingArray.length > 0 && !this.state.initial) && (
                  <div>
                    <strong>Final Values </strong>
                    {this.state.existingArray.length > 0 &&
                       this.state.existingArray.join(
                          ", "
                        )
                  }
                  </div>
                )}
              </div>
            </main>
          </div>
        );
      }
    
  }
export default App;
