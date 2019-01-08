<template>
  <v-container>
    <v-layout justify-center align-center>
      <svg viewBox="0 0 800 600" preserveAspectRatio="xMinYMid slice">
        <g id="stars">
          <circle></circle>
          <circle></circle>
          <circle></circle>
          <circle></circle>
          <circle></circle>
          <circle></circle>
          <circle></circle>
          <circle></circle>
          <circle></circle>
          <circle></circle>
          <circle></circle>
          <circle></circle>
          <circle></circle>
          <circle></circle>
          <circle></circle>
          <circle></circle>
          <circle></circle>
          <circle></circle>
          <circle></circle>
          <circle></circle>
          <circle></circle>
          <circle></circle>
          <circle></circle>
          <circle></circle>
          <circle></circle>
          <circle></circle>
          <circle></circle>
          <circle></circle>
          <circle></circle>
          <circle></circle>
          <circle></circle>
          <circle></circle>
          <circle></circle>
          <circle></circle>
          <circle></circle>
          <circle></circle>
          <circle></circle>
          <circle></circle>
          <circle></circle>
          <circle></circle>
        </g>
        <g id="comets">
          <line x1="1185" y1="-15" x2="77.5" y2="1092.5"></line>
          <line x1="854" y1="8" x2="163" y2="699"></line>
          <line x1="573" y1="-33" x2="-49.5" y2="589.5"></line>
          <line x1="271" y1="-33" x2="-60.5" y2="298.5"></line>
          <line x1="463" y1="-76" x2="-102" y2="489"></line>
          <line x1="120" y1="-19" x2="-26" y2="127"></line>
          <line x1="866" y1="174.3" x2="305.6" y2="734.7"></line>
          <line x1="854" y1="462" x2="653" y2="663"></line>
        </g>
        <g id="rocket">
          <path
            d="M445.3,256.3c-47.3-3.5-62.8,27-62.8,27c-18.5,2-24,10-24,10l15.5,12.3c-0.5,15.3,3.5,16.5,3.5,16.5c5.5,7.5,17.8,4.8,17.8,4.8l12.8,17c12-12.5,10.3-25.5,10.3-25.5C450.8,300,445.3,256.3,445.3,256.3zM416.3,297c-6.5,0-11.8-5.3-11.8-11.8c0-6.5,5.3-11.8,11.8-11.8s11.8,5.3,11.8,11.8C428,291.7,422.7,297,416.3,297z"
          ></path>
          <circle></circle>
          <polygon points="371.3,338.6 355.7,344.7 363.1,329.7"></polygon>
        </g>
      </svg>
    </v-layout>
  </v-container>
</template>

<style scoped>
html, body {
  height: 100%;
  background: #282F35;
  overflow: hidden;
}

body {
  overflow: hidden;
}

svg {
  width: 100%;
  height: 100%;
}

* {
  box-sizing: border-box;
}

#rocket {
  -webkit-animation: shakes 1s linear infinite;
          animation: shakes 1s linear infinite;
}
@-webkit-keyframes shakes {
  10% {
    -webkit-transform: translate(1px, 2px);
            transform: translate(1px, 2px);
  }
  20% {
    -webkit-transform: translate(5px, 3px);
            transform: translate(5px, 3px);
  }
  30% {
    -webkit-transform: translate(1px, 2px);
            transform: translate(1px, 2px);
  }
  40% {
    -webkit-transform: translate(3px, 5px);
            transform: translate(3px, 5px);
  }
  50% {
    -webkit-transform: translate(4px, 1px);
            transform: translate(4px, 1px);
  }
  60% {
    -webkit-transform: translate(2px, 3px);
            transform: translate(2px, 3px);
  }
  70% {
    -webkit-transform: translate(4px, 2px);
            transform: translate(4px, 2px);
  }
  80% {
    -webkit-transform: translate(2px, 4px);
            transform: translate(2px, 4px);
  }
  90% {
    -webkit-transform: translate(2px, 4px);
            transform: translate(2px, 4px);
  }
  100% {
    -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
  }
}
@keyframes shakes {
  10% {
    -webkit-transform: translate(1px, 2px);
            transform: translate(1px, 2px);
  }
  20% {
    -webkit-transform: translate(5px, 3px);
            transform: translate(5px, 3px);
  }
  30% {
    -webkit-transform: translate(1px, 2px);
            transform: translate(1px, 2px);
  }
  40% {
    -webkit-transform: translate(3px, 5px);
            transform: translate(3px, 5px);
  }
  50% {
    -webkit-transform: translate(4px, 1px);
            transform: translate(4px, 1px);
  }
  60% {
    -webkit-transform: translate(2px, 3px);
            transform: translate(2px, 3px);
  }
  70% {
    -webkit-transform: translate(4px, 2px);
            transform: translate(4px, 2px);
  }
  80% {
    -webkit-transform: translate(2px, 4px);
            transform: translate(2px, 4px);
  }
  90% {
    -webkit-transform: translate(2px, 4px);
            transform: translate(2px, 4px);
  }
  100% {
    -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
  }
}
#rocket path, #rocket circle, #rocket polygon {
  fill: #FFF;
}
#rocket circle {
  cx: 369.5;
  cy: 331.8;
  r: 7;
}
#rocket polygon {
  -webkit-animation: burst 0.5s infinite;
          animation: burst 0.5s infinite;
  -webkit-transform-origin: 363px 337px;
          transform-origin: 363px 337px;
}
@-webkit-keyframes burst {
  20% {
    -webkit-transform: scale(0.8);
            transform: scale(0.8);
  }
  40% {
    -webkit-transform: scale(0.6);
            transform: scale(0.6);
  }
  60% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  80% {
    -webkit-transform: scale(0.8);
            transform: scale(0.8);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
@keyframes burst {
  20% {
    -webkit-transform: scale(0.8);
            transform: scale(0.8);
  }
  40% {
    -webkit-transform: scale(0.6);
            transform: scale(0.6);
  }
  60% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  80% {
    -webkit-transform: scale(0.8);
            transform: scale(0.8);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
#stars {
  -webkit-animation: starsMovement 240s linear infinite;
          animation: starsMovement 240s linear infinite;
  -webkit-transform-origin: center;
          transform-origin: center;
}
@-webkit-keyframes starsMovement {
  0% {
    -webkit-transform: scale(1.5) rotate(0deg);
            transform: scale(1.5) rotate(0deg);
  }
  100% {
    -webkit-transform: scale(1.5) rotate(360deg);
            transform: scale(1.5) rotate(360deg);
  }
}
@keyframes starsMovement {
  0% {
    -webkit-transform: scale(1.5) rotate(0deg);
            transform: scale(1.5) rotate(0deg);
  }
  100% {
    -webkit-transform: scale(1.5) rotate(360deg);
            transform: scale(1.5) rotate(360deg);
  }
}
#stars circle {
  fill: #FFF;
  -webkit-animation: glow 1s infinite forwards;
          animation: glow 1s infinite forwards;
}
@-webkit-keyframes glow {
  6% {
    opacity: 1;
  }
  12% {
    opacity: 0.5;
  }
  18% {
    opacity: 0.9;
  }
  24% {
    opacity: 0.4;
  }
  30%, 100% {
    opacity: 1;
  }
}
@keyframes glow {
  6% {
    opacity: 1;
  }
  12% {
    opacity: 0.5;
  }
  18% {
    opacity: 0.9;
  }
  24% {
    opacity: 0.4;
  }
  30%, 100% {
    opacity: 1;
  }
}
#stars circle:nth-of-type(1) {
  r: 2;
  cy: 7%;
  cx: 38%;
  -webkit-animation-delay: 2.7s;
          animation-delay: 2.7s;
}
#stars circle:nth-of-type(2) {
  r: 1;
  cy: 38%;
  cx: 75%;
  -webkit-animation-delay: 8.1s;
          animation-delay: 8.1s;
}
#stars circle:nth-of-type(3) {
  r: 2;
  cy: 93%;
  cx: 66%;
  -webkit-animation-delay: 2.7s;
          animation-delay: 2.7s;
}
#stars circle:nth-of-type(4) {
  r: 2;
  cy: 53%;
  cx: 39%;
  -webkit-animation-delay: 8s;
          animation-delay: 8s;
}
#stars circle:nth-of-type(5) {
  r: 1;
  cy: 41%;
  cx: 51%;
  -webkit-animation-delay: 5.4s;
          animation-delay: 5.4s;
}
#stars circle:nth-of-type(6) {
  r: 2;
  cy: 58%;
  cx: 42%;
  -webkit-animation-delay: 5.4s;
          animation-delay: 5.4s;
}
#stars circle:nth-of-type(7) {
  r: 2;
  cy: 15%;
  cx: 41%;
  -webkit-animation-delay: 5.1s;
          animation-delay: 5.1s;
}
#stars circle:nth-of-type(8) {
  r: 2;
  cy: 6%;
  cx: 41%;
  -webkit-animation-delay: 5.4s;
          animation-delay: 5.4s;
}
#stars circle:nth-of-type(9) {
  r: 2;
  cy: 66%;
  cx: 68%;
  -webkit-animation-delay: 7.5s;
          animation-delay: 7.5s;
}
#stars circle:nth-of-type(10) {
  r: 2;
  cy: 92%;
  cx: 98%;
  -webkit-animation-delay: 8s;
          animation-delay: 8s;
}
#stars circle:nth-of-type(11) {
  r: 2;
  cy: 96%;
  cx: 39%;
  -webkit-animation-delay: 0.9s;
          animation-delay: 0.9s;
}
#stars circle:nth-of-type(12) {
  r: 2;
  cy: 26%;
  cx: 3%;
  -webkit-animation-delay: 0.4s;
          animation-delay: 0.4s;
}
#stars circle:nth-of-type(13) {
  r: 1;
  cy: 93%;
  cx: 97%;
  -webkit-animation-delay: 9.6s;
          animation-delay: 9.6s;
}
#stars circle:nth-of-type(14) {
  r: 2;
  cy: 80%;
  cx: 7%;
  -webkit-animation-delay: 2.2s;
          animation-delay: 2.2s;
}
#stars circle:nth-of-type(15) {
  r: 2;
  cy: 8%;
  cx: 14%;
  -webkit-animation-delay: 7.5s;
          animation-delay: 7.5s;
}
#stars circle:nth-of-type(16) {
  r: 1;
  cy: 2%;
  cx: 45%;
  -webkit-animation-delay: 3.2s;
          animation-delay: 3.2s;
}
#stars circle:nth-of-type(17) {
  r: 1;
  cy: 50%;
  cx: 41%;
  -webkit-animation-delay: 7.3s;
          animation-delay: 7.3s;
}
#stars circle:nth-of-type(18) {
  r: 1;
  cy: 27%;
  cx: 55%;
  -webkit-animation-delay: 3.6s;
          animation-delay: 3.6s;
}
#stars circle:nth-of-type(19) {
  r: 2;
  cy: 14%;
  cx: 44%;
  -webkit-animation-delay: 6.2s;
          animation-delay: 6.2s;
}
#stars circle:nth-of-type(20) {
  r: 2;
  cy: 93%;
  cx: 19%;
  -webkit-animation-delay: 7.6s;
          animation-delay: 7.6s;
}
#stars circle:nth-of-type(21) {
  r: 1;
  cy: 90%;
  cx: 33%;
  -webkit-animation-delay: 5.6s;
          animation-delay: 5.6s;
}
#stars circle:nth-of-type(22) {
  r: 1;
  cy: 15%;
  cx: 83%;
  -webkit-animation-delay: 6.2s;
          animation-delay: 6.2s;
}
#stars circle:nth-of-type(23) {
  r: 2;
  cy: 70%;
  cx: 36%;
  -webkit-animation-delay: 5.3s;
          animation-delay: 5.3s;
}
#stars circle:nth-of-type(24) {
  r: 1;
  cy: 1%;
  cx: 42%;
  -webkit-animation-delay: 5.8s;
          animation-delay: 5.8s;
}
#stars circle:nth-of-type(25) {
  r: 2;
  cy: 26%;
  cx: 13%;
  -webkit-animation-delay: 4.7s;
          animation-delay: 4.7s;
}
#stars circle:nth-of-type(26) {
  r: 2;
  cy: 82%;
  cx: 6%;
  -webkit-animation-delay: 1.6s;
          animation-delay: 1.6s;
}
#stars circle:nth-of-type(27) {
  r: 2;
  cy: 59%;
  cx: 79%;
  -webkit-animation-delay: 5.3s;
          animation-delay: 5.3s;
}
#stars circle:nth-of-type(28) {
  r: 1;
  cy: 78%;
  cx: 48%;
  -webkit-animation-delay: 2.2s;
          animation-delay: 2.2s;
}
#stars circle:nth-of-type(29) {
  r: 2;
  cy: 9%;
  cx: 10%;
  -webkit-animation-delay: 8.5s;
          animation-delay: 8.5s;
}
#stars circle:nth-of-type(30) {
  r: 2;
  cy: 44%;
  cx: 93%;
  -webkit-animation-delay: 9.7s;
          animation-delay: 9.7s;
}
#stars circle:nth-of-type(31) {
  r: 2;
  cy: 7%;
  cx: 19%;
  -webkit-animation-delay: 9.5s;
          animation-delay: 9.5s;
}
#stars circle:nth-of-type(32) {
  r: 2;
  cy: 41%;
  cx: 13%;
  -webkit-animation-delay: 2.4s;
          animation-delay: 2.4s;
}
#stars circle:nth-of-type(33) {
  r: 2;
  cy: 79%;
  cx: 8%;
  -webkit-animation-delay: 0.6s;
          animation-delay: 0.6s;
}
#stars circle:nth-of-type(34) {
  r: 1;
  cy: 34%;
  cx: 34%;
  -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s;
}
#stars circle:nth-of-type(35) {
  r: 2;
  cy: 43%;
  cx: 37%;
  -webkit-animation-delay: 4.4s;
          animation-delay: 4.4s;
}
#stars circle:nth-of-type(36) {
  r: 2;
  cy: 88%;
  cx: 57%;
  -webkit-animation-delay: 5.1s;
          animation-delay: 5.1s;
}
#stars circle:nth-of-type(37) {
  r: 1;
  cy: 49%;
  cx: 89%;
  -webkit-animation-delay: 0.7s;
          animation-delay: 0.7s;
}
#stars circle:nth-of-type(38) {
  r: 2;
  cy: 24%;
  cx: 35%;
  -webkit-animation-delay: 2.8s;
          animation-delay: 2.8s;
}
#stars circle:nth-of-type(39) {
  r: 1;
  cy: 31%;
  cx: 85%;
  -webkit-animation-delay: 8.2s;
          animation-delay: 8.2s;
}
#stars circle:nth-of-type(40) {
  r: 2;
  cy: 45%;
  cx: 15%;
  -webkit-animation-delay: 1.2s;
          animation-delay: 1.2s;
}
#stars circle:nth-of-type(41) {
  r: 1;
  cy: 81%;
  cx: 38%;
  -webkit-animation-delay: 9.9s;
          animation-delay: 9.9s;
}
#stars circle:nth-of-type(42) {
  r: 2;
  cy: 90%;
  cx: 75%;
  -webkit-animation-delay: 3.2s;
          animation-delay: 3.2s;
}
#stars circle:nth-of-type(43) {
  r: 1;
  cy: 40%;
  cx: 82%;
  -webkit-animation-delay: 2.4s;
          animation-delay: 2.4s;
}
#stars circle:nth-of-type(44) {
  r: 2;
  cy: 73%;
  cx: 16%;
  -webkit-animation-delay: 4.4s;
          animation-delay: 4.4s;
}
#stars circle:nth-of-type(45) {
  r: 1;
  cy: 6%;
  cx: 90%;
  -webkit-animation-delay: 4.6s;
          animation-delay: 4.6s;
}
#stars circle:nth-of-type(46) {
  r: 1;
  cy: 31%;
  cx: 8%;
  -webkit-animation-delay: 9.5s;
          animation-delay: 9.5s;
}
#stars circle:nth-of-type(47) {
  r: 1;
  cy: 21%;
  cx: 70%;
  -webkit-animation-delay: 1.3s;
          animation-delay: 1.3s;
}
#stars circle:nth-of-type(48) {
  r: 2;
  cy: 25%;
  cx: 19%;
  -webkit-animation-delay: 5.4s;
          animation-delay: 5.4s;
}
#stars circle:nth-of-type(49) {
  r: 1;
  cy: 77%;
  cx: 92%;
  -webkit-animation-delay: 6.6s;
          animation-delay: 6.6s;
}
#stars circle:nth-of-type(50) {
  r: 1;
  cy: 65%;
  cx: 76%;
  -webkit-animation-delay: 1.1s;
          animation-delay: 1.1s;
}
#stars circle:nth-of-type(51) {
  r: 1;
  cy: 80%;
  cx: 31%;
  -webkit-animation-delay: 6.2s;
          animation-delay: 6.2s;
}
#stars circle:nth-of-type(52) {
  r: 1;
  cy: 82%;
  cx: 65%;
  -webkit-animation-delay: 4.3s;
          animation-delay: 4.3s;
}
#stars circle:nth-of-type(53) {
  r: 2;
  cy: 53%;
  cx: 17%;
  -webkit-animation-delay: 4.6s;
          animation-delay: 4.6s;
}
#stars circle:nth-of-type(54) {
  r: 2;
  cy: 74%;
  cx: 86%;
  -webkit-animation-delay: 3.5s;
          animation-delay: 3.5s;
}
#stars circle:nth-of-type(55) {
  r: 2;
  cy: 18%;
  cx: 7%;
  -webkit-animation-delay: 7.2s;
          animation-delay: 7.2s;
}
#stars circle:nth-of-type(56) {
  r: 2;
  cy: 38%;
  cx: 5%;
  -webkit-animation-delay: 1.2s;
          animation-delay: 1.2s;
}
#stars circle:nth-of-type(57) {
  r: 2;
  cy: 67%;
  cx: 15%;
  -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s;
}
#stars circle:nth-of-type(58) {
  r: 1;
  cy: 83%;
  cx: 5%;
  -webkit-animation-delay: 5.4s;
          animation-delay: 5.4s;
}
#stars circle:nth-of-type(59) {
  r: 1;
  cy: 49%;
  cx: 14%;
  -webkit-animation-delay: 5s;
          animation-delay: 5s;
}
#stars circle:nth-of-type(60) {
  r: 2;
  cy: 85%;
  cx: 72%;
  -webkit-animation-delay: 6.5s;
          animation-delay: 6.5s;
}
#stars circle:nth-of-type(61) {
  r: 2;
  cy: 66%;
  cx: 81%;
  -webkit-animation-delay: 9s;
          animation-delay: 9s;
}
#stars circle:nth-of-type(62) {
  r: 2;
  cy: 13%;
  cx: 6%;
  -webkit-animation-delay: 5.2s;
          animation-delay: 5.2s;
}
#stars circle:nth-of-type(63) {
  r: 2;
  cy: 23%;
  cx: 50%;
  -webkit-animation-delay: 8.7s;
          animation-delay: 8.7s;
}
#stars circle:nth-of-type(64) {
  r: 2;
  cy: 57%;
  cx: 52%;
  -webkit-animation-delay: 6.3s;
          animation-delay: 6.3s;
}
#stars circle:nth-of-type(65) {
  r: 1;
  cy: 34%;
  cx: 30%;
  -webkit-animation-delay: 4.6s;
          animation-delay: 4.6s;
}
#stars circle:nth-of-type(66) {
  r: 2;
  cy: 10%;
  cx: 57%;
  -webkit-animation-delay: 9.4s;
          animation-delay: 9.4s;
}
#stars circle:nth-of-type(67) {
  r: 2;
  cy: 73%;
  cx: 25%;
  -webkit-animation-delay: 4.2s;
          animation-delay: 4.2s;
}
#stars circle:nth-of-type(68) {
  r: 1;
  cy: 38%;
  cx: 4%;
  -webkit-animation-delay: 4.5s;
          animation-delay: 4.5s;
}
#stars circle:nth-of-type(69) {
  r: 1;
  cy: 62%;
  cx: 80%;
  -webkit-animation-delay: 8.2s;
          animation-delay: 8.2s;
}
#stars circle:nth-of-type(70) {
  r: 1;
  cy: 27%;
  cx: 68%;
  -webkit-animation-delay: 3.2s;
          animation-delay: 3.2s;
}
#stars circle:nth-of-type(71) {
  r: 1;
  cy: 51%;
  cx: 64%;
  -webkit-animation-delay: 2.1s;
          animation-delay: 2.1s;
}
#stars circle:nth-of-type(72) {
  r: 1;
  cy: 64%;
  cx: 31%;
  -webkit-animation-delay: 1.3s;
          animation-delay: 1.3s;
}
#stars circle:nth-of-type(73) {
  r: 2;
  cy: 12%;
  cx: 23%;
  -webkit-animation-delay: 3.8s;
          animation-delay: 3.8s;
}
#stars circle:nth-of-type(74) {
  r: 1;
  cy: 62%;
  cx: 55%;
  -webkit-animation-delay: 4.9s;
          animation-delay: 4.9s;
}
#stars circle:nth-of-type(75) {
  r: 2;
  cy: 78%;
  cx: 13%;
  -webkit-animation-delay: 2.1s;
          animation-delay: 2.1s;
}
#stars circle:nth-of-type(76) {
  r: 2;
  cy: 16%;
  cx: 32%;
  -webkit-animation-delay: 8.6s;
          animation-delay: 8.6s;
}
#stars circle:nth-of-type(77) {
  r: 2;
  cy: 86%;
  cx: 4%;
  -webkit-animation-delay: 4.8s;
          animation-delay: 4.8s;
}
#stars circle:nth-of-type(78) {
  r: 1;
  cy: 92%;
  cx: 87%;
  -webkit-animation-delay: 2.9s;
          animation-delay: 2.9s;
}
#stars circle:nth-of-type(79) {
  r: 2;
  cy: 17%;
  cx: 54%;
  -webkit-animation-delay: 0.5s;
          animation-delay: 0.5s;
}
#stars circle:nth-of-type(80) {
  r: 2;
  cy: 65%;
  cx: 76%;
  -webkit-animation-delay: 7.2s;
          animation-delay: 7.2s;
}
#stars circle:nth-of-type(81) {
  r: 1;
  cy: 68%;
  cx: 17%;
  -webkit-animation-delay: 8.8s;
          animation-delay: 8.8s;
}
#stars circle:nth-of-type(82) {
  r: 2;
  cy: 69%;
  cx: 52%;
  -webkit-animation-delay: 5s;
          animation-delay: 5s;
}
#stars circle:nth-of-type(83) {
  r: 1;
  cy: 67%;
  cx: 82%;
  -webkit-animation-delay: 7.8s;
          animation-delay: 7.8s;
}
#stars circle:nth-of-type(84) {
  r: 2;
  cy: 35%;
  cx: 51%;
  -webkit-animation-delay: 9.2s;
          animation-delay: 9.2s;
}
#stars circle:nth-of-type(85) {
  r: 2;
  cy: 80%;
  cx: 7%;
  -webkit-animation-delay: 1.2s;
          animation-delay: 1.2s;
}
#stars circle:nth-of-type(86) {
  r: 2;
  cy: 57%;
  cx: 72%;
  -webkit-animation-delay: 9.4s;
          animation-delay: 9.4s;
}
#stars circle:nth-of-type(87) {
  r: 1;
  cy: 81%;
  cx: 3%;
  -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s;
}
#stars circle:nth-of-type(88) {
  r: 2;
  cy: 66%;
  cx: 2%;
  -webkit-animation-delay: 4.4s;
          animation-delay: 4.4s;
}
#stars circle:nth-of-type(89) {
  r: 1;
  cy: 78%;
  cx: 66%;
  -webkit-animation-delay: 8.4s;
          animation-delay: 8.4s;
}
#stars circle:nth-of-type(90) {
  r: 2;
  cy: 35%;
  cx: 85%;
  -webkit-animation-delay: 6.5s;
          animation-delay: 6.5s;
}
#stars circle:nth-of-type(91) {
  r: 1;
  cy: 49%;
  cx: 76%;
  -webkit-animation-delay: 7.1s;
          animation-delay: 7.1s;
}
#stars circle:nth-of-type(92) {
  r: 2;
  cy: 7%;
  cx: 97%;
  -webkit-animation-delay: 8.7s;
          animation-delay: 8.7s;
}
#stars circle:nth-of-type(93) {
  r: 2;
  cy: 5%;
  cx: 44%;
  -webkit-animation-delay: 4.2s;
          animation-delay: 4.2s;
}
#stars circle:nth-of-type(94) {
  r: 1;
  cy: 83%;
  cx: 61%;
  -webkit-animation-delay: 3.8s;
          animation-delay: 3.8s;
}
#stars circle:nth-of-type(95) {
  r: 1;
  cy: 90%;
  cx: 50%;
  -webkit-animation-delay: 1.5s;
          animation-delay: 1.5s;
}
#stars circle:nth-of-type(96) {
  r: 2;
  cy: 24%;
  cx: 9%;
  -webkit-animation-delay: 4.5s;
          animation-delay: 4.5s;
}
#stars circle:nth-of-type(97) {
  r: 2;
  cy: 75%;
  cx: 18%;
  -webkit-animation-delay: 9.9s;
          animation-delay: 9.9s;
}
#stars circle:nth-of-type(98) {
  r: 2;
  cy: 5%;
  cx: 33%;
  -webkit-animation-delay: 6.8s;
          animation-delay: 6.8s;
}
#stars circle:nth-of-type(99) {
  r: 1;
  cy: 94%;
  cx: 30%;
  -webkit-animation-delay: 5.5s;
          animation-delay: 5.5s;
}
#stars circle:nth-of-type(100) {
  r: 2;
  cy: 73%;
  cx: 13%;
  -webkit-animation-delay: 5.8s;
          animation-delay: 5.8s;
}

#comets line {
  fill: none;
  stroke: #FFF;
  stroke-width: 1;
  stroke-dasharray: 150 980;
  stroke-dashoffset: 150;
  -webkit-animation: cometFall 10s ease-out infinite;
          animation: cometFall 10s ease-out infinite;
}
@-webkit-keyframes cometFall {
  5%, 100% {
    stroke-dashoffset: -980;
  }
}
@keyframes cometFall {
  5%, 100% {
    stroke-dashoffset: -980;
  }
}
#comets line:nth-child(1) {
  -webkit-animation-delay: 3.3s;
          animation-delay: 3.3s;
}
#comets line:nth-child(2) {
  -webkit-animation-delay: 3.7s;
          animation-delay: 3.7s;
}
#comets line:nth-child(3) {
  -webkit-animation-delay: 3.3s;
          animation-delay: 3.3s;
}
#comets line:nth-child(4) {
  -webkit-animation-delay: 1.2s;
          animation-delay: 1.2s;
}
#comets line:nth-child(5) {
  -webkit-animation-delay: 5.9s;
          animation-delay: 5.9s;
}
#comets line:nth-child(6) {
  -webkit-animation-delay: 1.2s;
          animation-delay: 1.2s;
}
#comets line:nth-child(7) {
  -webkit-animation-delay: 6.7s;
          animation-delay: 6.7s;
}
#comets line:nth-child(8) {
  -webkit-animation-delay: 7.2s;
          animation-delay: 7.2s;
}

</style>
