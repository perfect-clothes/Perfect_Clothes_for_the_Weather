import client from "./client";

//뉴스 데이터 불러옴
export const loadNews = () => client.post(`${process.env.REACT_APP_SERVER_URL}/api/news`, {query: '날씨'});