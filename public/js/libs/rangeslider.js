!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):t("object"==typeof exports?require("jquery"):jQuery)}(function(t){"use strict";function i(){var t=document.createElement("input");return t.setAttribute("type","range"),"text"!==t.type}function e(t,i){var e=Array.prototype.slice.call(arguments,2);return setTimeout(function(){return t.apply(null,e)},i)}function n(t,i){return i=i||100,function(){if(!t.debouncing){var e=Array.prototype.slice.apply(arguments);t.lastReturnVal=t.apply(window,e),t.debouncing=!0}return clearTimeout(t.debounceTimeout),t.debounceTimeout=setTimeout(function(){t.debouncing=!1},i),t.lastReturnVal}}function s(t){return t&&(0===t.offsetWidth||0===t.offsetHeight||t.open===!1)}function o(t){for(var i=[],e=t.parentNode;s(e);)i.push(e),e=e.parentNode;return i}function h(t,i){function e(t){"undefined"!=typeof t.open&&(t.open=!t.open)}var n=o(t),s=n.length,h=[],r=t[i];if(s){for(var a=0;s>a;a++)h[a]=n[a].style.cssText,n[a].style.display="block",n[a].style.height="0",n[a].style.overflow="hidden",n[a].style.visibility="hidden",e(n[a]);r=t[i];for(var l=0;s>l;l++)n[l].style.cssText=h[l],e(n[l])}return r}function r(t,i){var e=parseFloat(t);return Number.isNaN(e)?i:e}function a(i,s){if(this.$window=t(window),this.$document=t(document),this.$element=t(i),this.options=t.extend({},f,s),this.polyfill=this.options.polyfill,this.onInit=this.options.onInit,this.onSlide=this.options.onSlide,this.onSlideEnd=this.options.onSlideEnd,this.polyfill&&u)return!1;this.identifier="js-"+l+"-"+d++,this.startEvent=this.options.startEvent.join("."+this.identifier+" ")+"."+this.identifier,this.moveEvent=this.options.moveEvent.join("."+this.identifier+" ")+"."+this.identifier,this.endEvent=this.options.endEvent.join("."+this.identifier+" ")+"."+this.identifier,this.toFixed=(this.step+"").replace(".","").length-1,this.$fill=t('<div class="'+this.options.fillClass+'" />'),this.$handle=t('<div class="'+this.options.handleClass+'" />'),this.$range=t('<div class="'+this.options.rangeClass+'" id="'+this.identifier+'" />').insertAfter(this.$element).prepend(this.$fill,this.$handle),this.$element.css({position:"absolute",width:"1px",height:"1px",overflow:"hidden",opacity:"0"}),this.handleDown=t.proxy(this.handleDown,this),this.handleMove=t.proxy(this.handleMove,this),this.handleEnd=t.proxy(this.handleEnd,this),this.init();var o=this;this.$window.on("resize."+this.identifier,n(function(){e(function(){o.update()},300)},20)),this.$document.on(this.startEvent,"#"+this.identifier+":not(."+this.options.disabledClass+")",this.handleDown),this.$element.on("change."+this.identifier,function(t,i){if(!i||i.origin!==o.identifier){var e=t.target.value,n=o.getPositionFromValue(e);o.setPosition(n)}})}Number.isNaN=Number.isNaN||function(t){return"number"==typeof t&&t!==t};var l="rangeslider",d=0,u=i(),f={polyfill:!0,rangeClass:"rangeslider",disabledClass:"rangeslider--disabled",fillClass:"rangeslider__fill",handleClass:"rangeslider__handle",startEvent:["mousedown","touchstart","pointerdown"],moveEvent:["mousemove","touchmove","pointermove"],endEvent:["mouseup","touchend","pointerup"]};a.prototype.init=function(){this.update(!0),this.$element[0].value=this.value,this.onInit&&"function"==typeof this.onInit&&this.onInit()},a.prototype.update=function(t){t=t||!1,t&&(this.min=r(this.$element[0].getAttribute("min"),0),this.max=r(this.$element[0].getAttribute("max"),100),this.value=r(this.$element[0].value,this.min+(this.max-this.min)/2),this.step=r(this.$element[0].getAttribute("step"),1)),this.handleWidth=h(this.$handle[0],"offsetWidth"),this.rangeWidth=h(this.$range[0],"offsetWidth"),this.maxHandleX=this.rangeWidth-this.handleWidth,this.grabX=this.handleWidth/2,this.position=this.getPositionFromValue(this.value),this.$element[0].disabled?this.$range.addClass(this.options.disabledClass):this.$range.removeClass(this.options.disabledClass),this.setPosition(this.position)},a.prototype.handleDown=function(t){if(t.preventDefault(),this.$document.on(this.moveEvent,this.handleMove),this.$document.on(this.endEvent,this.handleEnd),!((" "+t.target.className+" ").replace(/[\n\t]/g," ").indexOf(this.options.handleClass)>-1)){var i=this.getRelativePosition(t),e=this.$range[0].getBoundingClientRect().left,n=this.getPositionFromNode(this.$handle[0])-e;this.setPosition(i-this.grabX),i>=n&&i<n+this.handleWidth&&(this.grabX=i-n)}},a.prototype.handleMove=function(t){t.preventDefault();var i=this.getRelativePosition(t);this.setPosition(i-this.grabX)},a.prototype.handleEnd=function(t){t.preventDefault(),this.$document.off(this.moveEvent,this.handleMove),this.$document.off(this.endEvent,this.handleEnd),this.$element.trigger("change",{origin:this.identifier}),this.onSlideEnd&&"function"==typeof this.onSlideEnd&&this.onSlideEnd(this.position,this.value)},a.prototype.cap=function(t,i,e){return i>t?i:t>e?e:t},a.prototype.setPosition=function(t){var i,e;i=this.getValueFromPosition(this.cap(t,0,this.maxHandleX)),e=this.getPositionFromValue(i),this.$fill[0].style.width=e+this.grabX+"px",this.$handle[0].style.left=e+"px",this.setValue(i),this.position=e,this.value=i,this.onSlide&&"function"==typeof this.onSlide&&this.onSlide(e,i)},a.prototype.getPositionFromNode=function(t){for(var i=0;null!==t;)i+=t.offsetLeft,t=t.offsetParent;return i},a.prototype.getRelativePosition=function(t){var i=this.$range[0].getBoundingClientRect().left,e=0;return"undefined"!=typeof t.pageX?e=t.pageX:"undefined"!=typeof t.originalEvent.clientX?e=t.originalEvent.clientX:t.originalEvent.touches&&t.originalEvent.touches[0]&&"undefined"!=typeof t.originalEvent.touches[0].clientX?e=t.originalEvent.touches[0].clientX:t.currentPoint&&"undefined"!=typeof t.currentPoint.x&&(e=t.currentPoint.x),e-i},a.prototype.getPositionFromValue=function(t){var i,e;return i=(t-this.min)/(this.max-this.min),e=i*this.maxHandleX},a.prototype.getValueFromPosition=function(t){var i,e;return i=t/(this.maxHandleX||1),e=this.step*Math.round(i*(this.max-this.min)/this.step)+this.min,Number(e.toFixed(this.toFixed))},a.prototype.setValue=function(t){t!==this.value&&this.$element.val(t).trigger("input",{origin:this.identifier})},a.prototype.destroy=function(){this.$document.off("."+this.identifier),this.$window.off("."+this.identifier),this.$element.off("."+this.identifier).removeAttr("style").removeData("plugin_"+l),this.$range&&this.$range.length&&this.$range[0].parentNode.removeChild(this.$range[0])},t.fn[l]=function(i){var e=Array.prototype.slice.call(arguments,1);return this.each(function(){var n=t(this),s=n.data("plugin_"+l);s||n.data("plugin_"+l,s=new a(this,i)),"string"==typeof i&&s[i].apply(s,e)})}});