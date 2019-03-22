import {SlidePicture} from './dist/SlidePictures.min.js';
//调用轮播图
var path = ['https://img03.sogoucdn.com/app/a/100520093/dc72c3c04ef01fdf-22176402958c6b80-c38b335da7c9b59cca351a1973458b0f.jpg',
             'https://img01.sogoucdn.com/app/a/100520093/12400ee0679b6e1e-d3e639ff657519ea-a9d4d43a8f00e80cfae6b8f74af91564.jpg',
             'https://img03.sogoucdn.com/app/a/100520093/3c28af542f2d49f7-da1566425074a021-9c373de8439e52c5d885c8459d285946.jpg'];
let slidePicture = new SlidePicture(path);
slidePicture.init('1000','500'); //轮播图长度和宽度
slidePicture.show();