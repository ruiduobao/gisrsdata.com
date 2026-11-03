---
title: "EC JRC global map of forest types 2020, V1"
date: 2026-11-03 12:00:00
permalink: /pages/3fb6432f/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "eudr"
  - "forest"
  - "forest-biomass"
  - "jrc"
  - "landcover"
  - "primary-forest"
---

# EC JRC global map of forest types 2020, V1

## 数据集简介

The global map of forest types provides a spatially explicit representation
of primary forest, naturally regenerating forest and planted forest (including
plantation forest) for the year 2020 at 10m spatial resolution. The base layer
for mapping these forest types is the extent of forest cover of version 3 of
the Global Forest Cover map for year 2020 (JRC GFC 2020). The definitions of
the forest types follow the definitions of the Regulation from the European
Union "on the making available on the Union market and the export from the
Union of certain commodities and products associated with deforestation and
forest degradation" (EUDR, Regulation (EU) 2023/1115), which are similar to
characteristics and specific forest categories from the FAO Global Forest
Resources Assessment. The year 2020 corresponds to the cut-off date of the
EUDR.

In the context of the EUDR, the global forest type map can be used as a
non-mandatory, non-exclusive and not legally binding source of information,
namely in the phase of risk assessment by operators and traders. Further
information about the map and its use can be found on the EU Observatory on
Deforestation and Forest Degradation. The definition of forest degradation
under the EUDR implies that for year 2020 it is only necessary to assess the
presence of primary forests and naturally regenerating forests; all other
forests, including plantation forests, were mapped under class "planted
forests". Class "other wooded land" exists only outside the extent of forest
cover in the Global Forest Cover map for year 2020 and is therefore not
mapped in GFT 2020.

The global map of forest types v1 combines available global datasets
(wall-to-wall or global in their scope) that indicate or are proxies for the
four main forest types. The main data layers that are used to delineate primary
forests in GFT 2020 are:

1. The Forest Landscape Integrity Index in 2019
1. Map of undisturbed tropical mangroves in 2020 and degradation and
deforestation in tropical moist forests from 1990 to 2020 (from JRC-TMF)
1. Deforestation alerts (RADD) up to end of 2020
1. Map of Intact Forest Landscapes 2020
1. World Database on Protected Areas
1. The European Primary Forest Dataset from Sabatini et al. 2021
1. Global tree cover loss from 2001 to 2020 in combination with the map of
drivers of global forest loss
1. A map on global mining land use.

The main layers to map planted forests (including plantation forests) are:

1. The WRI Spatial Database on Planted Trees (version 3)
1. IIASA Forest Management classes on planted/plantation forest
1. The Global Forest Canopy Height dataset in 2019
1. global tree cover in 2000 and loss from 2001 to 2020.
1. global drivers of forest loss.
1. Global natural forests 2020.

The global input layers and mapping approach of GFT 2020 version 1 are
described in a separate technical report, expected to be released by March 2026 and available from
the JRC Publications Repository: [Bourgoin et al. 2026](https://publications.jrc.ec.europa.eu/repository/handle/JRC146622).
A technical report [Bourgoin et al. 2025](https://op.europa.eu/en/publication-detail/-/publication/e2c286ac-14e9-11f0-b1a3-01aa75ed71a1/language-en)
describes the mapping approach for the preliminary version (version 0) of GFT 2020.

For a list of known issues please refer to
[this website](https://forobs.jrc.ec.europa.eu/GFT).

## 基本信息

- 数据集编号（Earth Engine ID）：`JRC/GFC2020_subtypes/V1`
- 数据类型：影像（Image）
- 提供方：Joint Research Centre, European Commission、Google Earth Engine
- 时间范围：2020-01-01 至 2020-12-31
- 空间分辨率：10 米
- 许可：proprietary
- 关键词：eudr, forest, forest-biomass, jrc, landcover, primary-forest

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Map | Global forest types 2020 | 10 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('JRC/GFC2020_subtypes/V1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JRC_GFC2020_subtypes_V1
- 数据引用：Bourgoin, Clement; Ameztoy, Iban; Verhegghen, Astrid; Carboni, Silvia; 
Achard, Frederic; Colditz, Rene (2026): Global map
of forest types 2020 - version 1. European Commission, Joint Research Centre
(JRC) [Dataset] PID:
[http://data.europa.eu/89h/45182662-3015-4a25-8d1e-aa857d75235d](http://data.europa.eu/89h/45182662-3015-4a25-8d1e-aa857d75235d).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
