module.exports = {
    mode: "development",
  
    // 엔트리 포인트
    entry: "./src/index.tsx",
  
    // 빌드 결과물을 dist/main.js에 위치
    output: {
      filename: "main.js",
      path: __dirname + "/dist",
    },
  
    // 디버깅을 위해 빌드 결과물에 소스맵 추가
    devtool: "source-map",
  
    devServer: {
        contentBase: './',
        publicPath: '/dist'
    },
    
    resolve: {
      // 파일 확장자 처리
      extensions: [".ts", ".tsx", ".js"],
    },
  
    module: {
      rules: [
        // .ts나 .tsx 확장자를 ts-loader가 트랜스파일
        { test: /\.tsx?$/, loader: "ts-loader" },
        //img 검사
        {
          test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
          loader: "url-loader",
          options: {
            limit: 100000,
            outputPath: "static/img",
            name: "[name].[hash:8].[ext]",
          }
        },
      ],
    },
  }