/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import {LitElement,css,script, html} from 'lit-element';
import { mydesign } from 'css/view2.js';

class MyView2 extends LitElement { 
   static get styles() {
      return [
      mydesign
          
      
    ]
 }
    
      
 
  render() {
    return html`

     	<div class="maindiv">


		<div class="div">
			<span class="yellow_d" style="">J</span>
		</div>


 	<div class="triangle-0"></div>

 		<span class="front_text">oseph</span>
 		<div class="box">
        	<div class="box_back">
        		<div class="box_sagment"></div>
	        	<div class="box_sagment">Web Designer</div>
	        	<div class="box_sagment">Android Developer</div>
	        	<div class="box_sagment">IT Technitian</div>
        	</div>
 		</div>

                        <a href="#0"><i class="fab fa-instagram"></i></a>
                  

 	<div class="triangle-1"></div>

 	<div class="righter"></div>


	</div>
    `;
  }
}

window.customElements.define('my-element', MyView2);
