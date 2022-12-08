## webpack dev server proxy
webpack dev server의 proxy를 사용하게 되면, 브라우저 API를 요청할 때 백엔드 서버에 직접적으로 요청을 하지 않고, 현재 개발 서버의 주소로 우회 요청을 하게 된다. 그러면 웹팩 개발 서버에서 해당 요청을 받아 그대로 백엔드 서버로 전달하고, 백엔드 서버에서 응답한 내용을 다시 브라우저쪽으로 반환한다.

웹팩 개발 서버의 proxy 설정은 create-react-app를 통해 만든 react 프로젝트에서는 `package.json`에서 `"proxy"` 값을 우회할 API 주소 값으로 설정하여 쉽게 적용할 수 있도록 구성할 수 있다.

기존의 `fetch` 또는 `axios`를 통해 요청하던 부분에서 도메인을 제거해야 한다.
```jsx
// 기존
export async function getAllfetch() {

    const response = await fetch('우회할 api주소/params');
    .then(() => {
			...
		})
}

// 수정
export async function getAllfetch() {

    const response = await fetch('/params');
    .then(() => {
			...
		})
}
```