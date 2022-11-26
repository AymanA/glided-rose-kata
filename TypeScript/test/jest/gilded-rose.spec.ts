import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose test cases', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('foo');
  });

  it('should decrease quality', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('foo');
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(0);
  });

  // todo fix it
  it('should Once the sell by date has passed, Quality degrades twice as fast', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 4)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('foo');
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(2);
  });

  it('should The Quality of an item is never negative', () => {
    const gildedRose = new GildedRose([new Item('foo', 2, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('foo');
    expect(items[0].sellIn).toBe(1);
    expect(items[0].quality).toBe(0);
  });

  it('should increase quality for Aged Brie', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 2, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Aged Brie');
    expect(items[0].sellIn).toBe(1);
    expect(items[0].quality).toBe(3);
  });

  it('should Quality of an item is never more than 50', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 2, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Aged Brie');
    expect(items[0].sellIn).toBe(1);
    expect(items[0].quality).toBe(50);
  });

  it('should Sulfuras, being a legendary item, never has to be sold or decreases in Quality', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 2, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Sulfuras, Hand of Ragnaros');
    expect(items[0].sellIn).toBe(2);
    expect(items[0].quality).toBe(2);
  });
  
  it('should response correctly to items update quality', () => {
    const gildedRose = new GildedRose([new Item('foo', 2, 4)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('foo');
    expect(items[0].sellIn).toBe(1);
    expect(items[0].quality).toBe(3);
  });

});
