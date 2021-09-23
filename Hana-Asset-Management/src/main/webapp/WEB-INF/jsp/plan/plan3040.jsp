<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html class="ui-set-accessibility">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
				

	<title>Hana Solution - 연령별 목표설계</title>
	<link rel="shortcut icon" type="image/x-icon" href="${ pageContext.request.contextPath }/resources/images/favicon.png" />
        <!-- [favicon] begin -->
        <link rel="shortcut icon" type="image/x-icon" href="${ pageContext.request.contextPath }/resources/images/favicon.png" />
        <link rel="icon" type="image/x-icon" href="${ pageContext.request.contextPath }/resources/images/favicon.png" />
        <!-- Touch icons more info: http://mathiasbynens.be/notes/touch-icons -->
        <!-- For iPad3 with retina display: -->
        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="${ pageContext.request.contextPath }/resources/apple-touch-icon-144x.png" />
        <!-- For first- and second-generation iPad: -->
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="${ pageContext.request.contextPath }/resources/apple-touch-icon-114x.png" />
        <!-- For first- and second-generation iPad: -->
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="${ pageContext.request.contextPath }/resources/apple-touch-icon-72x.png" />
        <!-- For non-Retina iPhone, iPod Touch, and Android 2.1+ devices: -->
        <link rel="apple-touch-icon-precomposed" href="${ pageContext.request.contextPath }/resources/apple-touch-icon-57x.png" />
        <!-- [favicon] end -->
        
        <!-- CSSs -->
        <link rel="stylesheet" type="text/css" media="all" href="${ pageContext.request.contextPath }/resources/css/reset.css" /> <!-- RESET STYLESHEET -->
        <link rel="stylesheet" type="text/css" media="all" href="${ pageContext.request.contextPath }/resources/style.css" /> <!-- MAIN THEME STYLESHEET -->
        <link rel="stylesheet" id="max-width-1024-css" href="${ pageContext.request.contextPath }/resources/css/max-width-1024.css" type="text/css" media="screen and (max-width: 1240px)" />
        <link rel="stylesheet" id="max-width-768-css" href="${ pageContext.request.contextPath }/resources/css/max-width-768.css" type="text/css" media="screen and (max-width: 987px)" />
        <link rel="stylesheet" id="max-width-480-css" href="${ pageContext.request.contextPath }/resources/css/max-width-480.css" type="text/css" media="screen and (max-width: 480px)" />
        <link rel="stylesheet" id="max-width-320-css" href="${ pageContext.request.contextPath }/resources/css/max-width-320.css" type="text/css" media="screen and (max-width: 320px)" />
        
        <!-- CSSs Plugin -->
        <link rel="stylesheet" id="thickbox-css" href="${ pageContext.request.contextPath }/resources/css/thickbox.css" type="text/css" media="all" />
        <link rel="stylesheet" id="styles-minified-css" href="${ pageContext.request.contextPath }/resources/css/style-minifield.css" type="text/css" media="all" />
        <link rel="stylesheet" id="buttons" href="${ pageContext.request.contextPath }/resources/css/buttons.css" type="text/css" media="all" />
        <link rel="stylesheet" id="cache-custom-css" href="${ pageContext.request.contextPath }/resources/css/cache-custom.css" type="text/css" media="all" />
        <link rel="stylesheet" id="custom-css" href="${ pageContext.request.contextPath }/resources/css/custom.css" type="text/css" media="all" />
	    
        <!-- FONTs -->
        <link rel="stylesheet" id="google-fonts-css" href="http://fonts.googleapis.com/css?family=Oswald%7CDroid+Sans%7CPlayfair+Display%7COpen+Sans+Condensed%3A300%7CRokkitt%7CShadows+Into+Light%7CAbel%7CDamion%7CMontez&amp;ver=3.4.2" type="text/css" media="all" />
        <link rel='stylesheet' href='${ pageContext.request.contextPath }/resources/css/font-awesome.css' type='text/css' media='all' />
        
        <!-- JAVASCRIPTs -->
        <script type="text/javascript" src="${ pageContext.request.contextPath }/resources/js/jquery.js"></script>
        <script type="text/javascript" src="${ pageContext.request.contextPath }/resources/js/comment-reply.js"></script>
        <script type="text/javascript" src="${ pageContext.request.contextPath }/resources/js/jquery.quicksand.js"></script>
        <script type="text/javascript" src="${ pageContext.request.contextPath }/resources/js/jquery.tipsy.js"></script>
        <script type="text/javascript" src="${ pageContext.request.contextPath }/resources/js/jquery.prettyPhoto.js"></script>
        <script type="text/javascript" src="${ pageContext.request.contextPath }/resources/js/jquery.cycle.min.js"></script>
        <script type="text/javascript" src="${ pageContext.request.contextPath }/resources/js/jquery.anythingslider.js"></script>
        <script type="text/javascript" src="${ pageContext.request.contextPath }/resources/js/jquery.eislideshow.js"></script>
        <script type="text/javascript" src="${ pageContext.request.contextPath }/resources/js/jquery.easing.js"></script>
        <script type="text/javascript" src="${ pageContext.request.contextPath }/resources/js/jquery.flexslider-min.js"></script>
        <script type="text/javascript" src="${ pageContext.request.contextPath }/resources/js/jquery.aw-showcase.js"></script>
        <script type="text/javascript" src="${ pageContext.request.contextPath }/resources/js/layerslider.kreaturamedia.jquery-min.js"></script>
        <script type="text/javascript" src="${ pageContext.request.contextPath }/resources/js/shortcodes.js"></script>
		<script type="text/javascript" src="${ pageContext.request.contextPath }/resources/js/jquery.colorbox-min.js"></script>
		<script type="text/javascript" src="${ pageContext.request.contextPath }/resources/js/jquery.tweetable.js"></script>
		<script type="text/javascript" src="https://www.google.com/jsapi"></script>
		<script src="http://code.jquery.com/jquery-3.6.0.min.js"></script>
		
		<style type="text/css">
		
		.manageMenu:hover {
    		color: #008B8B; 
	   	}
	   	
	   	#manageNav{
	   		width: 10%;
	   		position: relative;
	   		margin-left: 17%;
	   		float: left;
	   	}
	   	
	   	#manageSec{
	   		width: 55%;
	   		position: relative;
	   		float: left;
	   	}
		
		</style>
		<link rel="stylesheet" href="${ pageContext.request.contextPath }/resources/plan/ow.css" type="text/css">



</head> 

<body>
	<header>
		<jsp:include page="/WEB-INF/include/header.jsp" />
	</header>
	<nav id="manageNav">
		<!-- START SIDEBAR -->
		<div class="inner group" style="width: 400px;">
	        <div class="sidebar group" style="width: 100%;">
	            
	            <div class="widget-first widget recent-posts" style="width: 100%;">
	                <h3 style="color: #008B8B; font-size: 15pt; padding-top: 30px;">목표설계</h3>
	                <hr style="border-color: #008B8B; width: 30%; float: left;">
	                <div class="recent-post group">
	                    <div class="hentry-post group">
	                        <a href="${ pageContext.request.contextPath }/plan/expense" title="재무설계" class="manageMenu" style="color: #008B8B; font-size: 11pt;">연령별 맞춤설계</a>
	                    </div>
	                    <div class="hentry-post group">
	                        <a href="#" title="재무설계" class="manageMenu" style="font-size: 11pt;">목표재무설계</a>
	                    </div>
	                    <div class="hentry-post group">
	                        <a href="${ pageContext.request.contextPath }/assetManagement/investmentForm" title="재무설계" class="manageMenu" style="font-size: 11pt;">fun한 재무설계</a>
	                    </div>
	                </div>
	            </div>
	            
	        </div>
	     </div>
	     <!-- END SIDEBAR -->
	</nav>

<section id="manageSec">

<div class="owm-con">
<div class="owm-tit-area">
    <h2 style="margin: 0px; padding-left: 50px;">연령별재무설계</h2>
    <hr style="border-color: #008B8B; border-width: 1px; width: 20%; text-align: center;">
</div>
<ol class="owm-fin-tab2 clearfix" style="margin-top: 15px; background-color: #F7F9FC; vertical-align: middle; padding-top: 50px;">
    <li style="list-style: none; margin-left: 100px;">
        <a href="${ pageContext.request.contextPath }/design2030" style="font-size: 14pt;">
            <strong>2030’s</strong><br><span style="font-size: 12pt;">사회초년기·자산형성기</span>
        </a>
    </li>
    <li style="list-style: none; margin-left: 20px;">
        <a href="${ pageContext.request.contextPath }/design3040" style="color: #008B8B; font-size: 14pt;">
            <strong style="color: #008B8B; font-size: 35pt;">3040’s</strong><br><span style="font-size: 12pt;">가족형성기·자산증식기</span>
        </a>
    </li>
    <li style="list-style: none; margin-left: 20px;">
        <a href="${ pageContext.request.contextPath }/design4050" style="font-size: 14pt;">
            <strong>4050’s</strong><br><span style="font-size: 12pt;">노후준비기·자산보존기</span>
        </a>
    </li>
    <li style="list-style: none; margin-left: 20px;">
        <a href="${ pageContext.request.contextPath }/design5060" style="font-size: 14pt;">
            <strong>5060’s</strong><br><span style="font-size: 12pt;">청춘100세·제2의 인생</span>
        </a>
    </li>
</ol>

    <div class="owm-fin-con">
        <h3 class="hidden" style="padding-top: 5px;">3040's 가족형성기 · 자산증식기</h3>
        <dl class="f-con1">
            <dt>목적자금마련을 위해<br> 가장 중요한 것은 굳은 의지!</dt>
            <dd style="font-size: 11pt;">지출이 많아지는 시기로 급여통장, 생활비통장, 비상금통장 등<br> 통장을 분리하여 관리하고, 체크카드를 이용하여 규모 있는 지출을 생활화 하자.</dd>
            <dd class="btn_fin1">
                <a href="#"><img alt="은퇴설계" src="${ pageContext.request.contextPath }/resources/plan/btn1.png"></a>
                <a href="#"><img alt="결혼자금 설계" src="${ pageContext.request.contextPath }/resources/plan/btn2.png"></a>
                <a href="#"><img alt="교육자금 설계" src="${ pageContext.request.contextPath }/resources/plan/btn3.png"></a>
                <a href="#"><img alt="주택자금 설계" src="${ pageContext.request.contextPath }/resources/plan/btn4.png"></a>
            </dd>
        </dl>
        <div class="f-con2 clearfix">
            <div class="fleft" style="position: relative; float: left; width: 33%;">
                <h4>3040's 재무목표</h4>
                <div class="img"><img src="${ pageContext.request.contextPath }/resources/plan/img_f3040_1.gif" alt="학자금 마련, 재테크 관심, 자동차 구입, 결혼비용 마련, 전세자금 마련"></div>
            </div>
            <div class="fleft fin_txt" style="position: relative; float: left; width: 30%;">
                <div>
                    <strong class="tit_copy">규모 있는 지출관리로 목돈을 모아 내 집 마련의 꿈을 이루자!</strong>
                    <span style="font-size: 10pt;">결혼과 함께 가정을 형성하고, <br>지출이 많아지게 되는 시기로 통장을 목적 별로<br>분리하여 관리하고,<br>
                    체크카드와 신용카드의 규모 있는 사용으로<br>합리적인 지출습관을 길러 저축금액을 늘리세요.<br>가장 기본적인 재테크는 절약과 저축입니다.<br>주기적인 자산현황의 점검과<br>저축은 내 집 마련의 시작입니다.</span>
                </div>
            </div>
            <div class="fleft" style="position: relative; float: left; width: 33%; margin-bottom: 20px;">
                <h4>자산배분비율</h4>
                <div class="graph"><img src="${ pageContext.request.contextPath }/resources/plan/graph_f3040.gif" alt="비상금 10%, 노후자금 10% , 주택자금 30%, 결혼자금 50%"></div>
            </div>
        </div>
        <div class="owm-infobox mt40" style="clear: both; text-align: left; margin-bottom: 20px;">
            <dl>
                <dt class="hidden" style="font-size: 12pt;">안내</dt>
                <dd style="font-size: 12pt;">내집마련, 자녀교육 등 분명한 목적을 정하고 목적과 기간에 따라 나에게 맞는 금융상품을 선택한 후 <br>계획적인 소비생활로 저축금액을 늘리고 꾸준히 저축하세요.</dd>
            </dl>
        </div>
        <div class="owm-table2 mt50 pb80">
            <table border="1" summary="용돈, 급여, 모임, 목돈만들기, 절세상품, 세테크, 추천서비스 제공 등 상품 목록을 확인하실 수 있습니다."> 
                <caption style="font-size: 15pt; text-align: center;"><strong style="color: #4F76A3;">상품 목록</strong></caption>
                <colgroup><col width="20%"><col></colgroup>
                <tbody>
                    <tr>
                        <th class="txt-c" scope="row" style="text-align: center;">
                            <div class="img"><img src="${ pageContext.request.contextPath }/resources/plan/ico_f2030_1.gif" alt=""></div>
                            급여, 생활비
                        </th>
                        <td>
                            <ul class="product_list">
                                <li style="margin-left: 10px;">
                                    <dl>
                                        <dt>급여하나 통장</dt>
                                        <dd>급여 하나면 된다!  <br>급여실적 하나로 수수료우대 혜택과 만35세이하 청년직장인을 위한 우대금리가 제공되는 월급통장!</dd>
                                        <dd class="btn"><a href="#" class="owm-btn-s bl" style="background-color: #008B8B; border: none;">가입하기</a></dd>
                                    </dl>
                                </li>
                                <li style="margin-left: 10px;">
                                    <dl>
                                        <dt>주거래하나 통장</dt>
                                        <dd>이체거래 하나면 된다!  <br>카드대금, 공과금 등 매월 간단한 이체거래로 수수료면제서비스가 제공되는 우리집 생활비 통장!</dd>
                                        <dd class="btn"><a href="#" class="owm-btn-s bl" style="background-color: #008B8B; border: none;">가입하기</a></dd>
                                    </dl>
                                </li>
                                <li style="margin-left: 10px;">
                                    <dl>
                                        <dt>주거래 정기예금</dt>
                                        <dd>입출금 거래가 늘어날수록 정기예금 금리도 쑥~쑥! <br>KEB하나은행 주거래 고객을 위한 주거래 정기예금</dd>
                                        <dd class="btn"><a href="#" class="owm-btn-s bl" style="background-color: #008B8B; border: none;">가입하기</a></dd>
                                    </dl>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th class="txt-c" scope="row" style="text-align: center;">
                            <div class="img"><img src="${ pageContext.request.contextPath }/resources/plan/ico_f2030_2.gif" alt=""></div>
                            목돈만들기
                        </th>
                        <td>
                            <ul class="product_list">
                                <li style="margin-left: 10px;">
                                    <dl>
                                        <dt>급여하나 월복리 적금</dt>
                                        <dd>급여 하나로 우대금리 OK!  <br>월복리로 이자에 이자가 OK!</dd>
                                        <dd class="btn"><a href="#" class="owm-btn-s bl" style="background-color: #008B8B; border: none;">가입하기</a></dd>
                                    </dl>
                                </li>
                                <li style="margin-left: 10px;">
                                    <dl>
                                        <dt>하나의 여행 적금</dt>
                                        <dd>기다리던 여행, 하나의 여행 적금으로 떠나보세요!<br>여행사 혜택도 받고, 여행 다녀오면 우대금리까지!</dd>
                                        <dd class="btn"><a href="#" class="owm-btn-s bl" style="background-color: #008B8B; border: none;">가입하기</a></dd>
                                    </dl>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th class="txt-c" scope="row" style="text-align: center;">
                            <div class="img"><img src="${ pageContext.request.contextPath }/resources/plan/ico_f2030_3.gif" alt=""></div>
                            절세상품
                        </th>
                        <td>
                            <ul class="product_list">
                                <li style="margin-left: 10px;">
                                    <dl>
                                        <dt>주택청약종합저축</dt>
                                        <dd>주택마련의 시작! 국민, 민영주택 분양 우선권이 주어지는 주택청약종합상품</dd>
                                        <dd class="btn"><a href="#" class="owm-btn-s bl" style="background-color: #008B8B; border: none;">가입하기</a></dd>
                                    </dl>
                                </li>
                                <li style="margin-left: 10px;">
                                    <dl>
                                        <dt>【일임형】개인종합자산관리계좌(ISA)</dt>
                                        <dd>예금,펀드 등 다양한 금융상품을 담아 통합 관리할 수 있는 계좌로 <br>
				                                            일정기간 동안 상품 운용 결과로 계좌 내 발생하는 이익·손실 간 통산 후 <br>
				                                            순이익에 세제혜택이 부여되는 절세종합통장입니다.
				                        </dd>
                                        <dd class="btn"><a href="#" class="owm-btn-s bl" style="background-color: #008B8B; border: none;">가입하기</a></dd>
                                    </dl>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th class="txt-c" scope="row" style="text-align: center;">
                            <div class="img"><img src="${ pageContext.request.contextPath }/resources/plan/ico_f2030_4.gif" alt=""></div>
                            세테크
                        </th>
                        <td>
                            <ul class="product_list">
                                <li style="margin-left: 10px;">
                                    <dl>
                                        <dt>연금저축펀드</dt>
                                        <dd>노후생활 준비와 세액공제 혜택을 동시에!!</dd>
                                        <dd class="btn">
                                        <a href="#" class="owm-btn-s bl" style="background-color: #008B8B; border: none;">상품보기</a>
                                        </dd>
                                    </dl>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th class="txt-c" scope="row" style="text-align: center;">
                            <div class="img"><img src="${ pageContext.request.contextPath }/resources/plan/ico_f2030_5.gif" alt=""></div>
                            추천서비스
                        </th>
                        <td>
                            <ul class="product_list">
                                <li style="margin-left: 10px;">
                                    <dl>
                                        <dt>재무설계</dt>
                                        <dd>교육자금, 주택자금, 결혼자금 설계로 더 나은 미래를 미리 준비해 보세요.</dd>
                                        <dd class="btn"><a href="#" class="owm-btn-s bl" style="background-color: #008B8B; border: none;">서비스보기</a></dd>
                                    </dl>
                                </li>
                                <li style="margin-left: 10px;">
                                    <dl>
                                        <dt>은퇴설계</dt>
                                        <dd>고객님의 100세 시대 은퇴 설계 가이드를 해드리기 위한 <br>Hana Solution 자산관리 서비스입니다.</dd>
                                        <dd class="btn"><a href="#" class="owm-btn-s bl" style="background-color: #008B8B; border: none;">서비스보기</a></dd>
                                    </dl>
                                </li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>

	</section>
	<footer style="clear: both;">
		<jsp:include page="/WEB-INF/include/footer.jsp" />
	</footer>
</body>
</html>