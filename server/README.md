# PCW_server

## ❄️ Features
### Open API
- [openweathermap 날씨 API](https://openweathermap.org/API)를 사용하여 현재 날씨와 오늘 전체 날씨 조회
- [네이버 뉴스 API](https://developers.naver.com/docs/search/news/)를 사용하여 날씨 관련 뉴스 조회
### MySQL DB
- 옷 정보를 DB에 저장
- 현재 날씨에 맞는 옷을 가져와 랜덤으로 전달
<br>

## ⛄️ Architecture
### Service
<img src="https://user-images.githubusercontent.com/61102301/100213583-233dab80-2f52-11eb-8ac7-e6b909e59ba6.jpeg" width="80%"></img>
> 클라이언트에게 요청이 오면, 현재 날씨, 오늘 전체 날씨, 뉴스 기사를 해당 Open API에 요청합니다.<br>DB에서 Open API로부터 받은 현재 날씨와 적합한 옷을 탐색한 뒤, 날씨 정보와 옷 정보, 뉴스 정보를 클라이언트에게 전달합니다.

### DevOps
<img src="https://user-images.githubusercontent.com/61102301/100213594-26389c00-2f52-11eb-9f09-669f4e2a6c52.jpeg" width="80%"></img>
> 로컬 레포지토리에서 개인 원격 레포지토리(Github)로 `push` 합니다.<br>개인 원격 레포지토리에서 팀 원격 레포지토리로 `pull request` 하고, 팀원 확인 후 `merge` 합니다.<br>Github webhook으로 인해 Jenkins에서 해당 이벤트를 감지하고, 빌드 및 AWS 배포를 진행합니다.