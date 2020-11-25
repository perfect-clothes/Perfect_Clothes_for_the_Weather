# PCW_client
## 기능
- geolocation API를 사용하여 위치권한을 묻고, 사용자의 위치에 따른 날씨와 옷을 추천
- 도시를 검색하면 해당 도시의 위치정보를 서버에 전송하여 날씨 데이터를 가져옴
- 추천 받은 옷 항목을 클릭할 경우 네이버 검색 API를 이용하여 해당 옷의 이미지를 모달 형태로 보여줌
- 날씨 뉴스를 가져오고 뉴스 제목을 클릭할 경우 원본 페이지로 이동
- UX를 위한 loading state 관리 및 spinner를 이용한 loading UI 구현
- error 화면 및 검색 실패 모달 구현
- 낮과 밤에 따라 바뀌는 UI와 배경 설정
- 반응형 페이지 구현
- Github Actions와 AWS S3를 이용한 자동 빌드, 배포 구현
## Stack
### Frontend
- react
- react-hooks
- redux
- redux-saga
- redux-actions
- react-redux
- styled-components
- react-router-dom
- dotenv
- axios
- react-helmet-async
### CI/CD
- Github Actions
- AWS S3
- AWS Cloudfront
- AWS Route53
### 협업 툴
- Git
- Github
- Notion
- Figma
## 기능 설명
<img width="350" alt="default_daytime_1" src="https://user-images.githubusercontent.com/59433441/100039303-4a0fbb00-2e48-11eb-9a42-488007fec86b.png">
<img width="350" alt="default_daytime_2" src="https://user-images.githubusercontent.com/59433441/100039350-64e22f80-2e48-11eb-885d-6ae07387f248.png">
사이트에 처음 접속했을 때 나타나는 화면이다.<br/>
기본값으로 서울을 설정하였으며, 순서대로 서울의 날씨, 날씨에 따른 옷 추천, 오늘의 날씨, 날씨 뉴스를 보여준다.<br/>
<img width="350" alt="default_night_1" src="https://user-images.githubusercontent.com/59433441/100039980-c35bdd80-2e49-11eb-8f84-d20115afc7f3.png">
<img width="350" alt="default_night_2" src="https://user-images.githubusercontent.com/59433441/100040012-d078cc80-2e49-11eb-9d22-53cf4085fc0f.png">
오후 7시부터 오전 6시까지는 밤으로 설정하여 배경과 UI를 밤에 맞게 설정하였다.<br/>
<div>
    <img width="380" style="margin-right:5px;" alt="ask_authority" src="https://user-images.githubusercontent.com/59433441/100196653-84f31b00-2f3c-11eb-810b-f89fd5a9208c.png">
    <img width="320" alt="loading" src="https://user-images.githubusercontent.com/59433441/100196659-87557500-2f3c-11eb-8305-a32c72673c7c.png">
</div>
위치 권한을 허용할 것인지 물어보고 허용한다면 해당 위치의 정보를 받아 날씨, 옷 추천을 보여준다.<br/>
만약 위치 권한을 차단할 경우 기본값인 서울이 계속 보이게 된다.<br/>
데이터 로드시 spinner로 로딩 UI를 구현하여 UX를 향상시켰다.<br/>
<div>
    <img width="365" alt="authority_confirm" src="https://user-images.githubusercontent.com/59433441/100197112-385c0f80-2f3d-11eb-9f99-a483eb98ec95.png">
    <img width="350" alt="error" src="https://user-images.githubusercontent.com/59433441/100197473-b5878480-2f3d-11eb-832c-ef981c9027e8.png">
</div>
데이터 로드에 성공하면 해당 위치의 정보를 보여주고 실패하면 에러 화면이 나타나게 된다.<br/>
<div>
    <img width="290" alt="search" src="https://user-images.githubusercontent.com/59433441/100052412-42104500-2e61-11eb-8c4b-dd9404697c9b.png">
    <img width="350" alt="search_modal" src="https://user-images.githubusercontent.com/59433441/100052415-43417200-2e61-11eb-8735-7eb49fecea9c.png">
</div>
도시 검색 기능을 이용하면 특정 도시의 날씨 정보와 추천 옷들을 찾아볼 수 있다.<br/>
현재 대한민국의 시 단위까지 검색 가능하며, 해당 단위에 없는 지역을 검색하거나 잘못된 도시를 검색했을 경우 검색에 실패했다는 모달이 나타난다.<br/>
<div>
    <img width="250" alt="recommend_modal" src="https://user-images.githubusercontent.com/59433441/100042191-4bdc7d00-2e4e-11eb-8e5c-bfc0bc47ba47.png">
    <img width="250" alt="scroll" src="https://user-images.githubusercontent.com/59433441/100042057-facc8900-2e4d-11eb-95a0-2ebd5f850683.png">
    <img width="250" alt="news" src="https://user-images.githubusercontent.com/59433441/100042066-015b0080-2e4e-11eb-9c77-d639ac8b11e4.png">
</div>
추천 옷 항목을 클릭할 경우 옷에 대한 이미지를 모달 형태로 보여준다.<br/>
오늘의 날씨는 3시간 간격의 날씨 정보이며 스크롤하여 볼 수 있다.<br/>
날씨 뉴스들은 총 10개를 보여주고 제목을 클릭할 경우 원본 뉴스 페이지로 이동할 수 있다.<br/>
<img width="250" alt="responsive_1" src="https://user-images.githubusercontent.com/59433441/100042838-a32f1d00-2e4f-11eb-8d13-1fdc66e7c552.png">
<img width="250" alt="responsive_2" src="https://user-images.githubusercontent.com/59433441/100042841-a3c7b380-2e4f-11eb-834e-5e55974a2e99.png">
반응형 페이지를 구현하여 모바일 화면에서도 원활하게 사용할 수 있도록 하였다.<br/>

## 프로젝트를 마치며 
### 좋았던 점
- 협업을 경험할 수 있어서 너무 유익했다.
- 비록 많은 데이터는 아니었지만, 클라이언트-서버 간의 통신을 하면서 익숙해질 수 있었다.
- Git을 이용하여 코드 관리를 하면서 협업 시에 Git을 어떻게 사용해야 할지, 어떻게 해야 더 효율적으로 관리할 수 있는지 배울 수 있었다.
- Github Actions와 AWS S3를 이용하여 자동 배포 시스템을 구현할 수 있었으며, 자동 빌드, 자동 배포의 편리함을 뼛속 깊이 느낄 수 있었다.
- UI와 UX에 대해 많이 생각해보게 되고, 공부해보고 싶은 욕심을 갖게 되는 계기가 되었다.
### 아쉬운 점
- 팀원 모두 각자의 할 일을 하면서 병행한 프로젝트인지라 생각보다 오랜 시간이 걸렸다.
- AWS에 익숙하지 않아 배포 과정에서 많은 시간을 소비하였다. 앞으로 계속 사용해보면서 빨리 익숙해져야 할 것 같다.
- 효율적인 상태 관리, 디자인 패턴에 대해 아무것도 모르고 있다는 생각이 들었다. 나중에 전체적으로 코드들을 더 깔끔하게 정리해보고 싶다.
