function hashedChoice(t,e,i){(_.isEqual(t,e)||_.isEqual(t,i))&&$("#"+t+"Checked").attr("checked",!0)}function formErr(t){var e=$("#"+t+"-error");e.removeClass("invisible"),setTimeout(function(){e.addClass("invisible")},3e3)}function numberWithCommas(t){return void 0!==t?t.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g,","):void 0}function removeSpaces(t){return t.split(" ").join("")}function numeric(t){return t.replace(/[^0-9.]/g,"")}function setValue(t,e){$("#"+t).val(e),$("#"+t).attr("value",e)}function getPieValues(t){return _.map(t,function(t){return+$("#"+t).val()})}function toggleMsg(t,e){return e?$(t).fadeIn("fast"):$(t).fadeOut("fast")}function disableSubmit(t,e){return $(t).prop("disabled",e)}function reslicePie(t,e,i){var a=_.reduce(getPieValues(e),function(t,e){return t+=e},0),n=_.reduce(e,function(t,e){return t[e]=+$("#"+e).attr("value"),t},{}),o=pie_1.indexOf(t)>=0?"pie-chart":"pie-chart2",r=0;_.forIn(_.omit(n,t),function(t,e){++r,n["affected"+r]=e}),getPieValues(e).forEach(function(t,i){0>t?setValue(e[i],0):!1,t>100?setValue(e[i],100):!1}),toggleMsg("#"+o,100>a||a>100),disableSubmit("#submit-calculator-inputs",a>100||100>a),D3.pie(getPieValues(e),o)}$(document).foundation();var pie_1=["stocks","bonds","cash"],pie_2=["large-usa-stocks","mid-small-usa-stocks","foreign-stocks"];$(function(){var t=window.location.hash.substr(1);hashedChoice(t,"savings","spending"),hashedChoice(t,"annual","monthly"),$(".calculator-purchase").each(function(){var t=$(this).attr("data");$(this).is(":checked")&&$("#calculator-choice").val(t)}),$(".subscription-purchase").each(function(){var t=$(this).attr("data");$(this).is(":checked")&&$("#calculator-choice").val(t)}),$(".subscription-purchase").click(function(){var t=$(this).attr("data");$("#calculator-choice").val(t)}),$(".calculator-purchase").click(function(){var t=$("#savingsChecked"),e=$("#spendingChecked"),i=$("#calculator-choice");$(".calculator-purchase").each(function(){t.is(":checked")&&e.is(":checked")?i.val("bothCalculators"):(t.is(":checked")&&i.val("savingsCalculator"),e.is(":checked")&&i.val("spendingCalculator"))})}),$("#logo-img").attr("src","data:image/;base64,"+$("#img-stream").attr("data")),$("#logo-img-prev").attr("src","data:image/;base64,"+$("#img-stream").attr("data"));var e=425;$("#textarea_feedback").html(e+" Characters Remaining"),$("#textarea").keyup(function(){var t=$(this).val().length,i=e-t;$("#textarea_feedback").html(i+" characters remaining")}),$(".back-to-top").click(function(){window.scrollTo(0,0)}),$(".big-number").each(function(){var t=$(this).html();$(this).html(numberWithCommas(t))}),$("input#years-spending").on("blur",function(){var t=+$(this).val(),e=t%5,i=e>=3?5:0;_.isEqual(e,0)||$(this).parent().prepend('<p id="years-err-msg">Please enter years in five (5) year increments starting with 5 years and growing no longer than 50 years.</p>').fadeIn("fast",function(){$("#years-err-msg").delay(2500).fadeOut()}),$(this).val(t-e+i)}),$("#userType").val($("#userTypeValue").val()),$("#companyState").val($("#companyStateValue").val()),$("#upload-logo").click(function(){$("#company-logo").click()}),$("#company-logo").change(function(t){$("#logo-errors").text("");var e=2097152;if(_.isEqual(t.target.files[0],void 0))return!1;if(t.target.files[0].size>e)return $("#logo-errors").text("File size must be 2MB or less"),!1;var i=new FileReader;i.onload=function(t){$("#logo-preview").html($("<img>",{src:t.target.result,alt:"Company Logo"}))},i.readAsDataURL(t.target.files[0])}),$("#delete-logo").click(function(){$("#company-logo").val(""),$("#logo-preview").html(""),$(".company-logo-exists").length>0&&$("#logo-preview").removeClass("company-logo-exists").addClass("company-logo")}),$("#change-inputs").click(function(t){$("#calculator-inputs-tab").click()}),$("#start-again").click(function(t){$("#calculator-inputs-tab").click(),location.reload(!1)}),D3.pie(getPieValues(pie_1),"pie-chart"),D3.pie(getPieValues(pie_2),"pie-chart2"),$(window).on("resize",function(){var t=$(".pie-chart svg, .pie-chart2 svg"),e=t.parent().width();t.attr("width",e),t.attr("height",e)}),$('input[type="range"]').rangeslider({polyfill:!1}),$('input[type="range"]').on("input",function(t){var e=$(this).attr("id").replace("-slider","");$("#"+e).val(numberWithCommas(t.target.value))}),$(".calculator-input").each(function(t,e){$(e).val(numberWithCommas($(e).val())),$(e).blur(function(t){var i=$("#"+$(e).attr("id")+"-slider"),a=+$(e).val().replace(/[, ]+/g,"").trim(),n=+$(this).attr("min"),o=+$(this).attr("max"),r=$(this).attr("id"),l=o>=a&&a>=n?a:n;i.val(l).change(),setValue(r,numberWithCommas(l))})}),$(".close-modal").click(function(t){$(this).foundation("reveal","close")}),$(".toggle").click(function(t){$(this).hide(),$(".confirm-toggle").show()}),$(".confirm-toggle").one("click",function(t){$(this).html("loading..."),$("#submit-form").submit()}),$("#withdrawal-adjustment-occurrences").change(function(){var t=+$(this).val();_.isEqual(t,2)?($(".1-withdrawal").show(),$(".2-withdrawal").hide()):_.isEqual(t,3)?($(".1-withdrawal").show(),$(".2-withdrawal").show()):($(".1-withdrawal").hide(),$(".2-withdrawal").hide())}),$("#investment-strategy-option1, #investment-strategy-option1-check, #investment-strategy-option1-label").click(function(){$("#investment-strategy-option1").hasClass("free-disabled")||($("input#target-stocks").prop("disabled",!0),$("#target-stocks-slider").prop("disabled",!0),$("#target-stocks-slider").rangeslider("update"))}),$("#investment-strategy-option2, #investment-strategy-option2-check, #investment-strategy-option2-label").click(function(){$("#investment-strategy-option2").hasClass("free-disabled")||($("input#target-stocks").prop("disabled",!1),$("#target-stocks-slider").prop("disabled",!1),$("#target-stocks-slider").rangeslider("update"))}),$(".radio-btn-check").click(function(){var t=$(this).parent().find("input[type=radio]");t.prop("disabled")||t.prop("checked",!0);var e=+t.val();_.isEqual(e,2)?($(".contributionOption1").hide(),$(".contributionOption2").show()):($(".contributionOption1").show(),$(".contributionOption2").hide())}),$('input[name="contributionOption"]').change(function(){var t=+$(this).val();_.isEqual(t,2)?($(".contributionOption1").hide(),$(".contributionOption2").show()):($(".contributionOption1").show(),$(".contributionOption2").hide())}),$(".arrow").click(function(t){var e=$(this).parent().siblings(".portfolio-input"),i=_.isUndefined($(this).attr("up"))?e.val()>0?+e.val()-5:0:+e.val()+5,a=e.attr("id"),n=pie_1.indexOf(a)>=0;setValue(a,i),n?$(".pie-chart").html(""):$(".pie-chart2").html(""),n?reslicePie(a,pie_1):reslicePie(a,pie_2)}),$(".pie-input").blur(function(){var t=$(this).attr("id"),e=pie_1.indexOf(t)>=0,i=_.isNaN(Number(this.value))?0:Number(this.value);setValue(t,i),e?$(".pie-chart").html(""):$(".pie-chart2").html(""),i>=100?e?reslicePie(t,pie_1,!0):reslicePie(t,pie_2,!0):e?reslicePie(t,pie_1):reslicePie(t,pie_2)})}),$.cookie("email")?($("#email").val($.cookie("email")),$(".calculator-form").submit()):$("#submit-calculator-inputs").attr("data-reveal-id","SubmitEmailModal").on("click",function(t){t.preventDefault(),$("#emailInput").keydown(function(t){$("#submit-email-calculator").attr("disabled","disabled");var e=/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{2,3})(\]?)$/,i=$("#emailInput").val();e.test(i)&&void 0!=i&&$("#submit-email-calculator").removeAttr("disabled"),13==t.which&&e.test(i)&&void 0!=i&&(t.preventDefault(),$.cookie("email",$("#emailInput").val()),$("#email").val($("#emailInput").val()),$(".calculator-form").submit(),$("#SubmitEmailModal").foundation("reveal","close"))}),$("#submit-email-calculator").on("click",function(){$.cookie("email",$("#emailInput").val()),$("#email").val($("#emailInput").val()),$(".calculator-form").submit(),$("#SubmitEmailModal").foundation("reveal","close")})});