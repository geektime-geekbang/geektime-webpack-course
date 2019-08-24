import { helloworld } from './helloworld';
import '../../common';
document.write(helloworld());

if (module.hot) {
    module.hot.accept('./helloworld.js', function() { //告诉 webpack 接受热替换的模块
        console.log('Accepting the updated printMe module!');
        document.write(helloworld());
    })
}