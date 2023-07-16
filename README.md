## styled-component 활용하기

### styled-component를 객체 형태로 내보내기(export 하기)

- 선언

```
export const S = {
    StyledSomething : styled.div`
        style code ~~~
    `
}
```

- 활용 (someComponent.jsx or .js)

```
코드생략 ...
import { S } from './~~~~~'

코드 생략

<S.StyledSomething>
    tag content
</S.StyledSomething>
```
