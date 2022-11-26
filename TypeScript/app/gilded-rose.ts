import { Item } from "./models/item";
import { increaseQuality, increaseQualityForConcert, updateQualityItem } from "./utils/utils";

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {

    this.items.forEach(item => {
            
      switch (item.name) {
          case 'Aged Brie': {
              item = this.updateQualityForAgedBrie(item)
              break;
          }
          case 'Backstage passes to a TAFKAL80ETC concert': {
                  item = this.updateQualityForConcert(item)
                  break;
          }
          case  'Sulfuras, Hand of Ragnaros':  {
                  item = this.updateQualityForSulfuras(item)
                  break;
          }
          default: {
              item = this.updateQualityForNormalItem(item)
          }
      }
    })
    return this.items;
  }

  updateQualityForAgedBrie(item) {
    item.quality = increaseQuality(item.quality)
    item.quality = item.sellIn < 0 ? increaseQuality(item.quality) : item.quality
    item.sellIn -= 1;

    return item
  }  
  
  updateQualityForNormalItem(item) {
    item = updateQualityItem(item)
    item.sellIn -= 1

    return item
  }

  updateQualityForSulfuras(item) {
    return item
  }

  updateQualityForConcert(item) {
    item.quality = item.sellIn === 0 ? 0 : increaseQualityForConcert(item);    
    item.sellIn -= 1

    return item;
  }
}
