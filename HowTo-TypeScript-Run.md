# How to run TypeScript

## Install typescript
npm install -g typescript  

## Check Version
tsc --version  

## Make folder and run TypeScript Compiler
<pre>
mkdir ts-sample
cd ts-sample
tsc --init
</pre>

tsconfig.json 이 생김  
```
{
  "compilerOptions": {
    "target": "es2016",                                 
    "module": "commonjs",                              
    "esModuleInterop": true,                           
    "forceConsistentCasingInFileNames": true,         
    "strict": true,                                
    "skipLibCheck": true                              
}
```

folder 에서 tsc

xxx.ts --> xxx.js 생성  
