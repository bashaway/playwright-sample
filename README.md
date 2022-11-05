# preparation

## install nodejs

https://learn.microsoft.com/ja-jp/windows/dev-environment/javascript/nodejs-on-windows

## install playwright

```
npm install -D @playwright/test
npx playwright install
```

# playwright

## Run test

```
# save session state
npx playwright open https://github.com --save-storage=dev.state.json
npx playwright open https://github.com --save-storage=prod.state.json

# run test
npx playwright test --project=dev
npx playwright test --project=prod
```

## Test Code Generator

```
# no authentication site
npx playwright codegen https://wikipedia.org

# OpenID Connect authentication site
npx playwright codegen https://github.com --load-storage=dev.state.json
npx playwright codegen https://github.com --load-storage=prod.state.json
```

## TIPS

ファイル形式がUTF8ならテストケース名に日本語を使える。
