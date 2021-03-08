(function() {
  console.log(typeof(5));
  var a = 4;
  var b = 2;
  console.log(a -= b); // '2'
  console.log(a =- b); // '-2'
  var i = 0;
  console.log(i++); // '0'
  console.log(i); // '1'
  console.log(++i); // '2'
  var j = 10, k = 10;
  console.log(k === 10); // 'true'
  console.log(j === k); // 'true'
  // 삼항 조건 연산자
  var result = 10 > 3 ? 'hello' : 'fuck you';
  console.log(result);
  // var name = prompt('What your name?');
}());
(function() {
  /** 진영이의 하루 지출 내역이 다음과 같다고 할 때, 하루 지출 비용의 합계를 구한 후
   * 적정 지출 비용의 초과 여부를 출력하세요.
   * 교통비 : 3,000원, 식비 : 6,000원, 음료비 : 3,000원
   * 삼항 조건 연산자를 사용하여 하루 적정 지출 비용인 1만원을 초과했을 경우,
   * "OOO원 초과"라고 출력하고, 아닐 경우에는 "돈 관리 잘 했어요!"라고 출력하세요. */
  var transExpenses = 3000;
  var foodExpenses = 6000;
  var bevExpenses = 3000;
  var fairExp = 10000;
  var totalExp = transExpenses + foodExpenses + bevExpenses;
  totalExp > fairExp ? console.log(totalExp - fairExp + '원 초과') : console.log('돈 관리 잘 했어요!');
}());
(function() {
  /** 다음 연산자를 이용하여 평균 판매량을 구하고,
   * 4분기 판매량을 입력하여 평균 판매량의 이상/미달 값을 출력하세요.
   * 질의응답 창을 이용하여  4분기 판매량을 입력하고, 전 분기 평군 판매량보다 판매량이 높거나
   * 같을 경우에는 '판매량이 평균 이상입니다.'라고 출력하고,
   * 낮을 경우에는 '판매량이 평균 미달입니다.'라고 화면에 출력하세요.
   * 분기별 판매량; 1분기: 1,200, 2분기: 1,300, 3분기: 1,000 */
  var quarterlySales = {}
  quarterlySales.first = 1200;
  quarterlySales.second = 1300;
  quarterlySales.third = 1000;
  var whole = 0;
  for (quarter in quarterlySales) {
    whole += quarterlySales[quarter];
  }
  var avg = whole / Object.keys(quarterlySales).length;
  // quarterlySales.forth = prompt('forth?');
  quarterlySales.forth > avg ? console.log('판매량이 평균 이상입니다.') : console.log('판매량이 평균 미달입니다.');
}());
(function() {
  // var a = prompt('good', '0'); // 'good'이라는 출력과 함께, 입력창에 '0'이 기입된 채로 창이 실행된다.
  // console.log(a); 
  // confirm('message'); // 취소와 확인 버튼이 포함된 팝업창을 생성한다.
  // 여기서 확인 버튼을 누르면 'true', 취소를 누르면 'false'를 반환한다.
  // alert('message'); // 확인 버튼이 포함된 팝어창을 생성한다.
  /*
  var a = confirm('True?');
  if (a == true) {
    console.log(true);
  } else {
    console.log(false);
  } */
  /*
  var site = prompt('자주 이용하는 사이트는?');
  switch(site){
    case '구글': url = 'google.com';
    break;
    case '다음': url = 'daum.net';
    break;
    case '네이버': url = 'never.com';
    break;
    default: alert('보기중에 없는 사이트입니다.'); // case중 일치하는 데이터가 없을 경우 실행.
  }
  if(url) {
    location.href = 'http://www.' + url; // 'location.href = ""' 는 해당 url 주소로 이동하는 메소드이다.
  } */
  // do while 문: 일반적인 while 문과는 다르게 반드시 한 번은 코드를 실행하고 조건식을 검사한다.
  var i = 10;
  do {
    console.log(i);
    i--;
  } while (i < 3) // '10', 일단 한 번은 실행하고, 이후 조건식에 맞지 않는 데이터가 입력되기 때문에 do while문은 종료된다.
  for(var j = 0; j < 10; j++){
    if(j === 6) {
      break;
    }
    console.log(j);
  } // '5' 까지만 출력.
  for (var k = 0; k < 10; k++){
    console.log(k);
    if(k === 6) {
      break;
    }
  } // '6' 까지만 출력.
  for (var l = 0; l < 10; l++) {
    if (l === 6) {
      continue;
    }
    console.log(l);
  } // '6'을 제외하고 출력, continue문은 아래에 코드를 무시하고 다시 위의 반복문을 제개한다.
}());
(function() {
  /** while문을 이용하여 구구단 중 5단을 출력하세요. */
  var i = 5;
  var j = 1;
  while(j < 10) {
    console.log(i + ' X ' + j + ' = ' + i*j);
    j++;
  }
}());
(function() {
  /** 자바스크립트의 객체에는 크게 내장 객체, 브라우저 객체 모델(BOM, Browser Object Model),
   * 문서 객체 모델(DOM, Document Object Model)이 있다.
   * 내장 객체는 자바스크립트 엔진에 내장되어 있는 객체로서 String, Math, Date, Array 등이 있다.
   * BOM은 브라우저에 계층 구조로 내장되어 있는 객체로서 
   * window, screen, location, history, navigator 등이 있으며,
   * 브라우저(window)는 document와 location 객체의 상위 객체이다.
   * DOM은 HTML 문서 구조를 말한다. HTML 문서의 기본 구조는 최상위 객체로 <html>이 있으며,
   * 그 하위 객체로는 <head>와 <body>가 있다.  */
  var tv = new Object();
  tv.color = 'Black';
  tv.price = 3000000;
  tv.info = function() {
    console.log('tv 색상: ' + this.color);
    console.log('tv 가격: ' + this.price);
  }
  var car = {
    color: 'Grey',
    price: 5000000,
    info: function() {
      console.log('차 색상: ' + this.color);
      console.log('차 가격: ' + this.price);
    }
  }
  console.log(tv.info(), car.info());
  var today = new Date(); // Date 객체 생성
  var nowYear = today.getFullYear(); 
  var nowMonth = today.getMonth() + 1; // Date.getMonth() 메소드는 '현재 월 - 1' 정보를 가져온다.
  var nowDate = today.getDate(); // Date.getDate() 메소드는 '현재 일' 정보를 가져온다.
  var day = ['일', '월', '화', '수', '목', '금', '토']; 
  var nowDay = day[today.getDay()]; // Date.getDay() 메소드는 현재 요일 정보를 가져온다. (일: 0 ~ 토: 6)
  console.log('오늘은 ' + nowMonth + '월 ' + nowDate + '일 ' + nowDay + '요일입니다.');
  var worldCup = new Date(2002, 4, 31);
  var theYear = worldCup.getFullYear();
  var theMonth = worldCup.getMonth(); // 정확한 월 정보를 기입 했을 시 '-1'은 적용되지 않는다.
  var theDate = worldCup.getDate();
  var theDay = day[worldCup.getDay()];
  console.log('월드컵은 ' + theYear + '년 ' + theMonth + '월 ' + theDate + '일 ' + theDay + '요일입니다.');
  var dDay = new Date(nowYear, 12, 25);
  var diffDay = Math.round((dDay.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)); // 남은 날 = 특정 날짜 - 현재 날짜 (밀리 초 단위)
  console.log('크리스마스 D-day: ' + diffDay + '일 남았습니다');
  var a = [1, 2, 3, 4, 5];
  console.log(a); // [1, 2, 3, 4, 5]
  var a1 = a.splice(2, 2, 'Hi');
  console.log(a); // [1, 2, "Hi", 5]
  console.log(a1); // [3, 4]
  a.splice(3, 0, 'fuck');
  console.log(a); // [1, 2, "Hi", "fuck", 5]
  var a2 = a.pop();
  console.log(a); // [1, 2, "Hi", "fuck"]
  console.log(a2); // '5'
  var a3 = a.shift();
  console.log(a); // [2, "Hi", "fuck"]
  console.log(a3); // '1'
  a.push(0);
  console.log(a); // [2, "Hi", "fuck", 0]
  a.unshift(10);
  console.log(a); // [10, 2, "Hi", "fuck", 0]
}());
/* (function() {
  var t = new String('Hello World!'); // or var t = 'Hello world!';
  console.log(t.charAt(6)); // 'W'
  console.log(t.indexOf('W')); // '6'
  console.log()
  
  var userEmail = prompt("What's your E-mail?");
  var arrUrl = ['.co.kr', '.com', '.net', '.or.kr', '.go.kr'];
  var check1 = false;
  var check2 = false;
  if (userEmail.indexOf('@') > 0) {check1 = true;} // 찾는 문자열을 발견하지 못 할 경우 '-1'을 반환한다.
  for (i = 0; i < arrUrl.length; i++) {
    if (userEmail.indexOf(arrUrl[i]) > 0) {check2 = true;}
  }
  if (check1 === true && check2 === true) {
    console.log('Welcome!');
  } else {
    console.log('Your E-mail is not varified.');
  }
}()); */
(function() {
  /* if (confirm('Will you operate?')) {
    alert('Opertaing...');
  } */ 
  // 일정시간 간격으로 코드 실행하기
  // setInterval(function(){}, time interval): 일정한 시간 간격으로 코드를 반복 실행한다. (시간 간격의 단위는 1ms)
  // var intv = setInterval(function(){i++;}, 3000);
  // or var intv = setInerval('i++;', 3000);
  /* var addNum = 0;
  var subNum = 1000;
  var auto_1 = setInterval(function() {
    addNum++;
    console.log('addNum: ' + addNum);
  }, 3000);
  var auto_2 = setInterval(function() {
    subNum--;
    console.log('subNum: ' + subNum);
  }, 3000);
  if (confirm('Will you add number?')) {
    auto_1;
  } else {auto_2;} */

  // setTimeout(): 일정한 시간 후에 코드를 실행하고 종료한다.
  /* var addNum = 0;
  var auto = setTimeout(function() {
    addNum++;
    console.log(addNum);
  }, 3000); */ // 이는 변수로 선언만 해도 바로 실행된다.
  // clearInterval(참조변수)을 통해 메소드를 종료할 수 있다.
}());
(function() {
  /** location 객체: 사용자 브라우저와 관련된 메소드를 제공하는 객체이다. 
   * 현재 URL에 대한 정보(속성)과 새로 고침(reload) 메소드를 제공한다. */

  /** histiry 객체: 사용자가 방문한 사이트의 기록을 남기고,
   *  이전 방문 사이트와 다음 방문 사이트로 다시 돌아갈 수 있는 속성과 메소드를 제공한다. */

  /** navigator 객체: 현재 방문자가 사용하는 브라우저 정보와 운영체제 정보를 제공한다. */
  var info = navigator.userAgent.toLowerCase();
  var oslmg = null;

  if (info.indexOf('windows') >= 0) {
    oslmg = 'windows.png';
  } else if (info.indexOf('macintosh') >= 0) {
    oslmg = 'macintosh.png';
  } else if (info.indexOf('iphone') >= 0) {
    oslmg = 'iphone.png';
  } else if (info.indexOf('android') >= 0) {
    oslmg = 'android.png';
  }

  console.log(oslmg); // 'macintosh.png'

}());

(function() {
  /** 점심 시간에 '짜장면', '돈가스', '된장국', '김치찌개', '회덮밥' 중 
   * 어떤 메뉴로 선택할지 고민이 된다면 래덤으로 선택되도록 만들어 보세요.
   * 1. 배열 객체를 이용하여 메뉴의 5개 데이터를 변수 menu에 참조시키세요.
   * 2. Math.random()과 배열 데이터 개수(length)를 이용하여 배열 인덱스값이 랜덤으로 나오도록 하세요.   */
  var menu = ['짜장면', '돈가스', '된장국', '김치찌개', '회덮밥'];
  var menuNum = Math.floor(Math.random()*menu.length); // 0부터 4까지의 임의의 정수 생성(menu 배열의 인덱스와 동일)
  var result = menu[menuNum];
  console.log(result);
  
}());
(function() {
  var rightID = '이재신';
  var rightPassword = '재신';

  /* (function login() {
    var userID = prompt('아이디를 입력하세요.');

    if(userID === rightID) {
      var userPassword = prompt('비밀번호를 입력하세요.');

      if(userPassword === rightPassword) {
        alert(userID + '님 로그인 돼셨습니다.');
      } else {alert('비밀번호가 틀렸습니다.');}
    } else {alert('아이디가 틀렸습니다.');}
  }()); */
  function sum() {
    var sumNum = 0;
    for (i = 0; i < arguments.length; i++) {
      sumNum += arguments[i];
    }
    console.log(sumNum);
  }
  sum(4, 5, 13, 45); // '67'

  var arr = ['아이폰', '아이패드', '맥북'];
  function prod(array) {
    for(i = 0; i < array.length; i++) {
      console.log(i + '번째 제품: ' + array[i]);
    }
  }
  prod(arr); // 0번째 제품: 아이폰 \n 1번째 제품: 아이패드 \n 2번째 제품: 맥북
  prod(['a', '1', '2']); // 0번째 제품: a \n 1번째 제품: 1 \n 2번째 제품: 2
  // 재귀 함수 호출
  var num = 0;
  function test() {
    num++;
    console.log(num);
    if (num === 5) return;

    test(); // 함수를 다시 호출, 위에서 부터 다시 시작한다.
  }
  test(); // '1', '2', '3', '4', '5'
  
  var score = 50; // 전역 변수 선언
  console.log(score); // '50'
  function a() {
    var score = 10; // 지역 변수 선언
    console.log(score); // '10'
  }
  a();
  console.log(score); // '50'
  function b() {
    score = 10; // 전역 변수의 값을 바꿔준다.
  }
  b();
  console.log(score); // '10'
  // 객체 생성자 함수
  (function() {
    function checkWeight(name, height, weight) {
    this.userName = name;
    this.userHeight = height;
    this.userWeight = weight;
    this.minWeight;
    this.maxWeight;
    this.getInfo = function() {
      var str = '';
      str += '이름: ' + this.userName + ', ';
      str += '키: ' + this.userHeight + ', ';
      str += '몸무게: ' + this.userWeight + ', ';
      return str;
    }
    this.getResult = function() {
      this.minWeight = (this.userHeight - 100) * 0.9 - 5;
      this.maxWeight = (this.userHeight - 100) * 0.9 + 5;
      if (this.userWeight >= this.minWeight && this.userWeight <= this.maxWeight) {
        return '정상 몸무게 입니다.';
      } else if (this.userWeight <= this.minWeight) {
        return '저체중 입니다.'
      } else {return '과체중 입니다.';}
    }
    }
    var jang = new checkWeight('장보리', '168', '62');
    var park = new checkWeight('박달재', '180', '88');
    console.log(jang);
    console.log(park);
    console.log(jang.getInfo());
    console.log(jang.getResult());
    console.log(park.getInfo());
    console.log(park.getResult());
  }());
  // 메모리 절약을 위한 프로토타입 사용하기
  // 앞의 예제처럼 객체를 생성하면 객체를 생성한 만큼 함수가 등록되고, 그 만큼 메모리 공간을 많이 차지하게 된다.
  // 이럴 때는 객체 생성자 함수에 프로토타입을 사용하여 함수를 등록하면 메모리 낭비를 줄일 수 있다.
  // 프로토타입을 사용하여 등록한 함수는 객체 생성자 함수에서 생성된 객체를 공유하기 때문에, 여러 개의 함수를 등록할 필요가 없다.
  function checkWeight(name, height, weight) {
    this.userName = name;
    this.userHeight = height;
    this.userWeight = weight;
    this.minWeight;
    this.maxWeight;
  }
  checkWeight.prototype.getInfo = function() {
    var str = '';
    str += '이름: ' + this.userName + ', ';
    str += '키: ' + this.userHeight + ', ';
    str += '몸무게: ' + this.userWeight + ', ';
    return str;
  }
  checkWeight.prototype.getResult = function() {
    this.minWeight = (this.userHeight - 100) * 0.9 - 5;
    this.maxWeight = (this.userHeight - 100) * 0.9 + 5;
    if (this.userWeight >= this.minWeight && this.userWeight <= this.maxWeight) {
      return '정상 몸무게 입니다.';
    } else if (this.userWeight <= this.minWeight) {
      return '저체중 입니다.'
    } else {return '과체중 입니다.';}
  }
  var jang = new checkWeight('장보리', '168', '62');
  var park = new checkWeight('박달재', '180', '88');
  console.log(jang);
  console.log(jang.getInfo());
  console.log(jang.getResult());
  console.log(jang.getResult === park.getResult); // 'true', 두 객체가 같은 함수를 사용하고 있기 때문이다.
  // 프로토타입을 사용하지 않았을 때는 객체를 생성할 때 마다, 객체 생성자 함수 안의 메소드도 생성된 객체 안에 새로 생성되었다.
  // 하지만 위와 같이 프로토타입을 이용하여 메소드를 생성하면, 객체를 생성하더라도 따로 메소드가 더 생성되지 않는다.

}());
(function() {
  /** TestScroe 객체 생성자
   * 1. 객체 생성자 함수를 만들어 두 학생(kimgun, ohgun)의 객체를 생성하고 속성으로 이름, 국어 점수, 영어 점수를 등록한다.
   * 2. getTestInfo(), getAvg() 함수를 등록한다.
   * 조건
   * 1. 객체를 생성하면 프로토타입으로 함수를 등록한다.
   * 2. getTestInfp() 함수를 실행하면 이름, 국어, 영어 정보를 출력한다.
   * 3. getAvg() 함수를 실행하면 평균 점수를  출력한다.   */
  function TestScore(name, ko, eng) {
    this.studentName = name;
    this.koScore = ko;
    this.engScore = eng;
    this.avg = (ko + eng) / 2;
  }
  TestScore.prototype.getTestInfo = function() {
    return '이름: ' + this.studentName + ', 국어 성적: ' + this.koScore + ', 영어 성적: '+ this.engScore;
  }
  TestScore.prototype.getAvg = function() {
    return '평균 점수: ' + this.avg;
  }
  var kimgun = new TestScore('김군', 80, 90);
  var ohgun = new TestScore('오군', 100, 80);
  console.log(kimgun);
  console.log(kimgun.getTestInfo());
  console.log(kimgun.getAvg());
  console.log(ohgun);
  console.log(ohgun.getTestInfo());
  console.log(ohgun.getAvg());
  console.log(kimgun.getAvg === ohgun.getAvg);
}());