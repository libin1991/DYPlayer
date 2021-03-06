import 'primer-base'
import '../../dist/index.min.css'
import DYPlayer from '../../dist/index.min'
import danmaku from './danmaku'

interface DanmaData {
  content: string
  time: string | number
}
/*eslint-disable*/
const danData = danmaku.barrages
  .map(
    (e): DanmaData => ({
      content: e.m,
      time: e.vt
    })
  )
  .sort((a: DanmaData, b: DanmaData) => +a.time - +b.time)
new DYPlayer({
  container: document.querySelector('#container'),
  danmakuData: danData,
  needDanmaku: true,
  url:
    'http://vod.300hu.com/4c1f7a6atransbjngwcloud1oss/093f0bf2158365025856659457/v.f30.mp4'
})
