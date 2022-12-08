## React Proxy 사용법
webpack dev server에서 제공하는 proxy는 전역적인 설정이기 때문에, 이 방법이 완벽하게 적용되지 않는 경우가 있어서 **수동으로** proxy를 적용해줘야하는 경우가 발생한다. 이때는 `http-proxy-middleware` 라이브러리를 사용하면 된다.

```
npm install http-proxy-middleware --save
```
src 폴더 안에 [`setupProxy.js`](./src/setupProxy.js)를 생성해서 코드를 작성하면 된다.

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