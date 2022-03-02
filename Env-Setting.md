# 컴퓨터 환경 세팅

## Win 10~
1. Node(JavaScript 엔진) 설치  
  1) https://github.com/coreybutler/nvm-windows/releases 에서 nvm-setup.zip 을 다운로드  
  2) unzip 후 nvm-setup 실행  
    - 폴더 설정 C:\pub\tools\nvm  
    - Node.js Symlink 설정 C:\Program Files\nodejs  
  3) Windows PowerShell 실행(관리자 모드)  
    $ nvm --version   
    Running version 1.1.9.  
    $ nvm list available  
    나온 버전 중 LTS 선택  
    $ nvm install 16.14.0   
    $ nvm install 14.19.0   
    $ nvm list  
    설치된 Node 버전이 보임  
    $ nvm use  14.19.0  
    $ node --version  
    v14.19.0  
    $ npm --version  
    6.14.16    
    $ npm install -g yarn  
    > yarn@1.22.17 preinstall C:\Program Files\nodejs\node_modules\yarn  
  
2. Git 설치  
  1) https://git-scm.com/downloads 에서 윈도우 용 다운로드  
    Git-2.35.1.2-64-bit.exe 다운로드 됨(실행)  
  2) Next 계속 누르고 Install(Default 설치)  
  
3. VS-Code(IDE) 설치 및 세팅  
설치  
  1) https://code.visualstudio.com/download 에서 윈도우 용 다운로드(시스템)  
    VSCodeSetup-x64-1.64.2.exe 실행  
    Default 설치(Next 계속 누리고 설치)  
  2) 사용할 Work Folder 생성 (예 C:\home\pl2020\js-workspace, C:\home\git-repo 등)  
  3) Ctrl+Shift+P (또는 View --> Command Palette...)  
    Click [Git: Clone]  
    Repository URL -- https://github.com/chomskim/pl2022.git 입력  
    미리 만든 git-repo 폴더를 찾아 선택  
  3) git-repo 에 있는 프로그램 폴더(pl2022)를 자신의 workspace(js-workspace) 로 copy  
  4) File --> Open Folder  
세팅  
  - 왼쪽 툴바 버튼 중 Extensions 선택  
  - Extension 중 다음을 선택하여 설치  
  Auto Rename Tag  
  ES7+ React/Redux/React-Native snippets  
  Indent-Rainbow  
  Live Server  
  Prettier - Code formatter  
    
추가 세팅  
    - 왼쪽 툴바 제일 아래쪽 세팅 버튼 선택   
    - 세팅 화면 오른쪽 위 첫번째 버튼(Open Settings) 클릭  
    
다음 내용을 추가  
```
"editor.tabSize": 2,
"editor.formatOnPaste": true,
"editor.formatOnSave": true,

"prettier.semi": false,
"prettier.singleQuote": true,

"editor.guides.bracketPairs": true,
"editor.bracketPairColorization.enabled": true,

"emmet.includeLanguages": {
   "javascript": "javascriptreact"
},
```
json 마지막에는 Comma 가 없음   




    
