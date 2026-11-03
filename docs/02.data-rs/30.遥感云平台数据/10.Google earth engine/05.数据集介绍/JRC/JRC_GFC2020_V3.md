---
title: "EC JRC global map of forest cover 2020, V3 [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/8b874d85/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "eudr"
  - "forest"
  - "forest-biomass"
  - "jrc"
---

# EC JRC global map of forest cover 2020, V3 [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The global map of forest cover provides a spatially explicit representation
of forest presence and absence for the year 2020 at 10m spatial resolution.

The year 2020 corresponds to the cut-off date of the Regulation from the
European Union "on the making available on the Union market and the export
from the Union of certain commodities and products associated with
deforestation and forest degradation" (EUDR, Regulation (EU) 2023/1115).
In the context of the EUDR, the global forest cover map can be used as a
non-mandatory, non-exclusive and not legally binding source of information.
Further information about the map and its use can be found on the [EU
Observatory on Deforestation and Forest Degradation](https://forest-observatory.ec.europa.eu/forest/) (EUFO) and namely in
the section on Frequently Asked Questions.

Forest means land spanning more than 0.5 hectares with trees higher than
5 meters and a canopy cover of more than 10%, or trees able to reach those
thresholds in situ, excluding land that is predominantly under agricultural
or urban land use. Agricultural use means the use of land for the purpose of
agriculture, including for agricultural plantations (i.e. tree stands in
agricultural production systems such as fruit tree plantations, oil palm
plantations, olive orchards and agroforestry systems) and set- aside
agricultural areas, and for rearing livestock. All plantations of relevant
commodities other than wood, that is cattle, cocoa, coffee, oil palm,
rubber, soya are excluded from the forest definition.

In a first step, the workflow identifies the maximum potential extent of forest
cover circa 2020 by integrating global tree- and mangrove cover data for the year 2020 
(e.g. [Copernicus global land cover map](https://land.copernicus.eu/en/products/global-dynamic-land-cover/land-cover-2020-raster-10-m-global-annual)).
In addition, this delineation uses historical time-series of tree cover and loss to
identify areas of potentially unstocked forest due to e.g., natural disturbances or
forest management practices. In a second step, this maximum potential forest extent
is intersected with various other data layers on tree height, deforestation, cropland,
agroforestry, and other land uses. The application of a series of complex Boolean decision
rules excludes areas that are not forest according to the definition of the FAO-FRA and EUDR.

The global input layers, mapping approach, and accuracy of GFC 2020 version 3 are
described in a Science for Policy report released in May 2026 and available from the JRC Publications Repository: [Bourgoin et al. 2026](https://publications.jrc.ec.europa.eu/repository/handle/JRC146622). A technical
report ([Bourgoin et al. 2024](https://op.europa.eu/en/publication-detail/-/publication/f9baaa45-e73f-11ee-9ea8-01aa75ed71a1/language-en)) describes the mapping approach for the first version; methodological
changes in version 2 and comparisons with other maps are described in [Bourgoin et al. (2025)](https://op.europa.eu/en/publication-detail/-/publication/e2c286ac-14e9-11f0-b1a3-01aa75ed71a1/language-en).
[Colditz et al. (2025)](https://op.europa.eu/en/publication-detail/-/publication/e86f56dd-15b5-11f0-b1a3-01aa75ed71a1/language-en) describe the accuracy assessment protocol and results for GFC 2020 version 2.
[Bourgoin et al. 2025](https://essd.copernicus.org/preprints/essd-2025-351/) present the mapping methodology and accuracy and compare the map to other
global products. A comparative study between GFC 2020 version 1 and a national map was carried
out over Ivory Coast ([Verhegghen et al, 2024](https://op.europa.eu/en/publication-detail/-/publication/ff3a48df-7957-11ef-bbbe-01aa75ed71a1/language-en)). A user guide explains how to visualize and interact
with GFC2020 to support the EUDR risk assessment ([Simonetti et al. 2025](https://op.europa.eu/en/publication-detail/-/publication/a9ec1c5d-3780-11f0-8a44-01aa75ed71a1/language-en)). 

The GFC 2020 map may be revised if new information, additional large-scale data layers
or revised global spatial data layers for year 2020 will be made available.

For a list of known issues please refer to [this website](https://forobs.jrc.ec.europa.eu/GFC).

## 基本信息

- 数据集编号（Earth Engine ID）：`JRC/GFC2020/V3`
- 数据类型：影像（Image）
- 提供方：Joint Research Centre, European Commission、Google Earth Engine
- 时间范围：2020-12-31 至 2020-12-31
- 空间分辨率：10 米
- 许可：proprietary
- 关键词：eudr, forest, forest-biomass, jrc

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Map | Global forest cover 2020 | 10 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('JRC/GFC2020/V3');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JRC_GFC2020_V3
- 数据引用：Bourgoin, Clement; Verhegghen, Astrid; Ameztoy, Iban;
Carboni, Silvia; Achard, Frederic; Colditz, Rene (2024): Global map of
forest cover 2020 - version 3. European Commission, Joint Research
PID: [http://data.europa.eu/89h/8c561543-31df-4e1b-9994-e529afecaf54](http://data.europa.eu/89h/8c561543-31df-4e1b-9994-e529afecaf54)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
