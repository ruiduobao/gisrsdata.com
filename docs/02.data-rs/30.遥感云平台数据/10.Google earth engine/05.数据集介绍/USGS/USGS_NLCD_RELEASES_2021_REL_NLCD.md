---
title: "NLCD 2021: USGS National Land Cover Database, 2021 release"
date: 2026-11-03 12:00:00
permalink: /pages/9011c2bb/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "blm"
  - "landcover"
  - "landuse-landcover"
  - "mrlc"
  - "nlcd"
  - "usgs"
---

# NLCD 2021: USGS National Land Cover Database, 2021 release

## 数据集简介

The U.S. Geological Survey (USGS), in partnership with several federal
agencies, has now developed and released seven National Land Cover
Database (NLCD) products: NLCD 1992, 2001, 2006, 2011, 2016, 2019,
and 2021. Beginning with the 2016 release, land cover products were
created for two-to-three-year intervals between 2001 and the most
recent year. These products provide spatially explicit and reliable
information on the Nation’s land cover and land cover change.
NLCD continues to provide innovative, consistent, and robust
methodologies for production of a multi-temporal land cover and
land cover change database.

The NLCD 2021 release is update based, so the Land Cover and Impervious
Surface products released in [2019](USGS_NLCD_RELEASES_2019_REL_NLCD)
are unchanged and used directly with NLCD 2021 for change analysis
though the NLCD timespan. Science products and the change index are
updated and will need to be reacquired to contain the additional 2021
change. These new products use a streamlined compositing process for
assembling and preprocessing Landsat imagery and geospatial ancillary
datasets; a temporally, spectrally, and spatially integrated land cover
change analysis strategy; a theme-based post-classification protocol for
generating land cover and change products; a continuous fields
biophysical parameters modeling method; and a scripted operational system.
The overall accuracy of the 2019 Level I land cover was 91%. Results from
this study confirm the robustness of this comprehensive and highly
automated procedure for NLCD 2021 operational mapping
(see [doi:10.1080/15481603](https://doi.org/10.1080/15481603.2023.2181143)
for the latest accuracy assessment publication). Questions about the NLCD
2021 land cover product can be directed to the NLCD 2021 land cover
mapping team at USGS EROS, Sioux Falls, SD (605) 594-6151 or
mrlc@usgs.gov. See included spatial metadata for more details.

Please see National Land Cover Database (NLCD) [2019 NLCD release](https://doi.org/10.5066/P9KZCM54)
for the 2019 release of NLCD which is used with the 2021 release for
comparisons through the years. Also refer to the larger NLCD Community
page for all things NLCD related National Land Cover Database (NLCD)
[NLCD Community Page](https://www.sciencebase.gov/catalog/item/6345b637d34e342aee0863aa).

## 基本信息

- 数据集编号（Earth Engine ID）：`USGS/NLCD_RELEASES/2021_REL/NLCD`
- 数据类型：影像集合（ImageCollection）
- 提供方：USGS、Google Earth Engine
- 时间范围：2021-01-01 至 2022-01-01
- 空间分辨率：30 米
- 许可：CC0-1.0
- 关键词：blm, landcover, landuse-landcover, mrlc, nlcd, usgs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| landcover | All images include the landcover classification scheme described in the [Product Legend](https://www.mrlc.gov/data/legends/national-land-cover-database-class-legend-and-description). The legends are also available as metadata on each image. The classes in the product legend are given below.  | 30 |  |
| impervious | Percent of the pixel covered by developed impervious surface.  | 30 |  |
| impervious_descriptor | Defines which impervious layer pixels are roads and provides the best fit description for impervious pixels that are not roads.  | 30 |  |
| science_products_land_cover_change_count | These products were developed as both intermediate steps to generate the base NLCD products, and as value added products that standalone to provide additional insights. This product was derived using the 9-epoch NLCD land cover (2001, 2003, 2006, 2008, 2011, 2013, 2016, 2019, and 2021) from the released NLCD 2021 product suite. Any change between two consecutive epochs is calculated and the total change frequency/time for each pixel is recorded. This product shows an integer count total of any recorded change for the time period 2001-2021. This product is meant to be used with the change index and individual dates of Land Cover to provide users with a more in depth look at where multiple change events in the same location are occurring on the landscape. All images include the Science Products classification scheme follow the Land Cover system and are described in the [Product Legend](https://www.mrlc.gov/data/legends/national-land-cover-database-class-legend-and-description). The legends are also available as metadata on each image. The classes in the product legend are given below.  | 30 |  |
| science_products_land_cover_change_first_disturbance_date | These products were developed as both intermediate steps to generate the base NLCD products, and as value added products that standalone to provide additional insights. This product was derived using the nine release dates of NLCD land cover (2001, 2003, 2006, 2008, 2011, 2013, 2016, 2019, 2021). This product shows the date of the first land cover change event from these 9 dates of landcover. All images include the Science Products classification scheme follow the Land Cover system and are described in the [Product Legend](https://www.mrlc.gov/data/legends/national-land-cover-database-class-legend-and-description). The legends are also available as metadata on each image. The classes in the product legend are given below.  | 30 |  |
| science_products_land_cover_change_index | These products were developed as both intermediate steps to generate the base NLCD products, and as value added products that standalone to provide additional insights. The NLCD Land Cover change index combines information from all years of land cover change and provides a simple and comprehensive way to visualize change from all 9 dates of land cover in a single layer. The change index was designed to assist NLCD users to understand complex land cover change with a single product. NLCD 2021 does not yet contain updated products for Alaska, Hawaii and Puerto Rico. All images include the Science Products classification scheme follow the Land Cover system and are described in the [Product Legend](https://www.mrlc.gov/data/legends/national-land-cover-database-class-legend-and-description). The legends are also available as metadata on each image. The classes in the product legend are given below.  | 30 |  |
| science_products_land_cover_science_product | These products were developed as both intermediate steps to generate the base NLCD products, and as value added products that standalone to provide additional insights. To better develop NLCD 2021 landcover, spectrally stable grass and shrub areas were separated from the spectrally changing areas of shrub and grass represented by forest harvest, burns, regrowth, and other disturbances. Essentially, this separation usually identifies shrub and grass climax areas from shrub and grass areas in transition back to a forest. This difference is expressed with two extra classes of land cover, called Shrub-Forest and Herbaceous-Forest which are representing areas of current shrub and grass expected to transition back to a forest. Alternatively, the shrub and grass classes of Shrub/Scrub and Grassland/Herbaceous will likely not transition to a forest. However, be cautioned that no extensive ecological analysis went into these class delineations, they are primarily spectral based separations used to delineate broad classes of grass and shrub. All images include the Science Products classification scheme follow the Land Cover system and are described in the [Product Legend](https://www.mrlc.gov/data/legends/national-land-cover-database-class-legend-and-description). The legends are also available as metadata on each image. The classes in the product legend are given below.  | 30 |  |
| science_products_forest_disturbance_date | These products were developed as both intermediate steps to generate the base NLCD products, and as value added products that standalone to provide additional insights. This product shows the most recent forest disturbance date between the years 1986-2021 for every year. This product combines information from the NLCD 2021 change detection, land cover classification, and the LANDFIRE Vegetation Change Tracker (VCT) disturbance product from 1984-2010. For NLCD 2021, this product was used to assess where disturbance occurred for forest areas. This product was originally intended only for forest areas, but it also can be useful for other landcover classes. For example, agricultural areas, which are typically disturbed yearly by tillage, are represented as being disturbed prior to 1986. This "prior to 86" disturbance call was used in some instances as a delineation between forested and non-forest areas. Other classes that are not forest may also be represented with a disturbance indication if the area was forest at some time point during 1986-2021. All images include the Science Products classification scheme follow the Land Cover system and are described in the [Product Legend](https://www.mrlc.gov/data/legends/national-land-cover-database-class-legend-and-description). The legends are also available as metadata on each image. The classes in the product legend are given below.  | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('USGS/NLCD_RELEASES/2021_REL/NLCD');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/USGS_NLCD_RELEASES_2021_REL_NLCD
- 数据引用：Dewitz, J., 2023, National Land Cover Database (NLCD) 2021 Products:
U.S. Geological Survey data release, [doi:10.5066/P9JZ7AO3](https://doi.org/10.5066/P9JZ7AO3)

- DOI：10.5066/P9JZ7AO3

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
