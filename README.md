# node_study

<ul>
<li>
runtime: 프로그램이 구동되는 환경.
</li>
<li>
app.js: 서버를 실행/중지/관리. -> 명령어로 자바스크립트 파일 실행.
</li>
<li>
Express: node.js를 도와주는 도구 
</li><li>
npm(node package manager): node.js 모듈 관리
</li><li>
npm init 명령어 -> package.json 패키지 목록을 관리하고 프로젝트의 정보 및 기타 실행 스크립트 파일 
</li><li>
mkdir 이름 -> 폴더 생성 명령어 
</li><li>
touch 이름.확장자 -> mac 명령어  
</li><li>
npm install express -> express 설치  
</li><li>
npm install helmet -> helmet 설치 
</li><li>
node app.js -> 서버 시작  
</li><li>
npm install supervisor 
</li><li>
supervisor app.js -> supervisor로 app.js 실행  
</li><li>
npm install ejs  
</li><li>
npm install axios cheerio iconv-lite 
</li>
</ul>
<br/>

<ul>
<li>정해진 시간에 작업을! 스케쥴러
<a href="https://www.npmjs.com/package/node-schedule">https://www.npmjs.com/package/node-schedule</a>
</li>
<li>nodejs에서 이메일을 보내기!
<a href="https://www.npmjs.com/package/nodemailer">
https://www.npmjs.com/package/nodemailer</a>
</li>
<li>html 화면을 pdf로 만들고 내려받기
<a href="https://www.npmjs.com/package/html-pdf">
https://www.npmjs.com/package/html-pdf</a>
</li>
<li>html 화면을 이미지파일로 만들어서 내려받기(보정까지)
<a href="https://www.npmjs.com/package/html2canvas">
https://www.npmjs.com/package/html2canvas</a>
</li>
<li>이미지를 크롭하기!
<a href="https://www.npmjs.com/package/cropperjs">
https://www.npmjs.com/package/cropperjs</a>
</li>
<li>TOP1000 npm모듈
<a href="https://gist.github.com/anvaka/8e8fa57c7ee1350e3491">
https://gist.github.com/anvaka/8e8fa57c7ee1350e3491</a>
</li>
</ul>
<br/>

<ul>
	<li>※ mysql 비밀번호 변경 </li>
	<li>C:\Program Files\MySQL\MySQL Server 8.3\bin</li>
	<li>1. root 계정 로그인 (cmd창 관리자 권한으로 실행 -> mysql 실행 폴더로 이동 후)
		$ mysql -u root -p</li>
	<li>2. 사용자 정보가 포함된 'mysql' DB 사용
		use mysql;</li>
	<li>3. 버전 별 password 변경 쿼리 적용
		# 5.6 이하
		 update user set password=password('new password') where user = 'root';
	<br/>
	# 5.7 이상
	update user set authentication_string=password('new password') where user = 'root';
	<br/>
	# 8.x 이상
	alter user 'root'@'localhost' identified with mysql_native_password by 'new password';
	</li>
	<li>4. 변경사항 적용
	flush privileges;</li>

</ul>