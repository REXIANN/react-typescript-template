# Frontend Template for React-Typescript

이 프로젝트는 [Create React App](https://github.com/facebook/create-react-app) 로 만들었습니다.

추후 다른 프로젝트를 시작하기 위한 템플릿 프로젝트로 사용할 예정입니다.

## 기술스택

```javascript
const project = {
  Framework: 'React',
  Language: 'TypeSciprt',
  CSS: 'emotion-css',
  AJAX: 'axios',
  Lint: 'eslint8',
  Test: 'testing-library/react',
  UI: 'storybook',
  Build: 'Docker',
  Commands: 'Task',
  packageManager: 'Yarn Berry'
}
```

## TODO
1. storybook, test.ts 예제 추가
2. recoil, SWR 폴더 구조 생성 및 간단한 훅 추가
3. eslintrc, prettierrc 세부 설정
4. 위의 세 개 의 동작 확인
5. task 명령어로 통일
    *yarn berry(yarn2)로 변경이 가능할지 알아보기


## yarn berry
```bash
yarn set version berry
yarn --version
# v.3.x.x
```

* `.npmrc`파일을 `.yarnrc.yml`로 수정
* `package.lock.json` 파일 제거
* `node_modules` 폴더 제거
* `package.json`에 있는 `eslintConfig`는 `.eslintrc.js` 폴더로 이동

yarn plugin typescript를 설치. 이 플러그인은 `@types/`가 포함되지 않은 패키지를 가져올 경우 종속성에 자동으로 해당 패키지의 타입 패키지를 설치해준다.
```shell
yarn plugin import typescript
```
