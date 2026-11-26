---
title: "联合国粮农组织排干有机土面积（年度）1.0"
date: 2026-11-03 12:00:00
permalink: /pages/2e5790b1/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "agriculture"
  - "climate"
  - "climate-change"
  - "emissions"
  - "fao"
  - "ghg"
  - "organic-soils"
  - "weather-and-climate"
---

# 联合国粮农组织排干有机土面积（年度）1.0

英文原名：UN FAO Drained Organic Soils Area (Annual) 1.0

## 这是什么数据

与排干有机土相关的两个 FAO 数据集提供以下估算：

1. DROSA-A：为农业活动（耕地与放牧草地）排水的有机土面积（公顷）

2. DROSE-A：这些土地利用下有机土农业排水产生的碳（C）和一氧化二氮（N2O）估算（千兆克）

年度数据分辨率为 0.0083333 × 0.0083333（赤道处约 1 公里），全球覆盖，时段为 1992–2018 年。

FAOSTAT 的估算遵循政府间气候变化专门委员会（IPCC）指南，以有机土（histosols）作为有机土存在的代理，并以年度土地覆盖图作为随时间变化的组成部分。此外，分析还使用了土壤特征、土地利用和气候信息。碳排放可换算为 CO2：将像元值乘以二氧化碳（CO2）与 C 的分子量之比（44/12）。

有机土在湿润土壤生态系统中形成。它们包括热带和北方泥炭地、高纬度沼泽、蕨类地（原文 ferns，疑为 fens 沼泽之误）和泥沼。有机土仅占全球陆地面积的 3%，却占土壤总碳的 30%，因此在维持地球碳平衡方面发挥着重要作用。农业是世界各地有机土排水的主要原因。排水使有机土的有机质暴露于好氧条件，氧化后向大气释放大量有害的温室气体（GHG）。

DROSA-A 和 DROSE-A 是三个 FAOSTAT 数据集（有机土的耕作；耕地；草地）中发布的排干有机土国家与区域统计的基础。

## 覆盖范围与时间

- 覆盖范围：全球
- 时间范围：1992-01-01 至 2018-01-01

## 分辨率与规格

- 空间分辨率：约 927.67 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| cropland | 耕地有机土（histosols）面积 | 927.67 |  |
| grassland | 草地有机土（histosols）面积 | 927.67 |  |

## 能拿来做什么

- 有机土排水面积与温室气体排放核算
- 国家温室气体清单编制
- 泥炭地保护与农业气候政策分析

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('FAO/GHG/1/DROSA_A');
```

- 数据集编号（Earth Engine ID）：`FAO/GHG/1/DROSA_A`
- 提供方：FAO UN、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/FAO_GHG_1_DROSA_A

## 许可与引用

- 许可：proprietary
- 关键词：agriculture, climate, climate-change, emissions, fao, ghg, organic-soils, weather-and-climate
- 数据引用：FAO 2020. Drained organic soils 1990 - 2019. Global, regional and country
trends.  FAOSTAT Analytical Brief Series No 4, FAO, Rome.
[http://www.fao.org/3/cb0489en/cb0489en.pdf](
  http://www.fao.org/3/cb0489en/cb0489en.pdf)

- DOI：10.5194/essd-12-3113-2020

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [Drained Organic Soils Emissions (Annual) 1.0](/pages/664c80e9/)
- [澳大利亚土壤与景观格网（土壤属性）](/pages/6de4314d/)
- [NLDAS-2: North American Land Data Assimilation System Forcing Fields](/pages/4a88073a/)
- [OpenLandMap Clay Content](/pages/f45c0586/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
