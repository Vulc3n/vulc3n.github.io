var _0x4385=['innerWidth','getElementById','width','canvas','radius','floor','fillStyle','randBetween','closePath','ctx','HVV倒计时','innerHeight','reset','random','updateBound','arc','getTime','innerText','body','createSnowflakes','createElement','snowflakes','day','resize','appendChild','update','getContext','height','onResize','hour','beginPath','addEventListener'];var _0x1b87=function(_0x4385ce,_0x1b87b3){_0x4385ce=_0x4385ce-0x0;var _0x535cee=_0x4385[_0x4385ce];return _0x535cee;};class Snowflake{constructor(){this['x']=0x0;this['y']=0x0;this['vx']=0x0;this['vy']=0x0;this['radius']=0x0;this['alpha']=0x0;this[_0x1b87('0xc')]();}['reset'](){this['x']=this['randBetween'](0x0,window[_0x1b87('0x0')]);this['y']=this['randBetween'](0x0,-window[_0x1b87('0xb')]);this['vx']=this['randBetween'](-0x3,0x3);this['vy']=this[_0x1b87('0x7')](0x2,0x5);this['radius']=this[_0x1b87('0x7')](0x1,0x4);this['alpha']=this[_0x1b87('0x7')](0.1,0.9);}[_0x1b87('0x7')](_0x535beb,_0x5e6e11){return _0x535beb+Math[_0x1b87('0xd')]()*(_0x5e6e11-_0x535beb);}['update'](){this['x']+=this['vx'];this['y']+=this['vy'];if(this['y']+this[_0x1b87('0x4')]>window[_0x1b87('0xb')]){this[_0x1b87('0xc')]();}}}class Snow{constructor(){this[_0x1b87('0x3')]=document[_0x1b87('0x14')](_0x1b87('0x3'));this['ctx']=this[_0x1b87('0x3')][_0x1b87('0x1a')]('2d');document[_0x1b87('0x12')][_0x1b87('0x18')](this[_0x1b87('0x3')]);window[_0x1b87('0x1f')](_0x1b87('0x17'),()=>this['onResize']());this['onResize']();this[_0x1b87('0xe')]=this['update']['bind'](this);requestAnimationFrame(this['updateBound']);this[_0x1b87('0x13')]();}[_0x1b87('0x1c')](){this['width']=window[_0x1b87('0x0')];this['height']=window['innerHeight'];this['canvas'][_0x1b87('0x2')]=this[_0x1b87('0x2')];this[_0x1b87('0x3')][_0x1b87('0x1b')]=this[_0x1b87('0x1b')];}[_0x1b87('0x13')](){const _0xee5306=window['innerWidth']/0x4;this[_0x1b87('0x15')]=[];for(let _0x2d38f3=0x0;_0x2d38f3<_0xee5306;_0x2d38f3++){this['snowflakes']['push'](new Snowflake());}}['update'](){this['ctx']['clearRect'](0x0,0x0,this['width'],this[_0x1b87('0x1b')]);for(let _0x3a68b8 of this[_0x1b87('0x15')]){_0x3a68b8[_0x1b87('0x19')]();this['ctx']['save']();this['ctx'][_0x1b87('0x6')]='#FFF';this[_0x1b87('0x9')][_0x1b87('0x1e')]();this[_0x1b87('0x9')][_0x1b87('0xf')](_0x3a68b8['x'],_0x3a68b8['y'],_0x3a68b8['radius'],0x0,Math['PI']*0x2);this[_0x1b87('0x9')][_0x1b87('0x8')]();this['ctx']['globalAlpha']=_0x3a68b8['alpha'];this['ctx']['fill']();this[_0x1b87('0x9')]['restore']();}requestAnimationFrame(this['updateBound']);}}new Snow();var stop=![];function show_runtime(){var _0x31d72d='2023/8/23\x2021:00:00';var _0x3743ca=new Date(_0x31d72d);var _0x3a65ef=new Date()[_0x1b87('0x10')]();gap=_0x3743ca-_0x3a65ef;var _0x15025e=0x3e8;var _0x37ac94=_0x15025e*0x3c;var _0x4c3225=_0x37ac94*0x3c;var _0x52b74d=_0x4c3225*0x18;var _0x4e3a3c=Math[_0x1b87('0x5')](gap/_0x52b74d);var _0x720435=Math['floor'](gap%_0x52b74d/_0x4c3225);var _0x11baa9=Math[_0x1b87('0x5')](gap%_0x4c3225/_0x37ac94);var _0x18fe74=Math[_0x1b87('0x5')](gap%_0x37ac94/_0x15025e);if(_0x4e3a3c,_0x720435,_0x11baa9,_0x18fe74<0x0){stop=!![];}else{document[_0x1b87('0x1')](_0x1b87('0x16'))[_0x1b87('0x11')]=_0x4e3a3c;document['getElementById']('hour')[_0x1b87('0x11')]=_0x720435;document['getElementById']('minute')['innerText']=_0x11baa9;document[_0x1b87('0x1')]('second')[_0x1b87('0x11')]=_0x18fe74;}}function newyear(){document['getElementById']('title')['innerText']=_0x1b87('0xa');document[_0x1b87('0x1')](_0x1b87('0x16'))[_0x1b87('0x11')]='0';document['getElementById'](_0x1b87('0x1d'))[_0x1b87('0x11')]='24';document[_0x1b87('0x1')]('minute')[_0x1b87('0x11')]='60';document['getElementById']('second')['innerText']='60';}var time=setInterval(()=>{show_runtime();if(stop===!![]){newyear();clearInterval(time);}},0x3e8);
