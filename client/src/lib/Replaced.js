//정규식을 사용하여 문자열 내부에 있는 html 태그를 제거해주는 함수

const Replaced = text => {
    return text.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, "");
};

export default Replaced;