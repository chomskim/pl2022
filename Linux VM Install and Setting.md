# Linux VM Install And Setting for pl2022

- 실력 있는 Full-stack 개발자가 되려면 리눅스를 잘 사용할 줄 알아야 합니다.  
- 윈도우 사용자는 VirtualBox를 이용해 리눅스 Virtual Machine을 만들어 사용.  
- 오래된 성능이 떨어진 윈도우 컴퓨터는 리눅스 머신으로 새로 인스톨.  
- 리눅스는 Ubuntu 20.04 사용  

## 1. VirtualBox를 이용한 Ubuntu Virtual Machine 설치
1) https://www.virtualbox.org/wiki/Downloads 에서 원하는 호스트(사용중인 컴퓨터 OS)로 다운로드 및 설치  
2) Oracle VM VirtualBox 관리자에서 --> 새로만들기  
	이름(예: win-ubu-20)  
	머신 폴더 (예: C:\vm\vm-disk)  
	종류: Linux  
	버전: Ubuntu 64bit  
  
	메모리 크기 4096MB 이상, 지금 새 가상 하드 디스크 만들기, VDI, 동적 할당, 40G 이상 --> 만들기	
	VirtualBox 에 머신이 생김(win-ubu-20)  
	설정 --> 디스플레이 -- 128M  
		--> 시스템 --> 프로세서 -- 2개  
  
3) https://ubuntu.com/download/desktop 에서 Ubuntu 20.04.4 LTS 데스크 탑 다운로드  
4) VirtualBox 에서 win-ubu-20을 시작  
5) 시동 디스크 선택 --> 3)에서 다운 받은 iso 파일 선택 -- 설치에 시간 걸림.  
6) 설치가 다 끝나면 자동으로 다시 시작 됨(Press Enter)  
7) 설치가 잘 안되거나 마음에 들지 않으면 머신 win-ubu-20을 삭제 후 다시 설치  
8) 만약 마우스가 잡혀서 보이지 않으면 Ctrl+Alt+Del로 나감  
  
## 2. VM을 위한 Ubuntu 초기 작업 
1) Terminal 열기(Ctrl+Alt+T 또는 검색에서 Term 후 선택)  
2) 다음 Command 우선 실행  
```sh
sudo apt update
sudo apt upgrade
sudo apt autoremove

sudo apt install perl gcc make
sudo apt install curl g++ net-tools git
```

3) 머신 가장 위 메뉴바에서 장치 --> 게스트 확장 CD 이미지 삽입  
	VirtualBox Guest Additions 가 설치됨 --> 다시 시작  
4) 머신에서 설정 --> 일반 --> 고급 --> 클립보드 공유 -- 양방향, 드래그 앤 드롭 -- 양방향  
			  --> 공유폴더 --> 오른쪽 [공유추가]버튼 --> 폴더경로 (예: C:\vm\vm-share), 자동마운트  
화면 크기 조정, 윈도우와 우분투 VM 사이의 복사/붙여넣기 가능해 짐.  
  
5) 추가 Command 실행  
```sh
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
-->fs.inotify.max_user_watches=524288

sudo adduser $USER vboxsf
```
  
머신에서 설정 --> 공유폴더 --> 오른쪽 [공유추가]버튼 --> 폴더경로 (예: C:\vm\vm-share), 자동마운트  
	-- 폴더를 통한 파일 공유가 가능해 짐.  

## 3. Node Install
1) 다음 Command 실행  
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
source ~/.bashrc
nvm list-remote
...
v14.19.0   (Latest LTS: Fermium)
...
v16.14.0   (Latest LTS: Gallium)
...
nvm install v16.14.0
nvm install v14.19.0 

$ node --version
v14.19.0
$ npm --version
6.14.16

npm install -g yarn

```
  
## 4. VS-Code Install
1) https://code.visualstudio.com/download 에서 리눅스 .deb 다운로드  
2) double click code_1.64.2-1644445741_amd64.deb --> install screen  
3) 검색 -- type co --> vs-code 실행 -- Ubuntu 툴바에서 Favorites 으로 추가  
4) Win10과 같은 방법으로 세팅  

## 5. Chrome Install
1) wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb 
2) sudo apt install ./google-chrome-stable_current_amd64.deb
3) 
