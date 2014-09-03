# hello-world-spmjs3 [![spm version](http://spmjs.io/badge/hello-world-spmjs3)](http://spmjs.io/package/hello-world-spmjs3)

---

是spmjs v3.0 的demo

每个子项目记得都需要spm build 

目前这个版本还不支持 -O 参数 

要手动吧生成的各自 dist 中的文件复制到根目录


---

## Install

```
$ spm install hello-world-spmjs3 --save
```

## Usage

index.html
```javascript
    seajs.config({
        base: "../dist"
    });

    seajs.use("hello-world-spmjs3/0.0.1/index-debug.js")
```
