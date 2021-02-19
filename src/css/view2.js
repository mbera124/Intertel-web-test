import { css } from 'lit-element';

export const mydesign = css`
body{
  background-color: #ffc0cb;
}

.maindiv{
		background-color: #87ceeb;
		height: 300px;
		width: 400px;
		position: absolute;
		top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        overflow: hidden;
        border-radius: 2px;
        box-shadow: 10px 10px 50px grey;
	}

	.div{
			height: 100%;
			width: 100%;
			background-color: #87ceeb;
			position: absolute;
			z-index:1;
			margin-top: -1000px;
			animation: background1 2s;
			animation-fill-mode: forwards;
	}

	@keyframes background1  {
			0%{margin-top: -1000px;}
			100%{margin-top: 0px;}
	}


	.triangle-0 {
		  width: 500px;
		  height: 200px;
		  background-color: black;
		  transform: rotate(300deg);
		  margin-left: -68%;
		  z-index: 2;
		  position: fixed;
		  box-shadow: 1px 1px 10px black;
		  left: 0px;

	}

	.triangle-1 {
		  width: 500px;
		  height: 500px;
		  transform: rotate(300deg);
		  margin-left: 38%;
		  background-color: black;
		  z-index: 2;
		  position: absolute;
		  box-shadow: 1px 1px 10px black;
		}

	.yellow_d{
		font-family: Roboto;
		position: absolute;
		font-size: 150px;
		z-index: 1;
		color:black;
		top: 50%;
        left: 30%;
        background-color: #87ceeb;
  		border-radius: 2px;
        transform: translate(-50%, -50%);
        box-shadow: 10px 10px 50px grey;
	}

	.front_text{
		font-family: Roboto;
		position: absolute;
		font-size: 50px;
		z-index: 22;
		color:white;
		top: 60%;
        left: 59%;
        transform: translate(-50%, -50%);

	}

	.righter{
		
		  width: 10px;
		  height: 10px;
		  border-bottom: solid 5px transparent;
		  border-left: solid 5px transparent;
		  border-right: solid 5px white;
		  border-top: solid 5px white;
		  top: 50%;
          left: 80%;
          transform: translate(-50%, -50%);
		  z-index: 22;
		  position: absolute;
	
		}

	.box{
		height: 30px;
 		width: 150px;
 		position: absolute;
 		z-index:22;
 		top: 73%;
        left: 60%;
        transform: translate(-50%, -50%);
        overflow: hidden;
        /*border: 1px solid grey;*/
	}

	.box_back{
		position: absolute;
		height:120px;
		width:150px;
		/*background-color: red;*/
		animation: slideup 5s;
		animation-fill-mode: forwards;
		animation-timing-function: linear;
		animation-iteration-count: infinite;

	}

	@keyframes slideup{
		0%{top:0px;}
		10%{top:-30px;}
		20%{top:-30px;}
		30%{top:-30px;}
	
		40%{top:-60px;}
		50%{top: -60px;}
		60%{top: -60px;}
		
		70%{top: -90px;}
		80%{top: -90px;}
		90%{top: -90px;}
		100%{top: -120px;}
	}

	.box_sagment{
		height:30px;
		width: 150px;
		/*background-color: red;*/
		text-align: right;
		color: white;
		font-family: Roboto;	
	}

	.icon{

	}

	.icon:hover{
		font-size: 20px;
	}

`;