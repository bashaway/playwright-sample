# preparation

## install nodejs

https://learn.microsoft.com/ja-jp/windows/dev-environment/javascript/nodejs-on-windows

## install playwright

```
npm install -D @playwright/test
npx playwright install
```

# playwright

## clone repo

```
git clone https://github.com/bashaway/playwright-sample.git
cd playwright-sample/e2e
```

## environment settings

```
# set environment valiables
$env:GITHUB_TOKEN = "ghe_xxxxxxxxxx"

# save session state
npx playwright open https://github.com --save-storage=dev.state.json
npx playwright open https://github.com --save-storage=prod.state.json
```


## Run test

```
# run test ( development site )
npx playwright test

# run test ( production site )
npx playwright test -c playwright_prod.config.ts
```

# TIPS

## Test Code Generator

```
npx playwright codegen https://wikipedia.org
npx playwright codegen https://github.com --load-storage=dev.state.json
npx playwright codegen https://github.com --load-storage=prod.state.json
```

## ja

ファイル形式がUTF8ならテストケース名に日本語を使える。
