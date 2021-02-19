/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import {LitElement,css,html} from 'lit-element';
import  { mycards } from 'css/view3.js';

class MyView3 extends LitElement {
    static get styles() { 
   return [
      mycards
          
      
    ]
   }
     static get properties() { 
    return {
      todos: { type: Array } ,
         numbers: {type: Array},
    };
  }

  constructor() { 
    super();
    this.todos = Object;
       this.numbers = {};
      
    this.addEventListener('loadnumbers', (e) => { 
    this.numbers = e.detail;
    } );
    this.getSortedNumbers();
      
  
  }
     
    
  render() {
    return html`
  
         <p>ToDO's:
        ${Object.keys(this.todos).map(item =>
                                      
          html`
<div class="wrapper">
  <div class="cols">
			<div class="col" ontouchstart="this.classList.toggle('hover');">
				<div class="container">
					<div class="front" style="background-image: url(https://cdn.pixabay.com/photo/2016/03/31/19/50/checklist-1295319__340.png)">
						<div class="inner">
							<p>TODO</p>
              <span>Hover to view</span>
						</div>
					</div>
					<div class="back">
						<div class="inner">
 <p ><strong>TITLE:</strong>${this.todos[item]['title']}</p>
   <p><strong>STATUS:</strong>${this.todos[item]['completed']}</p>
						  
						</div>
					</div>
				</div>
			</div>			
		</div>
 </div>
       `)}
      </p>


<div >
<p><strong>Sorted Dictionary Array</strong></p>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${Object.keys(this.numbers).map((item, index) => html`<li>-->${item} :   </li>`)}</li>
  </ul>
</div>

    `;
  }
    
firstUpdated ( changedProperties ) {
super.firstUpdated ( changedProperties );
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
  .then(response => response.json())
  .then(data => {
        
        this.todos = data;
         console.log(this.todos);
    });
    
  
}
    
     getSortedNumbers(){

        var numbersDict = { '34' : 'thirty-four' ,
                     '90' : 'ninety' , 
                     '91' : 'ninety-one',
                     '21' : 'twenty-one' ,
                     '61' : 'sixty-one' ,
                     '9' : 'nine' ,
                     '2' : 'two' ,
                     '6' : 'six' ,
                     '3' : 'three' ,
                     '8' : 'eight' , 
                     '80' : 'eighty' ,
                     '81' : 'eighty-one' ,
                     'Ninety-Nine' : '99' ,
                     'nine-hundred' : '900' }; 

  var mNumbersDict = {}, keys = Object.keys(numbersDict), i=-1, len = keys.length;
    keys.sort();
  while (++i < len) {
   mNumbersDict[keys[i]] = numbersDict[keys[i]];
   }   
        
        
        
    setInterval(() => {
      let loaded = new CustomEvent('loadnumbers', {
          
        detail: mNumbersDict
      });
      this.dispatchEvent(loaded);
    }, 500);
        
    }

    
}

window.customElements.define('my-view3', MyView3);
