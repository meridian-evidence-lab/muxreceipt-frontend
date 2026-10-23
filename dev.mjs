import {spawn} from 'node:child_process';
import {fileURLToPath} from 'node:url';
const backend=spawn(process.execPath,['--env-file-if-exists=.env','server.mjs'],{cwd:fileURLToPath(new URL('../muxreceipt-backend/',import.meta.url)),stdio:'inherit',env:{...process.env,PORT:'4311'}});
const frontend=spawn(process.execPath,['--env-file-if-exists=.env','server.mjs'],{cwd:fileURLToPath(new URL('./',import.meta.url)),stdio:'inherit',env:{...process.env,PORT:'4310',API_URL:'http://127.0.0.1:4311'}});
let stopping=false;function stop(code=0){if(stopping)return;stopping=true;backend.kill();frontend.kill();process.exitCode=code;}
for(const child of [backend,frontend]){child.on('error',e=>{console.error(e.message);stop(1);});child.on('exit',code=>stop(code??1));}
for(const signal of ['SIGINT','SIGTERM'])process.on(signal,()=>stop());
