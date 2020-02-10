import Taro from '@tarojs/taro'
import {Image, View} from '@tarojs/components'
import {ITouchEvent} from "@tarojs/components/types/common";
import {MANGA_PAGE} from "@/utils/app-constant";

import './manga-recommend-item.scss'

type MangaRecommendItemProps = CategoryItem& {onClick?: (event: ITouchEvent,id?: string|number) => any}
const MangaRecommendItem: Taro.FC<MangaRecommendItemProps> = ({onClick,id,obj_id,cover, title, sub_title, authors}) => {

  return (
    <View className='mg-manga-item' onClick={e => onClick && onClick(e,id || obj_id)}>
      <View className='mg-manga-item-cover'>
        <Image className='mg-manga-item-cover-img' lazyLoad src={cover} />
      </View>

      <View className='mg-manga-item-title'>{title}</View>
      <View className='mg-manga-item-subtitle'>{sub_title || authors}</View>
    </View>)
}
MangaRecommendItem.defaultProps = {
  onClick: (_event, id) => Taro.navigateTo({url: `${MANGA_PAGE}?oid=${id}`})
}
export default MangaRecommendItem
