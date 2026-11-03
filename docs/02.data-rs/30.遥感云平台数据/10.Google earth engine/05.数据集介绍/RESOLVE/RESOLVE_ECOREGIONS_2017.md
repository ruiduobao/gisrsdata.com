---
title: "RESOLVE Ecoregions 2017"
date: 2026-11-03 12:00:00
permalink: /pages/ff7bd76a/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "biodiversity"
  - "conservation"
  - "ecoregions"
  - "ecosystems"
  - "global"
  - "habitats"
  - "protection"
  - "resolve"
  - "table"
---

# RESOLVE Ecoregions 2017

## 数据集简介

The RESOLVE Ecoregions dataset, updated in 2017, offers a depiction of the 846 terrestrial
ecoregions that represent our living planet.  View the stylized map at
[https://ecoregions2017.appspot.com/](https://ecoregions2017.appspot.com/) or in
[Earth Engine](https://code.earthengine.google.com/b961ab2adfcb03c920aab63d86c49eb2).

Ecoregions, in the simplest definition, are ecosystems of regional extent.
Specifically, ecoregions represent distinct assemblages of biodiversity-all
taxa, not just vegetation-whose boundaries include the space required to
sustain ecological processes. Ecoregions provide a useful basemap for
conservation planning in particular because they draw on natural, rather
than political, boundaries, define distinct biogeographic assemblages and
ecological habitats within biomes, and assist in representation of Earth's
biodiversity.

This dataset is based on recent advances in biogeography - the science
concerning the distribution of plants and animals. The original ecoregions
dataset has been widely used since its introduction in 2001, underpinning the
most recent analyses of the effects of global climate change on nature by
ecologists to the distribution of the world's beetles to modern conservation
planning.

The 846 terrestrial ecoregions are grouped into 14 biomes and 8 realms. Six
of these biomes are forest biomes and remaining eight are non-forest biomes.
For the forest biomes, the geographic boundaries of the ecoregions
(Dinerstein et al., 2017) and protected areas (UNEP-WCMC 2016) were
intersected with the Global Forest Change data (Hansen et al. 2013) for the
years 2000 to 2015, to calculate percent of habitat in protected areas and
percent of remaining habitat outside protected areas.  Likewise, the
boundaries of the non-forest ecoregions and protected areas (UNEP-WCMC 2016)
were intersected with Anthropogenic Biomes data (Anthromes v2) for the year
2000 (Ellis et al., 2010) to identify remaining habitats inside and outside
the protected areas. Each ecoregion has a unique ID, area (sq. degrees), and NNH
(Nature Needs Half) categories 1-4. NNH categories are based on percent of
habitat in protected areas and percent of remaining habitat outside
protected areas.

1. Half Protected: More than 50% of the total ecoregion area is already
   protected.
2. Nature Could Reach Half: Less than 50% of the total ecoregion area is
   protected but the amount of remaining unprotected natural habitat could
   bring protection to over 50% if new conservation areas are added to the
   system.
3. Nature Could Recover: The amount of protected and unprotected natural
   habitat remaining is less than 50% but more than 20%. Ecoregions in this
   category would require restoration to reach Half Protected.
4. Nature Imperiled: The amount of protected and unprotected natural habitat
   remaining is less than or equal to 20%. Achieving half protected is not
   possible in the short term and efforts should focus on conserving
   remaining, native habitat fragments.

The updated Ecoregions 2017 is the most-up-to-date (as of February 2018) dataset on remaining
habitat in each terrestrial ecoregion. It was released to chart progress towards
achieving the visionary goal of [Nature Needs Half](https://natureneedshalf.org/), to protect half of all
the land on Earth to save a living terrestrial biosphere.

Note - a number of ecoregions are very complex polygons with over a million
vertices, such as Rock & Ice. These ecoregions were split when necessary,
with attributes like Eco_ID being preserved. If you'd like to see all
ecoregions that have been split, please [run this script](https://code.earthengine.google.com/7a437c78fc8cb46ec586bb4e2c10e526).

## 基本信息

- 数据集编号（Earth Engine ID）：`RESOLVE/ECOREGIONS/2017`
- 数据类型：矢量/表格（FeatureCollection）
- 提供方：RESOLVE Biodiversity and Wildlife Solutions、Google Earth Engine
- 时间范围：2017-04-05 至 2017-04-05
- 许可：CC-BY-4.0
- 关键词：biodiversity, conservation, ecoregions, ecosystems, global, habitats, protection, resolve, table

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| BIOME_NAME | STRING | Biome name |
| BIOME_NUM | DOUBLE | Biome number |
| COLOR | STRING | Color |
| COLOR_BIO | STRING | Biome color |
| COLOR_NNH | STRING | NNH color |
| ECO_ID | DOUBLE | Ecoregion unique ID |
| ECO_NAME | STRING | Ecoregion name |
| LICENSE | STRING | CC-BY 4.0 |
| NNH | DOUBLE | NNH category (1-4) based on percent of habitat in protected areas and percent of remaining habitat outside protected areas  |
| NNH_NAME | STRING | Half Protected, Nature Could Reach Half, Nature Could Recover, or Nature Imperiled |
| OBJECTID | DOUBLE | Object id |
| REALM | STRING | Realm name |
| SHAPE_AREA | DOUBLE | Area of ecoregion polygon in square degrees |
| SHAPE_LENG | DOUBLE | Length of ecoregion polygon in degrees |

## 在 Earth Engine 中调用

```js
var dataset = ee.FeatureCollection('RESOLVE/ECOREGIONS/2017');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/RESOLVE_ECOREGIONS_2017
- 数据引用：[Bioscience, An Ecoregions-Based Approach to Protecting Half the
Terrestrial Realm](https://academic.oup.com/bioscience/article/67/6/534/3102935)
[doi:10.1093/biosci/bix014](https://doi.org/10.1093/biosci/bix014)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
