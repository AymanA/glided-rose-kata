import { Item } from "@/models/item"

export const MAXIMUM_QUALITY = 50
export const MINIMUM_QUALITY = 0
export const isLessThanMaximum = quality => quality < MAXIMUM_QUALITY
export const isOverMinimum = quality => quality > MINIMUM_QUALITY

export const increaseQuality = quality => isLessThanMaximum(quality) ? quality + 1 : quality
export const decreaseQuality = quality => isOverMinimum(quality) ? quality - 1 :  quality 
export const updateQualityItem = (item): Item => {
  item.quality = decreaseQuality(item.quality);
  item.quality = item.sellIn <= 0 ? decreaseQuality(item.quality) : item.quality
  
  return item
}
export const increaseQualityForConcert = (item: Item): number => {
    let quality = increaseQuality(item.quality);
    quality = item.sellIn < 11 ? increaseQuality(quality) : quality;
    quality = item.sellIn < 6 ? increaseQuality(quality) : quality;

    return quality
}
