/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
//import "https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css
import { LitElement, css,html} from 'lit-element';
import { myform } from 'css/view1.js';
//import './submit.js'

class MyView1 extends LitElement {
static get properties() { 
    return {
      name: { type: String },
      email: {type: String},    
      phone: {type: String},    
    };
  }

  constructor() { 
    super();
    this.name = '';
    this.email= '';
    this.phone= '';
  }
   
    
 static get styles() {
      return [
      myform
          
      
    ]
 }
    
  render() {
    return html`


		<div class="content">
			<div class="main">
    <p class="sign" align="center">Create Details</p>
    <form class="form1">
      <input class="un " type="text" align="center" name="name" placeholder="Name" @change="${this.nameChange}">
      <input class="un" type="text" align="center" name="address" placeholder="Email Address" @change="${this.emailChange}">
         <input class="un" type="text" align="center" name="phone" placeholder="Phone Number" @change="${this.phoneChange}">
      <button class="submit"  name="btn" align="center" @click="${this.clickHandler}" >SUBMIT</button>
      </form>  
                
    </div>
		</div>

    `;
  }
    

    clickHandler(e) {
        
     let user = "Name:" +this.name + " "+"Email:" + this.email +" "+"Phone Number:" +this.phone;      
      alert(user);
      console.log(user);
  }
    
    nameChange(e){     
       this.name = e.target.value;
    
    }
    emailChange(e){
     
      this.email = e.target.value;
    }
    
    phoneChange(e){
           this.phone = e.target.value;
     }
    
    
    
}
window.customElements.define('my-view1', MyView1);
